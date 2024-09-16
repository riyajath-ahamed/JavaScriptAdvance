 /*

Linear search is a simple search algorithm that checks each element 
in the list sequentially until a match is found. It is also known as a sequential search.

 */




function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}

// Example usage:
const array = [70, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(array, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log('Element not found');
}