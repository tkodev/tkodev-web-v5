// Generic WebGL2 helpers, not tied to any one shader. Consumers pass a `label` for diagnostics.

/**
 * Compile a single shader stage, warning and returning `null` on failure.
 *
 * @param type - The shader stage, `gl.VERTEX_SHADER` or `gl.FRAGMENT_SHADER`.
 * @param src - The shader source.
 * @param label - A diagnostic name used in warnings.
 * @returns The compiled shader, or `null` if compilation failed.
 */
const compileShader = (
  gl: WebGL2RenderingContext,
  type: number,
  src: string,
  label = 'shader'
): WebGLShader | null => {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(`${label} compile failed:`, gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

/**
 * Compile and link a vertex/fragment shader pair into a program, warning and returning `null` on failure.
 *
 * @param vertSrc - The vertex shader source.
 * @param fragSrc - The fragment shader source.
 * @param label - A diagnostic name used in warnings.
 * @returns The linked program, or `null` if a stage failed to compile or the program failed to link.
 */
const createProgram = (
  gl: WebGL2RenderingContext,
  vertSrc: string,
  fragSrc: string,
  label = 'program'
): WebGLProgram | null => {
  const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc, `${label} vertex shader`)
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc, `${label} fragment shader`)
  if (!vert || !frag) return null

  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vert)
  gl.attachShader(program, frag)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(`${label} link failed:`, gl.getProgramInfoLog(program))
    return null
  }
  return program
}

export { compileShader, createProgram }
