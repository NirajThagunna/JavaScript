"use strict";

function logger() {
  console.log("My name is Niraj");
}

logger(); // calling | running | invoking function
logger();

// Function declaration
function friutProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = friutProcessor(5, 0);
console.log(appleJuice);

const num = Number("23");
console.log(num);

// Function Declaration
function calcAge(birthYear) {
  // birthYear is a parameter: a variable
  // const age = 2024 - birthYear;
  // return age;

  return 2024 - birthYear;
}

const age = calcAge(2000); // 2000 is an argument: a value
console.log(age);

// Function Expression - Anonymous Function
const calcAge1 = function (birthYear) {
  return 2024 - birthYear;
};

/*
An Expression that produces a value

function (birthYear) {
  return 2024 - birthYear;
};
*/

const age2 = calcAge1(1999);
console.log(age2);
