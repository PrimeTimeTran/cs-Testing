function sum(a, b) {
  return a + b
}

test('expect sum to equal 3 if given 1 & 2', () => {
  expect(sum(1, 2)).toBe(3)
})


function multiplys(a, b) {
  return a * b
}

test('it multiplies to 6 if given 2 & 3', () => {
  expect(multiplys(2, 3)).toBe(6)
})
