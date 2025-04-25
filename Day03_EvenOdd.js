// Day 3: Easy Question (New One)
// Question: Check Even or Odd
// Write a function isEven(num) that returns "Even" if the number is even, and "Odd" if the number is odd.

function isEven(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  console.log(isEven(4)); // Output: "Even"
  console.log(isEven(7)); // Output: "Odd"