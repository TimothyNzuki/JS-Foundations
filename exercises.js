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

let x = 17; // Initialization
let y = 5;

let Modulus= x % y;

console.log(`The remaider is: ${Modulus}`)


let b = 10;  
b += 5; 
b *= 2;

console.log(`This is the result of the short hand operator: ${b}`)

let string = "5";
let num3 = 2;

let sum2 = string + num3;
let Subtraction = string - num3;

console.log(`This is the sum of a string and a number: ${sum2}`)
console.log("This is the result of subtraction btw a string and number: " + Subtraction)

let string2 = "100";
let num4 = 50;

let strToNumber = Number(string2);
let numToString = String(num4);

console.log("Converted string to number: " + strToNumber)
console.log(`Converted number to string: ${numToString}`)

const Loose = 5 == "5";
const Strict = 5 === "5"

console.log(`This is checking for strict comparison: ${Strict}`)
console.log("This is checking for loose comparison:" + Loose)

let principle = 10000;
let rate = 5 ;
let time = 2;

let SI = (principle * time * rate) / 100;
console.log(`This is the result of simple interest: ${SI}`)
