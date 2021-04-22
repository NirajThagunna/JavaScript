// JavaScript is an object-based programming language.
// A JavaScript object is just a collection of key value pairs.

// A JavaScript object is an entity having state and behavior (properties and method).
// for e.g. car, pen, keyword etc.

// JavaScript is an object-based language. Everything is an object in JavaScript.
// JavaScript is template based not class based.
// Here, we don't create a class to get the object. But, we direct create objects.

// Ways to create an object in JavaScript

// 1. By Object Literal
let obj = {
    firstName : "Niraj",
    address : "Nepal",
    "last name" : "Thagunna",
    email : "nt@gmail.com",
    display : function() {
        this.firstName; // this represents the current object
    }
}

console.log(obj);
console.log(typeof obj);

console.log(obj.firstName);
console.log(obj.display);
console.log(obj["last name"]);

// for in loop - It is used with objects only i.e. key-value pairs
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

// for of loop - It is used with literal values like arrays, strings etc...
let nums = [2, 5, 10, 15, 20];

for (let item of nums) {
    console.log(item);
}


// 2. By creating an instance of Object
let emp = new Object();

emp.name = "Niraj Thagunna";
emp.id = 080;
emp.salary = 10000;

console.log(emp.name + " " + emp.id + " " + emp.salary);
console.log(emp);


// By using an Object constructor
// this refers to the current object - this.name (i.e. instance of object) = name (i.e. function or local variable)
// this -> current object and this.name -> creating an instance of current object
// this keyword is used to differentiate between the local and instance variable i.e. variable of an object
function emp1(name, id, salary) {
    this.name = name; 
    this.id = id;
    this.salary = salary;
}

let obj1 = new emp1("Niraj", 12345, 50000);

console.log(obj1);
console.log(typeof obj1);


// Defining methods in JavaScript Objects
// We can define method in JavaScript object. 
// But before defining method, we need to add property in the function with same name as method.
function student(name, rollNo, salary) {
    this.name = name;
    this.rollNo = rollNo;
    this.salary = salary;

    this.changeSalary = changeSalary;
    function changeSalary(otherSalary) {
        this.salary = otherSalary;
    }
}


let obj2 = new student("Niraj Thagunna", 080, 10000);
console.log(obj2);
console.log(obj2.name + " " + obj2.rollNo + " " + obj2.salary);
obj2.changeSalary(5000000);
console.log(obj2.name + " " + obj2.rollNo + " " + obj2.salary);

