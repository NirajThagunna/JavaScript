// JavaScript array is an object that represents a collection of similar type of elements.
// In JavaScript 
// Array is not fixed type
// array having dynamic size

// Ways to creating an array
// 1. By array literal
let nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}


// By creating an instance of an Array directly
// new keyword is used to create instance of array.
let array = new Array();
array[0] = "Niraj";
array[1] = "Engineer";

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// By using an array constructor
let array1 = new Array("Niraj", 080, "Engineer");

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}


// Array operations
// 1. concat()
let array2 = ["Niraj", "Thaguanna"];
let array3 = ["Engineer", "Guitarist"];

let array4 = array2.concat(array3);
console.log(array4);
console.log(array4.length);

//  2. includes - It will return true or false
console.log(array4.includes("Niraj"));

// 3. indexOf()
console.log(array4.indexOf("Engineer"));

// 4. join()
console.log(array4.join("-"));

// 5. reverse()
console.log(array4.reverse());

// 6. slice
let array5 = array4.slice();
console.log(array5);

// 7. sort()
let array6 = [100, 2, 5, 10];
let array7 = array6.sort();
console.log(array7);

let array8 = array4.toLocaleString();
console.log(array8);

console.log(array4.toString(" "));
