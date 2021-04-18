// A JavaScript Variable is simply a name of storage location.
// A variable is a container for storing the data values.
/*
    Types:
        1. Global Variable 
            -> declared outside the function. accessible from any function.

            - Internals of global variable in JavaScript
                -> When you declare a variable outside the function, 
                it is added in the window object internally. 
                You can access it through window object also. 
                For example: let value = 50; window.value

        2. Local Variable
            -> declared inside block or function. It is accessible within the function or block only.

    There are some rules while declaring a JavaScript variable (also known as identifiers).
        1. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
        2. After first letter we can use digits (0 to 9), for example value1.
        3. JavaScript variables are case sensitive.
*/

// Create a variable
// let - block scope - strict - modern keyword to create a variable in JavaScript
// const - immutable - Once assigned the value you can't re-assign or change or modify the value
// var - global scope or function scope - a varaible which is declared with var keyword that 
// will be global i.e. don't block scope


console.log("Variables in JavaScript");

// Creating a variable using let keyword
let num; // declare the variable -- global variable
num = 20; // assigning or instantation
console.log(num);

num = 50;
console.log(num); // newly value is assigned in the variable i.e. old value is overloaded

num = "Niraj Thagunna";
console.log(num); // JavaScript is a Dyanamically typed language.

// Creating a varaible using const keyword
const name = "Niraj"; // constant variable
console.log(name);

// name = "Thagunna"; // tried to assign the value into a constant variable
// console.log(name);

// Creating a variable using var keyword
var courseName = "JavaScript";
console.log(courseName);


// difference between let and var
// let - block scope
// var - become the global even from inside the block as well
if (2 < 5) {
    // let x = 2;
    // console.log("Local Variable = " + x);

    var y = 3;
    console.log("Local Variable = " + y);
}

// console.log(x); // try to access the local variable from outside the block - gives an error
// ReferenceError: x is not defined

// try to access the local var from outside the block
console.log("Local Variable from the outside = " + y);

