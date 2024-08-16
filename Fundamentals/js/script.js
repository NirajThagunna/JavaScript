// Printing JavaScript values in browser console log
console.log("Niraj");
console.log(23);

// Single line comment

/*
Multi
line
comment
*/

////////////////////////////////////
// Variables in JavaScript
////////////////////////////////////

// Declaring JavaScript variables
let firstName = "Niraj Thagunna";
console.log(firstName);

// assigning a string value to a variable
firstName = "Elon";
console.log(firstName);

// Naming convention for varibale name by using camelCase notation
let $rupee = 100;
console.log($rupee);

let _num = 100;
console.log(_num);

let first_name = "Niraj";
console.log(first_name);

// varibales that contains all upper case that indicates Constant that will never changed
let PI = 3.14;
console.log(PI);

//////////////////////////////////
// Data Types in JavaScript
//////////////////////////////////

// Boolean
true;
console.log(true);

let isEmpty = true;
console.log(isEmpty);

// typeof opeartor
console.log(typeof isEmpty);
console.log(typeof 23);
console.log(typeof "Niraj Thagunna");

// reassigning a value of any type to a variable -> Dynamic Typing
isEmpty = "YES!";
console.log(typeof isEmpty);
console.log(isEmpty);

// undefined data type - when we declare an empty variable without assigning any value
let year; // automatically store undefined value
console.log(year);
console.log(typeof year);

// reassigning a new value
year = 2024;
console.log(year);
console.log(typeof year);

// null data type
console.log(typeof null);

//////////////////////////////////
// let, const and var keyword
//////////////////////////////////

// let keyword - Mutable - we can reassign a value - value can be changed
let age = 24;
console.log(age);
age = 25;
console.log(age);

// const keyword - Immutable - we can not reassign a value - value can not be changed i.e. constant
const birthYear = 2000;
console.log(birthYear);
/*
birthYear = 1999;
console.log(birthYear);
*/

// var keyword - old way to define a variable instead of let keyword
var _name = "Niraj";
console.log(_name);
_name = "Niraj Thagunna";
console.log(_name);

//////////////////////////////////
lastName = "Thagunna";
console.log(lastName);

//////////////////////////////////
// Operators in JavaScript
//////////////////////////////////

const now = 2024;
const ageNiraj = now - 2000;
const ageArjit = now - 2010;
console.log(ageNiraj, ageArjit);

console.log(ageNiraj * 2, ageArjit / 2, 2 ** 3);

const first_name1 = "Niraj";
const lastName1 = "Thagunna";
console.log(first_name1 + " " + lastName1);

// Assignment operators
let x = 10 + 15; // 25
x += 10; // 35 x = x + 10
x *= 4; // 140 x = x * 4
x++; // 141 x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageNiraj > ageArjit);
console.log(ageNiraj >= 24); // greater than or equal to

const isFullAge = ageNiraj >= 18;
console.log(isFullAge);
console.log(typeof isFullAge);

/*
Operator Precedence
*/
let a, b;
a = b = 10 - 5 - 2;
console.log(a, b);

/*
String in JavaScript
*/

const firstName2 = "Niraj";
const job = "Computer Engineer";
const birthYear1 = 2000;
const year1 = 2024;

const niraj =
  "I'm " +
  firstName2 +
  ", a " +
  (year - birthYear1) +
  " years old " +
  job +
  "!";
console.log(niraj);

// Template literals
const nirajNew = `I'm ${firstName2}, a ${year1 - birthYear1} years old ${job}!`;
console.log(nirajNew);

console.log(`Just a regular string...`);

// mutiline string
console.log(
  "String with \n\
    multiple \n\
    lines"
);

console.log(`String with
multiple
line`);
