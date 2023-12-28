// What is a block of code?
// A block of code is any lines of code in between a curly brace
// they are a group of programming statements that work together to perform a specific task.
// now a loop can execute this block of code over and over again, and value inside that can be changed according to our needs

//! lets talk about for loop
// a for loop takes 3 seperate code expression
// first a variable whoes initial value we can set to any number,
// second statement determines how many time we would like to loop this for loop
// and third statement is if we want to increment or decrement the value of the first variable
// the inside the code block we can include any number of code line we want

// lets see the syntax
for (let i = 0; i < 5; i++) {
  // we are taking the initial value of i as 0
  // then we are saying while i is less than 5 we are going to loop the block of code
  // and finally we have to increment the value
  //lets print the value of I each time it loops
  // !console.log(i);
}

// we can iterate an array with for loop very easily
// lets say we have a an array of alphabents from A to E
let arr = ["A", "B", "C", "D", "E"];

// and i want to loop through them
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// You can add multiple initialization expression in the first statement area, for example
for (let i = 0, len = arr.length, text = ""; i < len; i++) {
  text += arr[i];
  console.log(text);
}

//* ommiting the statements
// You can ommit first statement and define the variable outside the loop
// also you can ommit the second statement and define the condition to exit the loop inside the loop body
// you can even ommit the third statement and include it inside the body

// for example
let i = 1;
for (;;) {
  // but need to say when the loop will end otherwise it will run indefinately
  if (i > 10) {
    break;
  } else {
    console.log(i);
  }
  i++;
}

// * loop scope
// we know that var is function scoped and global scoped
// so if we define a variable with var outside the loop, and than we redeclare it inside the loop, it will override the the first variable
// lets see an example
var val = 5;
for (var val = 0; val < 15; val++) {
  console.log(val, "inside the loop");
}
console.log(val, "outside the loop");
// because of redeclaration inside the loop the value outside is also changeed

// but the rules are not the same for let or const, since they are blocked scoped, just change the variable keyword to let to experiment

//* There are different kinds of loops
/*
for
for/in
for/of
while
do/ while
*/
