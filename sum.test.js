const stringlenght = require('./sum.js');

test('Length of ""', () => {
  expect(stringlenght('')).toBe(false);
});

test('Length of ""', () => {
  expect(stringlenght('abc')).toBe(true);
});