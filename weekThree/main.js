/*
    Higher Order Functions & Callback Functions
    Higher Order Function: a function that takes as an argument or returns a function
    Callback Function: a function that is passed as an argument to another function
*/

// BASE FUNCTIONS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculator(a, b, operator) {
    return operator(a, b)
}

console.log(calculator(10, 5, add));
console.log(calculator(10, 5, subtract));

// .map() Higher Order Arrow Function Example
// .map() is a higher order function that takes a function as an argument