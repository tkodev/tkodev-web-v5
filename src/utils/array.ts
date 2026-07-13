/**
 * A new array holding the same items in random order (Fisher-Yates); the input is untouched.
 *
 * @param items - The items to shuffle.
 * @returns A shuffled copy.
 */
const shuffle = <T>(items: T[]): T[] => {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }
  return result
}

export { shuffle }
