const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const fizzBuzz = require('../../src/fizzbuzz');

let input, result;

Given('I have the number {int}', function (number) {
  input = number;
});

When('I run fizzbuzz', function () {
  result = fizzBuzz(input);
});

Then('I should get {string}', function (expected) {
  assert.strictEqual(result, expected);
});
