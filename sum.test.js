const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds undefined + A to equal A', () => {
  expect(sum(undefined, 2)).toBe(2);
  expect(sum(3, undefined)).toBe(3);
  expect(sum(null, 4)).toBe(4);
  expect(sum(5, null)).toBe(5);
});

test('adds undefined + null to equal ZERO', () => {
  expect(sum(null, null)).toBe(0);
  expect(sum(undefined, undefined)).toBe(0);
});