// Taking Decision - if else statement - control flow
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Niraj can start driving.");
} else {
  const yearsLeft = 18 - age;
  console.log(`Niraj is too young. wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let centrury; // block-level access
if (birthYear <= 2000) {
  centrury = 20;
} else {
  centrury = 21;
}

console.log(centrury); // block-level access

/////////////////////////////////////
// Type Conversion (string, number and boolean) and Coercion
/////////////////////////////////////

// Type Conversion
const inputYear = "1991"; // String type
console.log(Number(inputYear)); // Type Conversion
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Niraj")); // NaN is Not a Number or actually, it is an invalid number
console.log(typeof NaN); // Invalid number

console.log(String(24));
console.log(typeof String(24));

// Type Coercion - number into string only when, we use + operator and string into number when we use other operator than + operator
// Whenever there is a concatination between string and number, js will automatically convert the number into string
console.log("I am " + 23 + " years old");
console.log(`I'm ${20 + 4} years old.`);

console.log("23" - "10" - 5); // js automatically converts the string into number
console.log("23" * "2");
console.log("10" / "2");

let n = "1" + "1"; // '11' - string
n = n - 1; // 10
console.log(n);

/////////////////////////////////////
// 5 falsy values: 0, "", undefined, null, NaN -> get false when converted into boolean
/////////////////////////////////////

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Niraj")); // truthy value
console.log(Boolean({})); // truthy value - an empty object - {}
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));

let money = 0; // 0 is flasy value and other than 0 are truthy values

if (money) {
  // js do type coercion then 0 into boolean will be false
  console.log(`I'll pay it.`);
} else {
  console.log(`You can pay.`);
}

let height;

if (height) {
  console.log(`Yah! Height is defined`);
} else {
  console.log(`Ohh! No, height is undefined`);
}

console.log(height);
