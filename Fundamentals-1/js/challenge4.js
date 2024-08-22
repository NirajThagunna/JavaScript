// Test case 1
let billValue = 275;

let tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
    billValue + tipValue
  }`
);

// Test case 2
billValue = 40;

tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
    billValue + tipValue
  }`
);

// Test case 1
billValue = 430;

tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `The bill was ${billValue}, the tip was ${tipValue}, and the total value ${
    billValue + tipValue
  }`
);
