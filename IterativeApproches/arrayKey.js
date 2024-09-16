const array = ['a', 'b', 'c', 'd'];

// Using for...in loop
console.log('Using for...in loop:');
for (let key in array) {
    console.log(key); // Logs the index of each element
}

// Using Object.keys() method
console.log('Using Object.keys() method:');
Object.keys(array).forEach(key => {
    console.log(key); // Logs the index of each element
});

// Using forEach method with index
console.log('Using forEach method with index:');
array.forEach((value, index) => {
    console.log(index); // Logs the index of each element
});

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text = "";

for (let x of keys) {
  text += x + "<br>";
}

console.log(text); // Output: 0 1 2 3
