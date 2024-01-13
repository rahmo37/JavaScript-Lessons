// *Assignment3:
// ?related to JS Foundation folder, dataType.js and datatype part in w3Schools

// !Tasks:

// !Strings and Operations

// ?Create two strings, one using single quotes and another using double quotes. Concatenate them into a third string.
// ?Include a quote inside a string.
// ?Determine and display the length of one of the strings.

// Creating two seperate strings, and then concatinating them into a third one
let str1 = "String 1";

// This is signle quote, but pretier wil convert it to double quote when saved
let str2 = "String2";
let str3 = str1 + str2;

console.log(str3);

// including a quote inside a string
str3 = "Hello how are you 'Arnob'";
console.log(str3);

// Additionally you can use backticks to add quates and variables in a string

let str4 = `Hey Arnob concatinating str1 and str2 : ${str1} + ${str2}`;
console.log(str4);

// Finally to print the length of a string we use the length property of the string
console.log(str4.length);

// !--------------------------------------------

// !Number Handling

// ?Create two number variables, one with a decimal and one integer. Perform basic arithmetic operations on them.
// ?Write two numbers in exponential notation: one very large and one very small. Display their normal values.
// ?Use the typeof operator to verify the type of the number variables.

// A little bit about numbers in JS

// JavaScript uses 64-bit floating-point format which allows for:

// Variety of Numbers: 64 bit means The system can handle a vast array of numbers. This includes not just different sizes of numbers but also different types of numbers, such as whole numbers, fractions, very large numbers, and very small numbers.

// Capability for Large and Small Numbers: The format is capable of representing both very large and very small numbers. This is crucial for computations that involve either extremely big values (like astronomical distances) or very tiny values (like molecular scales).

// Decimal Numbers (Digits after the Decimal Point): The floating-point format allows for numbers with digits after the decimal point (known as the mantissa in scientific terms). This means you can represent numbers with great precision, including fractions or numbers that are not whole.

// Declaring two number variables one is whole number and one is a decimal number
let num1 = 12;
let num2 = 12.13;

console.log(num1 + num2); // Adding
console.log(num1 - num2); // Substracting
console.log(num1 / num2); // Dividing
console.log(num1 * num2); // Multiplying

// Extra large and extra small numbners can be written with scientfic exponential notation

// for example
let y = 123e5; // 12300000 5 zeros after the number
let z = 123e-5; // 0.00123 5 digit after the decimal point including the given number
console.log(y, z);

// Lets use the typeof operator to print the type of a number variable
console.log(typeof z);

// !--------------------------------------------

// !BigInt Usage

// ?Create a BigInt variable with a very large number. Display its value and use typeof to show its type.

// Declaring a BigInt number
let x = BigInt("123456789987654321123456789987654321");
console.log(x);

// Note that i would not be able to perform math betwee a BigInt type and a Number Type

// !--------------------------------------------

// !Boolean Logic

// ?Create boolean variables to represent a true and false state. Use them in a simple if-else statement.
// ?Compare two numbers using a comparison operator and store the result in a boolean variable.

// Defining a Boolean variable and using that variable in the context of if and else statement
let isPerfect = false;

if (isPerfect) {
  console.log("Every one is perfect");
} else {
  console.log("No one is perfect");
}

// Comparing two numbers and saving its variable in a boolean value
let isGreater = 5 > 2;
console.log("5 is greater than 2 :" + isGreater);

// !--------------------------------------------

// !Undefined and Null

// ?Declare a variable without initializing it and display its value and type.
// ?Create a variable, assign it the value null, and then display its value and type.

// When a value is declared and not initialized, JS automatically assigns the value undefined in it
// for example lets say that we declare a variable
let num;
console.log(num, typeof num); //Prints undefined and undefined

let typeNull = null;
console.log(typeNull, typeof typeNull); //Prints null and object

// a little bit about null vs undefined

// null is an assignment value, it could be assigned to a variable as a representation of no value. while undefined is set automatically just by not assigning a value, javascript never sets a value to null. This must be set specifically in the program.

console.log(null === undefined); //This equals false
console.log(null == undefined); //This equals true, because null and undefined are both inheritly falsy value
console.log(!null, !undefined); //Both returns true because null and undefined both are falsy value

// !--------------------------------------------

// !Arrays in Action

// ?Create an array of at least three items. Access and display the first and last item.
// ?Display the length of the array.
// ?Add an item to the array and display the updated array.

let numArr = [1, 2, 3];
console.log(numArr[0], numArr[numArr.length - 1]);

// You can also access the last item using the Arrays.prototype.at() method
// for example
console.log(numArr.at(-1));
// Array.prototype.at() method, introduced in ECMAScript 2022. This method accepts a negative integer, allowing you to access elements from the end of the array

// Access the length
console.log(numArr.length);

//
numArr.push(4);
console.log(numArr);
// !--------------------------------------------

// !Object Manipulation

// ?Create an object representing a person with properties like name, age, and email.
// ?Access and display at least two properties.
// ?Add a new property to the object and display the updated object.

// Creating a person object with the given variables
const person = {
  name: "Obaedur Rahman",
  age: 27,
  email: "obaedurrahman52@gmail.com",
};

// Printing two properties of the object
console.log(person.name);
console.log(person.email);

// Adding a new variable in the person object
person.country = "Bangladesh";

// Printing the person object
console.log(person);

// !--------------------------------------------

// !Dynamic Typing

// ?Create a variable and demonstrate JavaScript's dynamic typing by assigning it different data types (e.g., number, string, boolean) in sequence, displaying the variable and its type after each assignment.

// ?Dynamic typing is when we can assign different values to a same variable.

// First we are assigning the number 30
let dynamicVar = 30;
console.log(dynamicVar);

// Second we are assigning the String "Thirty" to the same variable
dynamicVar = "Thirty";
console.log(dynamicVar);

// Then we are assigning false to the dynamicVar
dynamicVar = false;
console.log(dynamicVar);

// !--------------------------------------------

// !Data Type Coercion

// ?Show how JavaScript treats the addition of a number and a string by creating examples that produce different results. Explain the output.

// When adding a number to a string, JS converts the whole expression into a string
// For example

let number = 50;

// Now if we add the number into a string, the whole expression will be a string
console.log(number + " Fifty", typeof (number + " Fifty"));

// On the other hand if you add the string "Fifty" to a number, you will again get a string
console.log("Fifty " + 50, typeof ("Fifty " + 50));

// Now if you add a number to a string that has a number
console.log(number + "5"); // this is also a string and returns 505

// However if you add a number and a string that has a number and you add + sysmbol infornt of the string the string will be converted to a number

console.log(number + +"5", typeof (number + +"5"));

// !--------------------------------------------

// !Creative Coding Challenge

// Write a simple program that uses various data types to solve a problem. For example, calculate the total cost of items in a shopping cart (using arrays and numbers), or store and display personal details in an organized manner (using objects).

// !--------------------------------------------

// !Submission:
// Complete each task and provide your code with comments explaining your approach and findings, especially for the creative coding challenge.
