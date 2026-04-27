// A varible is a storage location int the computer memory- RAM where data is stored.


// To explain what a variable is, i will use an example of a library. In a school library there are a lot o books with different titles and for difeferent classes. 
// In order to find a form 4 mathematics textbook, you will have to to the box named form 4 mathematics textbooks. The textbooks are inside the box and after locating the box or shelve, now you can take out whatever amount of  F4 mathematics text books that you need.
// So the name of the box or shelve (F4 mathematics books) is a variable which does not change unless changed. 
// We can say that a variable is named reference to a storage location where data is stored.
//The contents of the box (books) are the values which change over time. They can reduce or increase, but the name of the box doesn't change unless one decides to cahange it.

// In JS the main variables used in this modern gen are (LET) and (CONST).
// For LET, the values assigned to that variable can change but for (CONST) which means constant the values don't change.
// The fact that they are called variables it means that they can be changed.


// The advantage of variables are:
// 1. They help keep track  of data(e.g score in a game).
// 2. One does not have to keep handwriting  code. You can reuse the values of the variable by targeting the variable.
// 3. Storing data.

// Examples:

// let greeting = 'Hello World" 
// explanationt- the fact that we used let it means that the value can change later. 
// greeting is the variable. 
// 'Hello world' is the value. 
// So the variable (greeting) is used to refer to (Hello world)

// If  I  want to run this I will write consol.log(greeting); and it will print out Hello World.

// Using contst:
// const greeting = 'Hello World' 
// the value will be the same but the diff is when I use conts the value(Hello World) can't change but when I use let, the value (Hello World) can change later.


// If I say 
// let x= 10
// x = x+1 
// The value of the above will be 11 because I used let hence the value can chnge.

// The same exuation using const.
// const x= 10
// x= x+1
// In this one, it will  probably display and error or won't return any value because I used the variable of const, meaning the value(10) can't change.


// Declaration   
// This means telling the program a variable exists and  giving it a value. (F4 Mathematics books)
// It's declared using LET and CONST.
// e.g let score;
// e.g  const score;(note that this is an error because const has to be initialized immediatley)

// Assignment
// This means to give a value to our variable that we have declared.
// We use an = sign to assign.
// e.g score = 10;


// Initialization 
// This means declaring and assinging a value at the same time.
// This is the correct way when using CONST.
// e.g const score= 10;



// Reassignment
// This means reassigning the value given to a variable. 
// Only works with LET.
// let score= 10;
// score = 20; (This is the reassignment. Cant work with CONST  because the values of CONST don't change.)

// const  score= 10;
// score = 20;(Error2)