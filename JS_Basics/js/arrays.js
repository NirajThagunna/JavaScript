// Array is an object in JavaScript, have various functions.
// 1. Type is not fixed -> You can insert multiple type of data values.
// 2. Size is also not fixed -> Size of an array will be changed at runtime.

// Ways to ceate an array
// array literal
let nums = [2, 5, 8, 10, 12];

console.log(nums);

// accessing an elements from an array
console.log(nums[1]);

console.log("Elements of an arary...");

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// Array type is not fixed
// size is also not fixed
let array = ["Niraj Thagunna", 9810773232, "Engineer"];

console.log(array);
console.log(array.length);

// psuh
array.push("Nepal");
array.push(80);

console.log(array);
console.log(array.length);

array.pop();

console.log(array);
console.log(array.length);

// Using Array Constructor
let students = new Array("Niraj", "Shalu", "Aman", "Ankit");

console.log(students);

