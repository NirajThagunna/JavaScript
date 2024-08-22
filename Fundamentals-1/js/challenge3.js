// Test Case 1

// Average Score of Dolphins and Koalas
let dolphinsAvgScore = (96 + 108 + 89) / 3;
let koalasAvgScore = (88 + 91 + 110) / 3;

console.log(
  `dolphinsAvgScore: ${dolphinsAvgScore} and koalasAvgScore: ${koalasAvgScore}`
);

if (dolphinsAvgScore > koalasAvgScore) {
  console.log(`Dolphins win!`);
} else if (koalasAvgScore > dolphinsAvgScore) {
  console.log(`Koalas win!`);
} else if (dolphinsAvgScore === koalasAvgScore) {
  console.log("Game Draws!");
}

// Test Case 2 - Bonas 1

// Average Score of Dolphins and Koalas
dolphinsAvgScore = (97 + 112 + 101) / 3;
koalasAvgScore = (109 + 95 + 123) / 3;

console.log(
  `dolphinsAvgScore: ${dolphinsAvgScore} and koalasAvgScore: ${koalasAvgScore}`
);

if (dolphinsAvgScore >= 100 && dolphinsAvgScore > koalasAvgScore) {
  console.log(`Dolphins win!`);
} else if (koalasAvgScore >= 100 && koalasAvgScore > dolphinsAvgScore) {
  console.log(`Koalas win!`);
} else if (dolphinsAvgScore === koalasAvgScore) {
  console.log("Game Draws!");
}

// Test Case 3 - Bonas 2

// Average Score of Dolphins and Koalas
dolphinsAvgScore = (97 + 112 + 101) / 3;
koalasAvgScore = (109 + 95 + 106) / 3;

console.log(
  `dolphinsAvgScore: ${dolphinsAvgScore} and koalasAvgScore: ${koalasAvgScore}`
);

if (dolphinsAvgScore >= 100 && dolphinsAvgScore > koalasAvgScore) {
  console.log(`Dolphins win!`);
} else if (koalasAvgScore >= 100 && koalasAvgScore > dolphinsAvgScore) {
  console.log(`Koalas win!`);
} else if (
  dolphinsAvgScore === koalasAvgScore &&
  dolphinsAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log("Game Draws!");
} else {
  console.log("Both teams are not qualified");
}
