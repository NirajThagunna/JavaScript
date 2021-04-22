// Date - object
// Used to get year, month and day.

// Various constructor to create an objet of Date object

// 1. Date()
let today = new Date();

console.log(today);

// 2. Date(argument)
// let date = new Date(2017, 12, 15);

// console.log(date);

// Date methods
let date = new Date();

let day = date.getDate(); // returns 1 to 31 and getDay() returns 0 to 6 acc. to day of week
let month = date.getMonth() + 1; // getMonth() return an integer from 0 to 11
let year = date.getFullYear();

console.log(`Today : ${day}/${month}/${year}`);

// current time
let h = today.getHours();
let m = today.getMinutes();
let s = today.getMinutes();

console.log(`Current time : ${h}:${m}:${s}`);

