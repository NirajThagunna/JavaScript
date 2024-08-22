// Challenge 1

// First test case
let marksWeight = 78;
let marksHeight = 1.69;

let johnsWeight = 92;
let johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

// let markHigherBMI = marksBMI > johnsBMI;

// console.log(marksBMI, johnsBMI);
// console.log(markHigherBMI);

// // Second test case
// marksWeight = 95;
// marksHeight = 1.88;

// johnsWeight = 85;
// johnsHeight = 1.76;

// marksBMI = marksWeight / marksHeight ** 2;
// johnsBMI = johnsWeight / johnsHeight ** 2;

// markHigherBMI = marksBMI > johnsBMI;
// console.log(marksBMI, johnsBMI);
// console.log(markHigherBMI);

// using if-else statement

if (marksBMI > johnsBMI) {
  console.log(`Marks BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

// Second test case
marksWeight = 95;
marksHeight = 1.88;

johnsWeight = 85;
johnsHeight = 1.76;

marksBMI = marksWeight / marksHeight ** 2;
johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

if (marksBMI > johnsBMI) {
  console.log(`Marks BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}
