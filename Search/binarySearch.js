/*

This type of searching algorithm is used to find the position of 
a specific value contained in a  " sorted array ". 
The binary search algorithm works on the principle of 
divide and conquer and it is considered the best searching 
algorithm because it's faster to run.


*/




function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(array, target);

console.log(result); // Output: 4