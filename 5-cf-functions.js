// A function is a reussable block of code designed to perform a specific function.
// Instead of  writind  a code mutiple times, you just wrap it inside a fuction and 'call' it whenever you want.
// It's main purpose it to help with repetition. (Write once, use many times).
//  Also it helps in organisation of data.

// There are two way to declare a function:

// 1. This is the basic way of function declaration:

// function functionName(param1,param2..paramN){
	// block of JavaScript code
//}

function greet(name){
    return `Hello, ${name}! Welcome to Javascript functions.`;
}
console.log(greet("Timo"))
console.log(greet("Myles"))

function subract(a , b){
    return a - b;
}
console.log("The result of subtracting 4 and 3 is: " +subract(4,3));


// It begins with the name fuction, followed by the name of the created function, a list of parameter the fucntion accepts wraped in parentheses and separated using commas.
// A javascript code wraped inside curly braces {} to be executed when the function is called.

// 2.Assigning a variable to the function:
// If we are doing subtraction:

const subtractNumbers = function (a,b){
    return a - b;
}
console.log(`The result of subtracting 4 and 3 is: ${subtractNumbers(4,3)}`);

// note that I did not put the Arguments.
const subtractNum = function (a = 7, b = 4){
    return a - b;
}
console.log(`The ruslt of subtracting 7 and 4 is: ${subtractNum()}`);

// Using Arrow function:
const subtractNum1 = (a , b) => a - b;
console.log(`The result of subtracting 7 and 4 using arrow function is: ${subtractNum1(7 , 4)}`);

function greetings(name){
    return `Hello ${name.toUpperCase()}! Welcome to Javascript Functions`;
}

console.log (greetings("timo"))
console.log (greetings("myles"))

function logGreeting(name){
    console.log(`Hello ${name}`);

}

function calculateTotalPrice(price, quantity = 1){
    return `Buying ${quantity} items at ${price} each gives a total of: ${quantity * price}`;
}

console.log("The product of price and quantity is: " + calculateTotalPrice(200 , 5));
console.log(calculateTotalPrice(200));

// Using arrow function:
const calcTotalPrice = (price , quantity=1) => `Buying ${quantity} items at ${price} each give total of : ${price * quantity}`;

console.log(calcTotalPrice(300,4))
console.log(calcTotalPrice(300))
