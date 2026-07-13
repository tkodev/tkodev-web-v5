/**
 * Parse a hex colour (`#rgb` or `#rrggbb`) into normalized 0-1 RGB, for WebGL/canvas consumers.
 *
 * @param hex - The hex colour string, with or without a leading `#`.
 * @returns The red, green, and blue channels, each normalized to 0-1.
 */
const hexToRgb = (hex: string): [number, number, number] => {
  const clean = hex.replace('#', '').trim()
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean
  const int = parseInt(full || 'fafafa', 16)
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255]
}

export { hexToRgb }
