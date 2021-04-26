// call()
// It calls the method by taking the owner object as argument.
// The call() method takes the argument separated by comma.

// function.call(thisArg, arg1,arg2,....,argn)  

// let person = {
//     details : function(country, city) {
//         return this.firstName + " " + this.lastName + ", " + country + ", " + city;
//     }
// }

// let person1 = {
//     firstName : "Niraj",
//     lastName : "Thagunna"
// }

// let personDetails = person.details.call(person1, "Nepal", "Darchula");

// console.log(personDetails);


// apply() Method: 
// The apply() method is used to write methods, which can be used on different objects. 
// It is different from the function call() because it takes arguments as an array.

// function.apply(thisArg, [array])  

let person = {
    details : function(country, city) {
        return this.firstName + " " + this.lastName + ", " + country + ", " + city;
    }
}

let person1 = {
    firstName : "Niraj",
    lastName : "Thagunna"
}

let personDetails = person.details.apply(person1, ["Nepal", "Darchula"]);

console.log(personDetails);


// bind()
// Used to create a new function. 
// function.bind(thisArg [, arg1[, arg2[, ...]]]  

let student = {
    sName : "Niraj Thagunna",
    getName: function() {
        return this.sName;
    }
}

// Creating a new function
let unboundGetName = student.getName;
let boundGetName = unboundGetName.bind(student);

console.log(boundGetName());
