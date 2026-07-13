'use client'

import { useEffect, type RefObject } from 'react'
import { createProgram } from '@/utils/webgl'

/** A uniform value: a float (`uniform1f`) or a 2-to-4 element vector (`uniform2fv`-`uniform4fv`). */
type UniformValue = number | number[]

/** Configuration for {@link useFullscreenShader}. */
type FullscreenShaderConfig = {
  /** Ref to the target canvas; the hook no-ops until it resolves. */
  canvasRef: RefObject<HTMLCanvasElement | null>
  /** GLSL ES 3.00 fragment source. May declare `uTime` (seconds) and `uDpr`, which the hook feeds. */
  fragSrc: string
  /** Draw-rate cap in fps; time still advances every frame, only drawing is throttled. */
  fps: number
  /** Upper bound on `devicePixelRatio`: fragment fill cost scales with pixel count. */
  maxDpr: number
  /** Label surfaced in shader compile and link errors. */
  label?: string
  /** Static uniforms, computed once at boot so the closure may read live CSS variables. */
  uniforms?: () => Record<string, UniformValue>
}

/**
 * Drives a fullscreen fragment shader on a canvas: canvas sizing and DPR, a frame-capped
 * `requestAnimationFrame` loop that pauses while the tab is hidden or blurred (time frozen so it
 * never jumps on resume), `uTime`/`uDpr` wiring, a single static frame under
 * `prefers-reduced-motion`, and WebGL context-loss recovery. The caller owns only the fragment
 * source, the tuning, and any static uniforms; the attribute-less fullscreen-triangle vertex stage
 * is provided.
 *
 * @param config - The fragment source, canvas ref, frame/DPR caps, and static uniforms.
 */
const useFullscreenShader = (config: FullscreenShaderConfig) => {
  // Every fullscreen shader draws the same attribute-less triangle; only the fragment stage differs.
  const vertSrc = `#version 300 es
    void main() {
      // fullscreen triangle from gl_VertexID: no attribute buffers needed
      vec2 v = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
      gl_Position = vec4(v * 2.0 - 1.0, 0.0, 1.0);
    }`

  useEffect(() => {
    const canvas = config.canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl2', { antialias: false, alpha: true })
    if (!gl) return // no WebGL2: leave the canvas transparent, the page background shows

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let program: WebGLProgram | null = null
    let uTime: WebGLUniformLocation | null = null
    let uDpr: WebGLUniformLocation | null = null
    let rafId = 0
    let lastDraw = 0 // timestamp of the last drawn frame (fps throttle)
    let lastTick = performance.now() // timestamp of the last active tick, for the time delta
    let elapsed = 0 // accumulated *active* seconds; frozen while paused so time never jumps
    let dpr = 1
    const interval = 1000 / config.fps

    const active = () => !document.hidden && document.hasFocus()

    const setUniform = (name: string, value: UniformValue) => {
      if (!program) return
      const loc = gl.getUniformLocation(program, name)
      if (!loc) return
      if (Array.isArray(value)) {
        if (value.length === 2) gl.uniform2fv(loc, value)
        else if (value.length === 3) gl.uniform3fv(loc, value)
        else if (value.length === 4) gl.uniform4fv(loc, value)
      } else {
        gl.uniform1f(loc, value)
      }
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, config.maxDpr)
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
      program = createProgram(gl, vertSrc, config.fragSrc, config.label)
      if (!program) return false
      gl.useProgram(program)

      uTime = gl.getUniformLocation(program, 'uTime')
      uDpr = gl.getUniformLocation(program, 'uDpr')
      const statics = config.uniforms?.() ?? {}
      Object.entries(statics).forEach(([name, value]) => setUniform(name, value))

      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      gl.clearColor(0, 0, 0, 0)

      resize()
      render()
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
      render()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- boot once; all config values are stable
  }, [])
}

export { useFullscreenShader }
export type { FullscreenShaderConfig }
