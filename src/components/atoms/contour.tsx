'use client'

import { useRef, type FC } from 'react'
import { useFullscreenShader } from '@/hooks/use-fullscreen-shader'
import { hexToRgb } from '@/utils/color'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva(['bg-background animate-fade-in pointer-events-none fixed inset-0 size-full']),
  blur: cva([
    'pointer-events-none fixed inset-0 size-full',
    'backdrop-blur-xl',
    '[mask-image:linear-gradient(to_bottom,#000_0%,transparent_44%,transparent_56%,#000_100%)]'
  ])
}

// Tuning
const baseAlpha = 0.1 // faint lines
const indexAlpha = 0.15 // index lines
const fillAlphaMin = 0 // elevation tint at the lowest tracked terrain value
const fillAlphaMax = 0.025 // elevation tint at the highest tracked terrain value; stays faint so lines still read as the focal layer
const fps = 12 // render cap; GPU-side now, so a smooth rate is cheap
const timeScale = 0.025 // how fast the terrain evolves (per second)
const noiseFreq = 0.005 // spatial scale: higher = zoomed further out = far more lines on screen
const baseWidth = 2 // contour line width in px
const indexWidth = 2 // index line width in px
const levels = 28 // number of contour thresholds (high = lots of tightly packed bands)
const levelMin = 0.3 // lowest terrain value a contour tracks
const levelMax = 0.7 // highest terrain value a contour tracks
const indexEvery = 6 // every Nth contour is a bolder "index" line, as on real topo maps
const mainOctaves = 4 // fractal octaves for the terrain height field
const warpOctaves = 2 // octaves for the domain-warp field
const warpAmp = 1.1 // warp strength: what bends round rings into map-like ridges and valleys
const lacunarity = 2 // frequency multiplier per octave
const gain = 0.5 // amplitude falloff per octave
const panX = 3.5 // horizontal drift (px/s)
const panY = -2 // vertical drift (px/s)
const maxDpr = 1.5 // cap devicePixelRatio: fragment fill + blur cost scales with pixel count

// GLSL float literal: guarantees a decimal point so integers don't become invalid `int` tokens.
const f = (n: number) => (Number.isInteger(n) ? n.toFixed(1) : String(n))

const fragSrc = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uDpr;
uniform vec3 uStroke;
out vec4 outColor;

// gradient (not value) noise: value noise biases features to the lattice axes, which reads as
// boxy contours. This flows on the diagonals too. Returns ~[-1, 1].
vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float gnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 fp = fract(p);
  vec3 u = fp * fp * (3.0 - 2.0 * fp);
  return mix(
    mix(mix(dot(hash3(i + vec3(0, 0, 0)), fp - vec3(0, 0, 0)),
            dot(hash3(i + vec3(1, 0, 0)), fp - vec3(1, 0, 0)), u.x),
        mix(dot(hash3(i + vec3(0, 1, 0)), fp - vec3(0, 1, 0)),
            dot(hash3(i + vec3(1, 1, 0)), fp - vec3(1, 1, 0)), u.x), u.y),
    mix(mix(dot(hash3(i + vec3(0, 0, 1)), fp - vec3(0, 0, 1)),
            dot(hash3(i + vec3(1, 0, 1)), fp - vec3(1, 0, 1)), u.x),
        mix(dot(hash3(i + vec3(0, 1, 1)), fp - vec3(0, 1, 1)),
            dot(hash3(i + vec3(1, 1, 1)), fp - vec3(1, 1, 1)), u.x), u.y),
    u.z);
}

// fbm: stacked octaves of gradient noise. z (time) is offset per octave, not scaled (that
// flickers). Two fixed-octave variants so the loop bounds stay constant.
float fbmMain(vec3 p) {
  float amp = 1.0, sum = 0.0, norm = 0.0;
  for (int o = 0; o < ${mainOctaves}; o++) {
    sum += amp * gnoise(p);
    norm += amp;
    amp *= ${f(gain)};
    p.xy *= ${f(lacunarity)};
    p.z += 17.3;
  }
  return sum / norm;
}

float fbmWarp(vec3 p) {
  float amp = 1.0, sum = 0.0, norm = 0.0;
  for (int o = 0; o < ${warpOctaves}; o++) {
    sum += amp * gnoise(p);
    norm += amp;
    amp *= ${f(gain)};
    p.xy *= ${f(lacunarity)};
    p.z += 17.3;
  }
  return sum / norm;
}

// domain warping: sample the height field at a position pushed around by a second noise field.
// This is what turns concentric round rings into the ridged, branching shapes of a real map.
float terrain(vec2 xy, float z) {
  float wx = fbmWarp(vec3(xy, z));
  float wy = fbmWarp(vec3(xy + vec2(3.1, 6.7), z + 1.5));
  float h = fbmMain(vec3(xy + ${f(warpAmp)} * vec2(wx, wy), z));
  return h * 0.5 + 0.5;
}

void main() {
  vec2 px = gl_FragCoord.xy / uDpr; // work in css px so tuning matches the old canvas version
  vec2 pan = uTime * vec2(${f(panX)}, ${f(panY)});
  vec2 xy = (px + pan) * ${f(noiseFreq)};
  float z = uTime * ${f(timeScale)};

  float h = terrain(xy, z);

  // map height into "level space": every integer is a contour line
  float t = (h - ${f(levelMin)}) / (${f(levelMax)} - ${f(levelMin)}) * float(${levels - 1});
  float inRange = step(0.0, t) * step(t, float(${levels - 1}));

  float g = fwidth(t);                    // level-space change per pixel: constant-width AA
  float di = 0.5 - abs(fract(t) - 0.5);   // 0 on a contour, rising to 0.5 between them
  float n = floor(t + 0.5);               // nearest level index
  float isIndex = step(mod(n, ${f(indexEvery)}), 0.5); // 1.0 when n is a multiple of indexEvery

  float halfWidth = mix(${f(baseWidth)}, ${f(indexWidth)}, isIndex) * 0.5;
  float alpha = mix(${f(baseAlpha)}, ${f(indexAlpha)}, isIndex);
  float line = (1.0 - smoothstep(0.0, halfWidth * g + 1e-6, di)) * alpha * inRange;

  // elevation tint: a faint fill under the lines, rising with terrain height so higher ground reads
  // slightly denser, same monochrome stroke color as the lines.
  float fill = mix(${f(fillAlphaMin)}, ${f(fillAlphaMax)}, clamp(t / float(${levels - 1}), 0.0, 1.0)) * inRange;
  float shade = line + fill * (1.0 - line);

  outColor = vec4(uStroke, shade);
}`

type ContourRef = HTMLCanvasElement
type ContourProps = { className?: string }

const Contour: FC<ContourProps> = (props) => {
  const { className } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useFullscreenShader({
    canvasRef,
    fragSrc,
    fps,
    maxDpr,
    label: 'contour',
    uniforms: () => {
      // stroke reads the live --foreground token at boot so the field matches the theme
      const strokeHex =
        getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim() ||
        '#fafafa'
      return { uStroke: hexToRgb(strokeHex) }
    }
  })

  return (
    <>
      <canvas ref={canvasRef} className={cn(styles.root({ className }))} aria-hidden="true" />
      <div className={cn(styles.blur())} aria-hidden="true" />
    </>
  )
}

export { Contour }
export type { ContourProps, ContourRef }
