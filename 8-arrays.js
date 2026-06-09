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

// Loops  and Arrays
// You can use loops to iterate over the elements in ana array and perform operations on them.

// Example.

let foods = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos"];

for (let p = 0; p < foods.length; p++) {
  console.log("I love " + (p + 1) + ":" + foods[p]);
}

let drinks = ["Coke", "Pepsi", "Fanta", "Sprite", "7up"];
let index = 0;

while (index < drinks.length) {
  console.log(`I like ${drinks[index]}`);
  index++;
}

/*📝 Exercise for You
Create an array of 5 student names.

Use a for loop to print each name with its position (e.g., "Student 1: Alice").

Use a for...of loop to print "Welcome, [name]!" for each student.

Use the length property to print the total number of students in the array.
*/

// ----- 🏁 SOLUTIONS -----

let students = ["Collins", "Myles", "Sheilla", "Lillian", "Brennan"];

for (let s = 0; s < students.length; s++) {
  console.log("Student " + (s + 1) + ":" + students[s]);
}

for (let student of students) {
  console.log(`Welcome, ${student}!`);
}

console.log(`The totalnumber of students in the array is: ${students.length}`);

// ARRAY METHODS.

// Adding items in array.
// 1. .push()
// This is an array method that help programers add an item at the end of an array.

let fruits2 = ["bannanas", "Oranges", "Apples", "Avocados"];
fruits2.push("Lemon");
console.log(fruits2);

// 2. .unshift()
// This array method adds items at the START of the array.

let balls = ["busketball", "volleyball", "football"];
balls.unshift("rujiball");
console.log(balls);

// Removing items in an array.
// 1. .pop
// This array method removes an item  at the END of an array.

let kitchenItems = ["cup", "spoon", "plate", "jag", "oven", "fridge"];
kitchenItems.pop();
console.log(kitchenItems);

// 2. .unshift
// It's an array ,methos that removes an item at the START of an array.

kitchenItems.shift();
console.log(kitchenItems);

// .splice
// this is an array item that is used to udate items in an array.
// It can remove an item, add an item and remove and add an item at a go.

// The syntax is:
// array.splice(start, deleteCount, item1, item2)
// START is the index where the action will begin.
// DELETECOUNT is the number of item(s) to be removed.
// The ITEMS is the thind to be replaced where an item was removed.

let instructors = ["Mark", "Andre", "Pete", "Mellisa"];
instructors.splice(1, 1); // Removes "Andre" from the list.
console.log(instructors);

instructors.splice(1, 0, "Collins"); // Adds "Collins" to the list at index 1 without removing anyone.
console.log(instructors);

instructors.splice(2, 1, "Charity"); // At index 2, 1 item will be removed and "Charity will replace that item that has been removed."
console.log(instructors);

// The .sort method.
// It's a method that help programmers to  sort things especially in when it comes to data.
// It arrange elements in an array.
// By default it sorts the elements as strings in an ascending order. This is called lexicographical order

// The syntax is:
// array.sort(compare function)

let names = ["Felix", "Sheilla", "Soniah", "Manoah", "Thomas"];
names.sort(); // This will sort the elements in the array in an alphabetical order.
console.log(names);

// The part of the compare function is mostly used when there are numerical orders in the array.
// It hepls the programers tell the program how to arrange the elements.

let scores = [10, 30, 15, 5, 20, 70, 65, 35, 55];
scores.sort((a, b) => a - b); // This compare function will make the elements to be arranged in an ascending order.
console.log(scores);

scores.sort((a, b) => b - a); // This will make  the elements in the array to be arranged in a descending order.
console.log(scores);

// Explanation of ((a, b) => a-b);
// If the result of (a-b) is positive, a comes after b. If the result is negative, a comes before b.

// Ascending Order.
// 10 - 30 = -20. // 10 will be placed before 30 in the arrangement.
// 30 - 15 = 15. // The resu;t is positive. 30 will be placed after 15 in the list arrangement.

// For descending order it will be the opposite of the above explanation.
