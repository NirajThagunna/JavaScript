// Various String functions in JavaScript - String = Object
// 1. length

let str = "I Love JavaScript";

console.log(str);
console.log(str.length);

// 2. concat()
let str1 = "and Java";
console.log(str.concat(" ", str1));

// 3. charAt(index)
console.log(str.charAt(2));


// 4. indexOf(string or character)
console.log(str.indexOf("Java"));

// 5. toUpperCase
console.log(str.toUpperCase());

// 6. toLowerCase
console.log(str.toLowerCase());

// 7. subString(start index, end index) - from start to end - 1 it will not include the end index
console.log(str.substring(2, 6));

// 8. startsWith
console.log(str.startsWith("I Love"));

// 9. endsWith
console.log(str.endsWith("Script"));


// 10. split
let str2 = str.split(" "); // split the string from the white space
console.log(str2);
console.log(str2[1]);

// 11 . trim - remove the white space from a string
let str3 = "           Hey     Uff   ";
console.log(str3);
console.log(str3.trim());