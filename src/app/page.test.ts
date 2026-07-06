import { expect, test } from 'vitest'
import HomePage from './page'

test('home page exports a component', () => {
  expect(typeof HomePage).toBe('function')
})
