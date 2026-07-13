'use client'

import { useEffect, useRef, type FC } from 'react'
import { hexToRgb } from '@/utils/color'
import { cn, cva } from '@/utils/theme'
import { createProgram } from '@/utils/webgl'

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
const fps = 15 // render cap; GPU-side now, so a smooth rate is cheap
const timeScale = 0.02 // how fast the terrain evolves (per second)
const noiseFreq = 0.005 // spatial scale: higher = zoomed further out = far more lines on screen
const baseWidth = 2 // contour line width in px
const indexWidth = 2
const levels = 28 // number of contour thresholds (high = lots of tightly packed bands)
const levelMin = 0.3 // lowest / highest terrain value a contour tracks
const levelMax = 0.7
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

const vertSrc = `#version 300 es
void main() {
  // fullscreen triangle from gl_VertexID: no attribute buffers needed
  vec2 v = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(v * 2.0 - 1.0, 0.0, 1.0);
}`

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

  outColor = vec4(uStroke, line);
}`

type ContourRef = HTMLCanvasElement
type ContourProps = { className?: string }

const Contour: FC<ContourProps> = (props) => {
  const { className } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl2', { antialias: false, alpha: true })
    if (!gl) return // no WebGL2: leave the canvas transparent, the black page background shows

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const strokeHex =
      getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim() ||
      '#fafafa'
    const stroke = hexToRgb(strokeHex)

    let program: WebGLProgram | null = null
    let uTime: WebGLUniformLocation | null = null
    let uDpr: WebGLUniformLocation | null = null
    let rafId = 0
    let lastDraw = 0 // timestamp of the last drawn frame (fps throttle)
    let lastTick = performance.now() // timestamp of the last active tick, for the time delta
    let elapsed = 0 // accumulated *active* seconds; frozen while paused so time never jumps
    let dpr = 1
    const interval = 1000 / fps

    const active = () => !document.hidden && document.hasFocus()

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, maxDpr)
      const w = Math.round(window.innerWidth * dpr)
      const h = Math.round(window.innerHeight * dpr)
      canvas.width = w
      canvas.height = h
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      gl.viewport(0, 0, w, h)
      if (uDpr) gl.uniform1f(uDpr, dpr)
    }

    const render = () => {
      if (uTime) gl.uniform1f(uTime, elapsed)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const boot = () => {
      program = createProgram(gl, vertSrc, fragSrc, 'contour')
      if (!program) return false
      gl.useProgram(program)

      uTime = gl.getUniformLocation(program, 'uTime')
      uDpr = gl.getUniformLocation(program, 'uDpr')
      gl.uniform3fv(gl.getUniformLocation(program, 'uStroke'), stroke)

      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      gl.clearColor(0, 0, 0, 0)

      resize()
      return true
    }

    const loop = (now: number) => {
      rafId = requestAnimationFrame(loop)
      if (!active()) {
        lastTick = now // hold time steady while paused; resume without a jump
        return
      }
      elapsed += (now - lastTick) / 1000
      lastTick = now
      if (now - lastDraw < interval) return
      lastDraw = now
      render()
    }

    const onResize = () => {
      resize()
      if (reduced) render()
    }

    const onLost = (e: Event) => {
      e.preventDefault()
      cancelAnimationFrame(rafId)
    }
    const onRestored = () => {
      if (boot() && !reduced) {
        lastTick = performance.now()
        rafId = requestAnimationFrame(loop)
      }
    }

    canvas.addEventListener('webglcontextlost', onLost)
    canvas.addEventListener('webglcontextrestored', onRestored)
    window.addEventListener('resize', onResize, { passive: true })

    if (boot()) {
      if (reduced) {
        render()
      } else {
        lastTick = performance.now()
        rafId = requestAnimationFrame(loop)
      }
    }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('webglcontextlost', onLost)
      canvas.removeEventListener('webglcontextrestored', onRestored)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className={cn(styles.root({ className }))} aria-hidden="true" />
      <div className={cn(styles.blur())} aria-hidden="true" />
    </>
  )
}

export { Contour }
export type { ContourProps, ContourRef }
