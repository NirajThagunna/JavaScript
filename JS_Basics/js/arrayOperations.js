// Array Operations 
let nums = [2, 5, 10, 20];

nums.forEach( function(value, index){
    console.log(index + " => " + value);
});

console.log(nums.length);

let students = ["Niraj", 6317080, "KUK"];

console.log(students);

students.push("Engineer");
console.log(students);

students.pop();
console.log(students);

// Remove from beginning
let data = students.shift();
console.log(data);
console.log(students);


// Adding the element at beginning
// unshift() - It will return the new length of the array
let add = students.unshift("Engineer");
console.log(add);
console.log(students);

// indexOf()
let data1 = students.indexOf("KUK");
console.log(data1);


// copy
// slice
let student1 = students.slice();
console.log(student1);
console.log(student1[1]);


