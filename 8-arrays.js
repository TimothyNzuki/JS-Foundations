// Arrays in JavaScript
// An array is like a  container that holds mutiple values in one variable.
// You can store different data types in an array, but its not advisable since that wa the code is not really clean.
// The syntax of an array is as follows:
/*
let arrayName = [element1, element2, element3, ...];
*/
// Example of an array that holds the names of fruits:

let fruits = ["Bananas", "Pears", "Oranges", "Avocados", "Apples"];

console.log(fruits);

// The elements in an array are separated by commas and are enclosed in square brackets [].

// You can access individual element in an array using its index. The index always starts from 0.

// Example of accessing the third element in the fruits array:

console.log(fruits[3], fruits[2]);

// You can also modify the elements in an array by assigning a new value to a specific index.

// Example of modifying the second element in the fruits array:

fruits[2] = "Pineapples";
console.log(fruits);

// You can also add new elements to an array using the push() method, which adds an element to the end of the array.

fruits.push("grapes");
console.log(fruits);

// You can also remove the last element from an array using the pop() method.

fruits.pop("grapes");
console.log(fruits);

// You can also add an element  to the beginning of an array using the unshift() method.

fruits.unshift("MAngoes");
console.log(fruits);

// You can also remove the first element from an array using the shift() method.

fruits.shift("MAngoes");
console.log(fruits);

// You can also  find  the lenght of an array using the length property.

console.log(`The number of fruits in the array is: ${fruits.length}`);
