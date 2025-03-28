Feature: FizzBuzz Output

  Scenario Outline: FizzBuzz returns correct output
    Given I have the number <input>
    When I run fizzbuzz
    Then I should get "<output>"

    Examples:
      | input | output    |
      | 3     | Fizz      |
      | 5     | Buzz      |
      | 15    | FizzBuzz  |
      | 7     | 6         |
      | 150   | FizzBuzz  |
