// The String object is used to represent and manipulate a sequence of characters.
// String = collection of characters or sequence of characters.

// Ways to create the String
// 1 - String Literal
let user = "Niraj";

console.log(user);
console.log(typeof user);

// 2 - Using the String() constructor
let userName = new String("nirajthagunna");

console.log(userName);
console.log(typeof userName);


// String literal methods
let name1 = "Niraj"; // double quotes
let name2 = 'Niraj Er.'; // single quotes
let name3 = `Niraj T`; // back tick 

console.log(name1);
console.log(name2);
console.log(name3);


let a = 10;
let b = 20;
let sum = a + b;

console.log("The sum of " + a + " and " + b + " is " + sum);

// String Interpolation
console.log(`The sum of ${a} and ${b} is ${sum + 50}`); // back tick - efficient way to
// Create a String


