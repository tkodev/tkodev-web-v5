/**
 * A random integer in the half-open range `[0, max)`.
 *
 * @param max - Exclusive upper bound.
 * @returns An integer from `0` up to but not including `max`.
 */
const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export { getRandomInt }
