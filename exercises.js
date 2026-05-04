// 1. Create two number variables and calculate their sum, diff, product and quotient.
let num = 5;
let num2 = 2;

let sum = num + num2;
let difference = num - num2;
let product = num * num2;
let quotient = num / num2;

// Printing the result using template literals and concatenation
console.log("The sum is: " + sum);
console.log("The difference is: " + difference);
console.log(`The product is: ${product}`);
console.log(`The quotient is: ${quotient}`);

//2. Find the remainder when 17 is divided by 5.
let x = 17; // Initialization
let y = 5;

let Modulus = x % y;

console.log(`The remaider is: ${Modulus}`);

//3.  Create a variable x with the a  value of 10. Add 5 to it using a shorthand operator,  then miltiply the result by using another short hand operator.
let b = 10;
b += 5;
b *= 2;

console.log(`This is the result of the short hand operator: ${b}`);

//4. Perform the following:
// A string "5" plus 2
// A string "5" minus 2
let string = "5";
let num3 = 2;

let sum2 = string + num3;
let Subtraction = string - num3;

console.log(`This is the sum of a string and a number: ${sum2}`);
console.log(
  "This is the result of subtraction btw a string and number: " + Subtraction,
);

//5. Convert a string "100" into a number and display.  Then convert a number 50 to a string and display.
let string2 = "100";
let num4 = 50;

let strToNumber = Number(string2);
let numToString = String(num4);

console.log("Converted string to number: " + strToNumber);
console.log(`Converted number to string: ${numToString}`);

//6. Compare the values 5 and "5" using both loose equality and strict equality.
const Loose = 5 == "5";
const Strict = 5 === "5";

console.log(`This is checking for strict comparison: ${Strict}`);
console.log("This is checking for loose comparison:" + Loose);

//7. Create variables for principle , rate and time. Calculate the simple interest.
let principle = 10000;
let rate = 5;
let time = 2;

let SI = (principle * time * rate) / 100;
console.log(`This is the result of simple interest: ${SI}`);

// An exercise to practice conditionals and  loops in JavaScript:

/*1. Mobile Airtime Purchase Validator
  A telecom system needs to validate airtime purchases. Write a function that:
   - Takes phoneNumber, amount, and balance
   - Checks:
     - Phone number must be 10 digits
     - Amount must be greater than 0
     - User must have enough balance
   - Deducts the amount if valid and returns the new balance
   - Otherwise returns an error message */

function validateAirtimePurchase(phoneNumber, amount, balance) {
  if (phoneNumber.length !== 10) {
    return `Error. The phone number "${phoneNumber}" is invalid. It must be 10 digits long.`;
  }
  if (amount <= 0) {
    return `Error. The amount "${amount}" is invalid. It must be greater than 0.`;
  }
  if (amount > balance) {
    return `Error. Insufficient balance. Your current balance is ${balance}, but you need ${amount} to complete the purchase.`;
  }
  balance -= amount;
  return `Success! Airtime purchase of ${amount} is successful. Your new balance is ${balance}.`;
}

console.log(validateAirtimePurchase("0735476", 50, 100));
console.log(validateAirtimePurchase("0735434567", -20, 100));
console.log(validateAirtimePurchase("0735434567", 150, 100));
console.log(validateAirtimePurchase("0735434567", 50, 100));

/*4. Parking Fee Calculator
   A parking system charges based on hours parked. Write a function that:
   - Takes number of hours parked
   - Charges:
     - First 2 hours → KES 50/hour
     - Additional hours → KES 30/hour
   - Uses conditionals to calculate total cost*/

function calculateParkingFee(hours) {
  if (hours <= 0) {
    return "Error. Invalid number of hours.";
  }
  let fee;

  if (hours <= 2) {
    fee = hours * 50;
  } else {
    fee = 2 * 50;
    fee += (hours - 2) * 30;
  }

  return `Total parking fee for ${hours} hours is KES ${fee}.`;
}

console.log(calculateParkingFee(-1));
console.log(calculateParkingFee(1));
console.log(calculateParkingFee(2));
console.log(calculateParkingFee(3));
console.log(calculateParkingFee(5));
