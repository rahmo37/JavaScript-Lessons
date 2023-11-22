// JS data types are dynamic meaning one vaiable can be changed to hold different data types. for example
let x = 156;
console.log(x);
// now it is holding 156
// but you can change this same variable to hold a different data type if you want
x = "one fifty six";
console.log(x);

// A string is a series of charcters like "Obaedur Rahman".
// Strings are written with quotes. You can use single or double qoutes.
let str1 = "Double quotes";
let str2 = "Single quotes";
console.log(str1, str2);

// you can use quotes inside a string value, as long as it does not match the sourrounding quotes
let str3 =
  "The Sophoclean drama 'Antigone' has maintained its relevance through centuries";
console.log(str3);
let str4 =
  'Antigone"s resolute decision manifests the philosophical notion of "civil disobedience," demonstrating the resistance of individual moral sense against unjust state laws';
console.log(str4);

// Java Script has only one number type. you can include decimals or not include a decimal.

// such as
let decimalNum = 34.0;
let regularNum = 34;

// To write big numbers we use e notation, for example,
let z = 123e5;
let y = 123e-5;
console.log(z, y);

//  Boolean data type has teo values true or false
let num1 = 5;
let num2 = 5;
let num3 = 6;
console.log(num1 === num2);
console.log(num1 === num3);

// Array Data type which denotes a list of values
// They are numbered from 0 and onward, each postion is called index.
// The prural form of index is indecies.
// lets see an example
let numArr = [12, 15, 16, 20]; // 0 = 12, 1 = 15, 2 = 16, 3 = 20
// to access an array element, follow the bellow syntax
console.log(numArr[0]);
// Very Important note: in array indecis are actual numbers that stats from 0

// we also have the object data type, which is the most important data type of JS.
// an object also holds elements but they are called th key and value pairs
// Very Important note: In object the keys are actual strings
// lets see an example
let myObj = {
  x: 5,
  y: 6,
  z: 7,
};
// these x y and z are actual string and can be accessed as a string for example
console.log(myObj["x"]); // this syntax is callled bracket notation
// on the other hand you can also access it through, what called a dot notation, example
console.log(myObj.y); // outputs 6

// Undefined is a data type
// What is undefined?
// if a variable is declared without a value, that variable has the value undefined.
// more simply it means "this variable is declared but it is not have a defined value yet";
// for example,
let car;
console.log(typeof car); // outputs undefined
// you can set a predefined value set to undefined
// What do you mean

// Lets say for example you have a variable with a value
let guiter = "Ibanez";
console.log(guiter); //outputs Ibanez
// now you want to set it value intentionally to undefined for whatever reason, all you have to is
guiter = undefined;
console.log(guiter); //now it outputs undefined

// Null is another special data type in JavaScript. Null is a value that represents no value or no object. In other words, null is considered as a distinct value that represents nothing or undefined. It's typically used to signify that a variable should have no value. 

// Here's how it can be used: 
let example = null;
console.log(example); // outputs null