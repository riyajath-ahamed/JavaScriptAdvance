// Example of using reduce to sum an array of numbers
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log('Sum:', sum); // Output: Sum: 15

// Example of using reduce to flatten an array of arrays
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log('Flattened:', flattened); // Output: Flattened: [1, 2, 3, 4, 5, 6]

// Example of using reduce to count occurrences of values in an array
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 1;
    } else {
        accumulator[currentValue]++;
    }
    return accumulator;
}, {});

console.log('Fruit Count:', fruitCount); 
// Output: Fruit Count: { apple: 2, banana: 3, orange: 2 }



/*
The reduce() method in JavaScript is used to reduce an array to a single value.
It executes a provided function for each value of the array (from left-to-right) and returns a single value.
The reduce() method takes two arguments: a callback function and an initial value.
The callback function takes four arguments: accumulator, currentValue, currentIndex, and the array itself.
The accumulator is the value returned by the previous iteration.
The currentValue is the current value being processed.
The currentIndex is the index of the current value.
The array is the array being processed.
The initial value is an optional argument that specifies the initial value of the accumulator.
If no initial value is provided, the first element of the array is used as the initial value.
The reduce() method can be used to perform various operations on an array, such as summing the values, flattening
 nested arrays, counting occurrences of values, etc.

The reduce() method is a powerful tool for working with arrays in JavaScript and is commonly used in functional programming.
The reduce() method is supported in all modern browsers, including Internet Explorer 9 and above.
The reduce() method is a higher-order function, meaning it takes a function as an argument or returns a function as a result.
The reduce() method is a versatile and flexible tool that can be used in a wide variety of scenarios to process and manipulate arrays.


   -> The reduce() method works from left-to-right in the array. See also reduceRight().


*/

const num = [45, 4, 9, 16, 25];
let summ = num.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(summ);  // Output: 99