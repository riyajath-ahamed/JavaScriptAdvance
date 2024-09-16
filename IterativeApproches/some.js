const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(someOver18); // Output: true

let someOver100 = numbers.some(myFunction2);

function myFunction2(value, index, array) {
    return value > 100;
    }

console.log(someOver100); // Output: false