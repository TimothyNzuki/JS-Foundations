// Objects in JavaScript

// Objects resemble arrays but they are different in the way they store data.
// In arrays it about collection of values, while in objects it is about collection of properties.
// The syntax of an object is as follows:
/*
let objectName ={
 property1 : value1,
 propersty2 : value2,
 propertt3 : value3
 };*/

// Example of an oblect representing a person:

let person = {
  name: "Myles",
  age: 22,
  city: "Nairobi",
  profession: "Software Engineer and Network Marketer",
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.profession);

console.log(person["name"]);
console.log(`My name is ${person.name} and I am a ${person.profession}.`);

// You can also add a new property to an object by assigning a value to a new key.

person.hobby = "Playing chess";

// You can also update the value of a property to a new value.

person.age = 21;
console.log(person);

// You can also delete a property from an object using the delete operator.

delete person.city;

console.log(person);

// Oblect are important because they hepl us represent real entities with they values grouped together.

let student = {
  name: "Sheilla",
  grades: {
    math: 85,
    swahili: 90,
    Computer: 97,
  },
};

console.log(student.grades.math);
console.log(student.grades.swahili);

let menuItems = {
  name: "Grilled Chicken",
  price: 800,
  ingridients: ["chicken", "spices", "lemon", "garlic"],
};

console.log(menuItems.ingridients[0]);

// Array of objects

let products = [
  {
    name: "laptop",
    price: 50000,
    features: ["lightweight", "RAM 16GB", "360 degree hunge"],
  },
  {
    name: "smartphone",
    price: 30000,
    features: ["high resolution camera", "long battery life", "fast processor"],
  },
  {
    name: "headphones",
    price: 5000,
    features: ["noise cancellation", "wireless", "long battery life"],
  },
];

console.log(products[1].features[2]);

console.log(products);

for (let p = 0; p < products.length; p++) {
  console.log(
    `Product: ${products[p].name} - Price: ${products[p].price} - Features: ${products[p].features.join(",")}`,
  );
}
