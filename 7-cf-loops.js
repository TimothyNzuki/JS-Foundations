// In loops its all about repetitiom without having to rewrite the same code over and over again.
// It's more like telling javascript to keep doing something until i say stop.
//There are 3types of loops in javascript: for, while and do while loopd.

// 1. For loop
// It is mainly used when you exactly know how many times you want to exucute a  block of code.
// The syntax of a for loop is as follows:

/* 
for (initialization; condition; increment/decrement) {
    // code to be executed
}
*/
// Example of a for loop that prints number of steps taken from 1 to 5:

for (let i = 1; i <= 5; i++) {
  console.log(`Step ${i}`);
}

// 2. While loop
// It is mainly used when does not know exaclty how many times the code of block will be executed.
// There is always a condition that is checked which kinda guides for how long the loop will run.
// The syntax of a while loop is as follows:

/*
while (condition) {
    // code to be executed
}
*/
// Example of a while loop that prints number of steps taken from 1 to 5:

let step = 1;
while (step <= 5) {
  console.log(`Step ${step}`);
  step++;
}

// 3. Do while loop
// It is similar to while loop but the code block will be exected atleast once even if the condition is false because the cndition is checked after the code block is executed.
// The syntax of a do while loop is as follows:
/*
do {
    // code to be executed
} while (condition);
*/
// Example of a do while loop that prints number of steps taken from 1 to 5:

let stepCount = 1;
do {
  console.log(`Step ${stepCount}`);
  stepCount++;
} while (stepCount <= 5);
