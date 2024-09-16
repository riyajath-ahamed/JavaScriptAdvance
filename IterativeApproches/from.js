// Create an array from an iterable object
const iterable = 'hello';
const arrayFromIterable = Array.from(iterable);
console.log(arrayFromIterable); // Output: ['h', 'e', 'l', 'l', 'o']

// Create an array from an array-like object
const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
const arrayFromArrayLike = Array.from(arrayLike);
console.log(arrayFromArrayLike); // Output: ['a', 'b', 'c']

// Create an array from a set
const set = new Set(['foo', 'bar', 'baz']);
const arrayFromSet = Array.from(set);
console.log(arrayFromSet); // Output: ['foo', 'bar', 'baz']

// Create an array from a map
const map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
const arrayFromMap = Array.from(map);
console.log(arrayFromMap); // Output: [[1, 'one'], [2, 'two'], [3, 'three']]

// Using Array.from with a mapping function
const arrayWithMapping = Array.from([1, 2, 3], x => x * 2);
console.log(arrayWithMapping); // Output: [2, 4, 6]