// Switch Statement

const day = "thursday";

switch (day) {
  case "monday": // day ==== "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code challenges");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code challenges");
} else {
  console.log("Enjoy the weekend");
}

// Conditional or ternary operator is an expression - condition ? expression-if-true : expression-if-false;

const age = 18;

age >= 18
  ? console.log("Niraj can start ride a bike.")
  : console.log("Niraj is not allowed to ride a bike.");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);
console.log(typeof drink);
