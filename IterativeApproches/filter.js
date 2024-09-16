// Example array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

function oddNumber(value, index, array){
    console.group(value, index, array);
    return value % 2 !== 0;
}

// Filter out odd numbers
const oddNumbers = numbers.filter(oddNumber);



console.log(oddNumbers);

