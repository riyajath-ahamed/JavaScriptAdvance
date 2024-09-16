// Program to countdown till 1

// recursive function
function counter(count) {

    // display count
    console.log(count);

    // condition for stopping
    if(count > 1) {

        // decrease count
        count = count - 1;

        // call counter with new value of count
        counter(count);
    } else {

        // terminate execution
        return;
    };
};

function factorial(num) {

    // base case
    // recurse only if num is greater than 0
    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    };
};

// access function
counter(5);



let x = 3;
// store result of factorial() in variable
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);

function fibonacci(n) {

    // base case
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
    
}

console.log(fibonacci(6))

// output = 8

// 0 1 1 2 3 5 8 13


