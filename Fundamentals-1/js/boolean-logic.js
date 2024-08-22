/*
Basic Boolean Logic: AND - &&, OR - || & NOT - ! Operators
*/
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Niraj is able to drive.");
// } else {
//   console.log("Niraj is not able to drive.");
// }

const isTired = true; // C

console.log(hasDriversLicense && !hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log("Niraj is able to drive.");
} else {
  console.log("Niraj is not able to drive.");
}
