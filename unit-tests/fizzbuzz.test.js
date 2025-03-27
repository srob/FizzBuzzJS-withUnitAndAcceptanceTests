const fizzBuzz = require('../src/fizzbuzz');

test('returns "Fizz" for multiples of 3', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test('returns "Buzz" for multiples of 5', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

test('returns "FizzBuzz" for multiples of 15', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test('returns the number for non-multiples of 3 or 5', () => {
  expect(fizzBuzz(7)).toBe("7");
});
