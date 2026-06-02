// These are structures that allow me to make decisions in my code. They are also called "control flow statements" because they control the flow of the program.
// Conditionals are about "if this condition is true, then do this, otherwise do that". They are used to execute different blocks of code based on different conditions.
// The common conditiona statements are: if, else if, switch and ternary operator.

//const { use } = require("react");

/* 1. IF Statement
 if (condition){
 code to be executed when the condition is truthy.
}*/

const Age = 30;

if (Age >= 20) {
  console.log("You are an adult");
}

/* 2. IF/ElSE statement:
if (condition) {
code to be executed when the condition is truthy.
} else {
  condition to be executed
  }*/

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

/* 3.IF....ELSE IF statement:

if (condition 1) {
code to be executed if the  condition is truthy.
} else if(condition 2){
 code to be executed if the condition is truthy.
} else {
 code to be executed when the condition is truthy.
}*/

let score = 90;

if (score >= 95) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C and Below");
}

// It lets you chain mutiple conditions.
// The first true statement wins.

let weight = 60;

if (weight >= 90) {
  console.log("Obecity Level");
} else if (weight >= 55) {
  console.log("Normal weight Level");
} else {
  console.log("You are underweight");
}

// 4. SWITCH.
// It is usefull when checking one value against many possible values.
// The ELSE IF statement can become to hard to track and read. Thats why we use the switch.

let dish = "Pizaa";

switch (dish) {
  case "Pizza":
    console.log("You ordered Pizza");
    break;

  case "Burger":
    console.log("You ordered a Burger");
    break;

  case "chicken":
    console.log("You ordered a  Chicken");
    break;

  default:
    console.log("Sorry, that dish is not available");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("The beginning of the week");
    break;

  case "Wednesday":
    console.log("The middle of the week");
    break;

  case "Saturday":
    console.log("The end of the weel");
    break;

  default:
    console.log("It's just another day");
}

// Truthy and Falsy values in JavaScript:
// JS considers values as either truthy or falsy when they are being evaluated.
// Falsy values: false, 0,  ""(empty string), null, undefined, NaN
// Truthy values: true, any number apart from 0, any non-empty string, objects, arrays.

if ("hello") {
  console.log("This is a truthy value");
}

// 4. Ternary operator:
// It is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

let isRaining = true;
let weather = isRaining
  ? "it's raining, take an umbrella"
  : "it's not raining, enjoy your day";
console.log(weather);

let number = 20;
let result =
  number >= 15 ? "You passed you exam" : "You can do better next time";
console.log(result);

// The ternary operator is a concise way to write simple if-else statements.
// It is often used for assigning values based on conditions or for inline conditional rendering in frameworks like React.

// Logical operators in conditionals:
// Logical operators are used to combine multiple conditions in an if statement.
// The common logical operators are: AND (&&), OR (||) and NOT (!).

let age1 = 25;
let hasID = true;

if (age1 >= 18 && hasID) {
  console.log("You are allowed to enter the club");
} else {
  console.log("You are not allowed to enter the club");
}

// || is the OR operator. It returns true if at least one of the conditions is true.

let day1 = "Saturday";
let isHoliday = true;

if (day1 === "Saturday" || day1 === "Sunday" || isHoliday) {
  console.log("It's a day off");
} else {
  console.log("It's a working day");
}

// ! is the NOT operator. It negates the condition. If the condition is true, it returns false, and if the condition is false, it returns true.

// Nested conditionals:
// You can also nest conditionals inside each other to create more complex logic.
// One has to br careful when nesting since  the  can become hard to read and maintain.

let userIsLoggedIn = true;
let isAdmin = false;

if (userIsLoggedIn) {
  if (isAdmin) {
    console.log("Admin Dashboard");
  } else {
    console.log("User Dashboard");
  }
} else {
  console.log("Please log in to access the dashboard");
}

let isStudent = true;
let isEmployed = false;
let billAmount = 100;

if (isStudent && !isEmployed) {
  console.log(
    `You get a 20% discount. Your total bill is : ${billAmount * 0.8}`,
  );
} else if (isStudent && isEmployed) {
  console.log(
    `You get a 10% discout. Your total bill is : ${billAmount * 0.9}`,
  );
} else if (!isStudent && isEmployed) {
  console.log(
    `You get a 5% discount. Your total bill is : ${billAmount * 0.95}`,
  );
} else {
  console.log(`No discount for you`);
}
