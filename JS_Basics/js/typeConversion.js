// Type Conversion 
// 1. Automatic - implicit conversion
// 2. Manual - explicit conversion

// String Conversion
let value = 500;

// Using String()  Constructor
let value1 = String(value); // It will create a new copy

console.log(value);
console.log(typeof value); // number
console.log(value1);
console.log(typeof value1); // String

// using toString() method
let value2 = value.toString();

console.log(value2);
console.log(typeof value2);


// Number Conversion
let str = "1000";

let num = Number(str);

console.log(num);
console.log(str);

let intNum = parseInt(str);
console.log(intNum);

console.log(parseFloat("12345.00998988"));

/*
undefined -> NaN
null -> 0
true -> 1
false -> 0
*/

console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));

// Boolean conversion

let choice = 0;

let choice1 = Boolean(choice);

console.log(choice1);


