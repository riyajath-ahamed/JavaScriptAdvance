// Example of using the map function in JavaScript

// Original array
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number doubled
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); 
// Output: [2, 4, 6, 8, 10]

// Using map to create a new array with each number squared
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); 
// Output: [1, 4, 9, 16, 25]