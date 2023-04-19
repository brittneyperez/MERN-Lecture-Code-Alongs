/*
    * Higher Order Functions & Callback Functions
    ? Higher Order Function: a function that takes as an argument or returns a function
    ? Callback Function: a function that is passed as an argument to another function
*/

// * BASE FUNCTIONS
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
    // ex return add(2, 3)
    return operator(a, b)
}

function calculatorDouble(a, b, operator1, operator2) {
    let x = operator1(a, b);
    let y = operator2(a, b);
    console.log(x, y);
        return null;
}

// console.log(calculator(10, 5, add));
// console.log(calculator(10, 5, subtract));

// * this is calling back multiple callback functions
// console.log(calculatorDouble(10, 5, add, multiply));
// console.log(calculatorDouble(10, 5, subtract, divide));

// * .map() Higher Order Arrow Function Example
// ? .map() is a higher order function that takes a function as an argument
// ? .map() is used to iterate over an array and return a new array

const numbers = [1, 2, 3, 4, 5];
// ? from the array, numbers > create var number > from the array, multiply each number in the index by 2
const doubledNumbers = numbers.map( number => number * 2 ); // creates a for loop to double each number per index

console.log("USING .map()")
console.log("The original array:", numbers);
console.log("The new array:", doubledNumbers);

console.log("=======")
console.log("USING .filter()")
// * .filter() Higher Order Arrow Functions Example
// ? .filter() is a higher order function that takes a function as an argument

const numbersEx2 = [1, 2, 3, 4, 5];
// ? % will take the remainder of number and check if its even, if 0 ? even : odd
const evenNumbers = numbers.filter( number => number % 2 === 0 ); 
const oddNumbers = numbers.filter( number => number % 2 !== 0 ); 
// this func will go through each value and return where the condition we give is true

console.log("The original array:", numbersEx2);
console.log("The new array:", evenNumbers);
console.log("The new array:", oddNumbers);

/* array.prototype.map() definition — this is what's executed everytime we use .map()
    Array.prototype.map = function(callback) {
        const newArray = [];
        for (let i=0; i<this.length; i++) {
            newArray.push(callback(this[i], i, this));
        }
        return newArray;
    };
*/

// * .map() & .filter() Higher Order Arrow Function Example
// ? .map() & .filter() are higher order functions that take a function as an argument

const numbersEx3 = [1, 2, 3, 4, 5];

const doubledEvenNumbers = numbers
    .filter( number => number % 2 === 0) // >>> [ 2, 4 ]
    .map( number => number * 2) // >>> [ 4, 8 ]
    .filter( number => number > 4); // >>> [ 8 ]

console.log("=======")
console.log("USING .map() & .filter() TOGETHER")
console.log("The original array:", numbersEx3);
console.log("Another new array:", doubledEvenNumbers)