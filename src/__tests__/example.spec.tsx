import { all, identity } from 'ramda'

test('should have a test', () => {
  expect(all<boolean>(identity)([true, true])).toBe(true)
})
