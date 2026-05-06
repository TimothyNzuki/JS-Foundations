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

/*2. Student Grade Processing System
   A school wants to automate grading. Write a function that:
   - Accepts an array of student scores
   - Uses a loop to:
     - Assign grades: 70+ → A, 60–69 → B, 50–59 → C, Below 50 → Fail
   - Returns a summary:
     - Total students
     - Number of passes and fails*/

let scores = [85, 72, 68, 45, 90, 55, 30];

function studentScore(scores) {
  let totalStudents = scores.length;
  let passes = 0;
  let fails = 0;

  for (let z = 0; z < scores.length; z++) {
    let score = scores[z];
    let Grade;

    if (score >= 70) {
      Grade = "A";
      passes++;
    } else if (score >= 60) {
      Grade = "B";
      passes++;
    } else if (score >= 50) {
      Grade = "C";
      passes++;
    } else {
      Grade = "Fail";
      fails++;
    }

    console.log(`Student ${z + 1}: Score = ${score}, Grade = ${Grade}`);
  }
  return `Total students: ${totalStudents}, Passes: ${passes}, Fails: ${fails}`;
}
console.log(studentScore(scores));

let summary = studentScore(scores);
console.log(summary);

/*3. Supermarket Discount Calculator
   A supermarket applies discounts based on total purchase. Write a function that:
   - Takes an array of item prices
   - Calculates total cost using a loop
   - Applies:
     - 10% discount if total > 5000
     - 5% discount if total > 2000
   - Returns final payable amount*/

let itemPrices = [1000, 2500, 800, 500, 5000];

function calculateFinalAmount(prices) {
  let totalCost = 0;

  for (let y = 0; y < prices.length; y++) {
    totalCost += prices[y];
  }

  if (totalCost > 5000) {
    totalCost = totalCost - totalCost * 0.1;
  } else if (totalCost > 2000) {
    totalCost = totalCost - totalCost * 0.05;
  }
  return `The final payable amount after discount is KES  ${totalCost}.`;
}

console.log(calculateFinalAmount(itemPrices));

/*- ride object: distance, baseFare, perKmRate, isPeakTime  
- driver object: isAvailable, rating

Calculate total fare (apply surge if peak time).  
Determine if driver should accept the ride only if:  
- Driver is available  
- Rating is above a threshold  
- Distance is within an acceptable range*/

let ride = {
  distance: 10,
  busfare: 200,
  perKmRate: 20,
  IsPeakTime: true,
};

let driver = {
  isAvailable: true,
  rating: 4.7,
};

function calcutlateTotalFare(ride) {
  let totalFare = ride.busfare + ride.distance * ride.perKmRate;

  if (ride.isPeakTime) {
    totalFare *= 1.5;
  }

  return totalFare;
}

function shouldDriverAcceptRide(driver, ride) {
  let maxDistance = 20;
  let ratingThreshold = 4.5;

  if (
    driver.isAvailable &&
    driver.rating >= ratingThreshold &&
    ride.distance <= maxDistance
  ) {
    return "Driver should accept  the ride.";
  } else {
    return "Driver should not accept the ride.";
  }
}

let totalFare = calcutlateTotalFare(ride);
console.log(`The total fare for the rode is KES ${totalFare}.`);

console.log(shouldDriverAcceptRide(driver, ride));

/*You are given:  
- account object: balance, isActive  
- transaction object: amount, type

Determine if a withdrawal should go through only if:  
- Account is active  
- Balance is sufficient  
- Amount is within a daily limit  

Also update the balance accordingly.*/

let account = {
  balance: 500,
  isActive: true,
};

let transaction = {
  amount: 300,
  type: "withdrawal",
};

function determineWithdrawal(account, transaction) {
  let maxLimit = 400;

  if (
    account.isActive &&
    transaction.amount <= account.balance &&
    transaction.amount <= maxLimit
  ) {
    return `Withdrawal of KES ${transaction.amount} is successful. Remaining balance is KES ${account.balance - transaction.amount}.`;
  } else {
    return `Transaction not successful.  Please check your account status and try again.`;
  }
}

console.log(determineWithdrawal(account, transaction));

/*
You are given an array of products, each with:  
stock, minStockLevel, isDiscontinued

Identify which products need restocking only if:  
- Stock is below minimum  
- Product is not discontinued*/

let Products = [
  { stock: 10, minStockLevel: 20, isDiscontinued: false, name: "Laptops" },
  {
    stock: 15,
    minStockLevel: 50,
    isDiscontinued: true,
    name: "Phones",
  },
  {
    stock: 50,
    minStockLevel: 100,
    isDiscontinued: false,
    name: "Earphones",
  },
  {
    stock: 5,
    minStockLevel: 15,
    isDiscontinued: false,
    name: "Keyboards",
  },
];

function productsToRestock(Products) {
  let restockList = [];

  for (let pr = 0; pr < Products.length; pr++) {
    let product = Products[pr];

    if (product.stock < product.minStockLevel && !product.isDiscontinued) {
      restockList.push(product.name);
    }
  }
  return restockList;
}

console.log(
  `Products that need restocking are: ${productsToRestock(Products).join(", ")}`,
);

/*You are given:  
- An array of attendees  
- Each attendee has: hasTicket, hasID, age

Determine who is allowed entry if:  
- They have a ticket  
- AND (they are above required age OR have special permission)*/

let attendees = [
  {
    name: "Davies",
    age: 20,
    hasTicket: true,
    hasId: true,
    hasSpecialPermission: false,
  },

  {
    name: "Janelle",
    age: 17,
    hasTicket: true,
    hasId: true,
    hasSpecialPermission: true,
  },

  {
    name: "Terril",
    age: 17,
    hasTicket: true,
    hasId: true,
    hasSpecialPermission: false,
  },

  {
    name: "Brennan",
    age: 21,
    hasTicket: true,
    hasId: true,
    hasSpecialPermission: true,
  },
];

function allowedEntry(attendees) {
  let allowed = [];
  let requiredAge = 18;

  for (let y = 0; y < attendees.length; y++) {
    let person = attendees[y];

    if (
      person.hasTicket &&
      (person.age >= requiredAge || person.hasSpecialPermission)
    ) {
      allowed.push(person.name);
    }
  }
  return allowed;
}

console.log(allowedEntry(attendees));
