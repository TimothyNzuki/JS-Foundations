// A data types defines the kind of value will be assigned to a varible and the operations that can be performed on it.
// Data is clacified into two broad types in JS.

// 1. Primitive Data Types
// These are the basic.

// They are: String, Number, Boolean, Null, Undefined.
// Symbols is part of this, but will talk about it later.

// String.
// It's data in general that has been enclosed in single or double quotesand backticks.
// String represents words or a sentence and the main identifyer is that the word or the sentence is rapped inside single speechmark.
// e.g 'Nzuki'
// const  name= 'Nzuki';
// let name= 'Nzuki';

// Number.
// This represents mathematical values. Both whole numbers and decimals.
// e.g 20, 3.4
// const age= 22;
// let age= 22;

// BigInt.
// These are number that are beyond the maximum limit of a safe integer.
// let big = 123456789012345678901234567890n; // BigInt

// Boolean.
// This represent values that are considered either true or false and not wrapped in quotation marks.
// They are mainly used where a cindition is given.
// e.g isStudent = true;
// contst isStudent= true;
// let isStudent= true;
// In the writing of boolean the camelCase is most used when deaing with JS. Especially for readability.

// Truthy and Falsy values are not booleans.

// Null.
// This means the value is empty. It's  usually intentional.
// e.g. let nothing= null;

// Undefined.
// This is a non-intentional emptiness.
// Majority of the people confuse between undefined and null.
// In undefined, it's declaring the variable without assigning it.
// With  this knowledge it means that we can never use the variable CONST because a CONST has to be assigned immediatley.
// e.g. let notAssigned;

// Second type ofdata is called Non-Primitive or complex data.
// The ones I haveunderstood is this seection is: Arrys and Objrcts.

// Arrays.
// This is when a variable is given more than one value.
// Thevalues given can be of the same type, or different type ofdata.
// They are grouped using [] brackets and the values inside are seperated  using commas.
// The values in an array are called elements.
// Mainly arrays are used when you want an ordered list of items. Also in looping it's used.
// e.g. let fruits = ["apples" "bananas" "oranges"]
// The starting value is given the number 0.
// console.log(fruits.[0]) this prints apples.

//Objects.
// This is used when respresenting one thing that has key things under that main thing.
// e.g. let person={name; "timo", age: 22, town: "nai"}
// ?Here you can refer to one single thing by its vaLue.
// note that this is not really dependable if you  need alist.
//  Really dependable when you waant to target a specific property in an entity.
// consol.log(user.city); prints "nai"

let obj = {
  hobbies: ["tennis", "football", "gaming"],
  age: 7,
  height: "70cm",
  getAverageGrowthRate: function () {},
};

console.log(obj.hobbies[2]);
