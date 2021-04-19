// Various string operations
// 1. Compare the two strings
let str1 = "Niraj";
let str2 = "Niraj";

if (str1 == str2) {
    console.log("Both strings are equal.");
}
else {
    console.log("Not equal.");
}

// accsessing character by character 
console.log(str1[1]);
console.log("All the characters one by one...");
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// new 
let str3 = new String("Niraj");

console.log(str3);


// Comparing two strings
// 2. localComapre()
// The localeCompare() method returns a number indicating whether a reference string comes 
// before, or after, or is the same as the given string in sort order.
// exact matching = 0
// str1 < str2 = -1
// str1 > str2 = 1
let str4 = "JavaScript";
let str5 = "Java";
console.log(str4.localeCompare(str5));


// Replace certain word with another
// replace()
// it will not replace the existing string, it will create a new copy of string for replace 
// operations
let str6 = "I Hate JavaScript";
let str7 = str6.replace("Hate", "Love");

console.log(str7);
console.log(str6); 


// Converting a string into an array using split function
// array is a object 
let str8 = "My favorite programming language is Java";
let str9 = str8.split(" "); // It won't change the old string, it will create a new copy of a string

console.log(str9);
console.log(str9[5]); // accessing the each data of an array

for (let i = 0; i < str9.length; i++) {
    console.log(str9[i]);
}

