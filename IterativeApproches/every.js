// Example array
const numbers = [1, 2, 3, 4, 5];

// Check if all elements in the array are greater than 0
const allPositive = numbers.every(num => num > 0);

console.log(allPositive); // Output: true

// Check if all elements in the array are even
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // Output: false