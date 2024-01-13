// *Assignment2: (Due Mon, 8th JAN)
// Related to Operators.js

// !Arithmetic Operations:

// ?Write a program that calculates and prints the result of various arithmetic operations (addition, subtraction, multiplication, division, modulus, and exponentiation) between two numbers. Choose your own numbers for this.
// ?Explain in comments how each operator works.

// * Answer:
let x = 15;
let y = 4;
console.log("Addition", x + y); //Addition
console.log("Substraction", x - y); //Substraction
console.log("Multiplication", x * y); //Multiplication
console.log("Division", x / y); //Division
console.log("Modulus", x % y); //Modulus, its the remainder after x is divided by y
console.log("Exponent", x ** y); //Exponent x to the power of y

// ! -----------------------------------------------------------------

// !String Concatenation and Conversion:
// ?Create three string variables with different text values. Use the + operator to concatenate these strings in various ways (e.g., string + string, string + number).
// ?Explain how JavaScript handles different concatenation scenarios.
let str1 = "String 1";
let str2 = "String 2 ";
let str3 = "5";

// The + operator can also be used to concatinate strings
// for example,
console.log(str1 + str2);

// this also works to contatinate something with a string
str1 += "plus";
console.log(str1);

// If we add a number with a string. the number will be added but the whole value will be a string

console.log(str2 + 5);

// Also if you have a string that has a number value but as a String, adding an actual number to it will also make it string.
console.log(str3 + 5);

// If you actually want to add a number to a string, you have to first convert the string to a number, and adding a + symbol infront of a srting make the string a number, you could also use, Number() or parseInt()
console.log(+str3 + 5);

// ! -----------------------------------------------------------------

// !Type Coercion:
// ?Demonstrate type coercion by adding a number to a string, ensuring the result is a string.
// ?Similarly, show what happens when you add a string to a number.
// ?Explain in comments why JavaScript behaves this way in each case.

// When we add a number to a string, the number is first converted into a string and then concatinated to the other string and the whole result becomes a String.

console.log(typeof ("The result is " + 10));

// In the same way when a String is added to a number, the number is first converted to a string and then concatinated to the other string.

console.log(typeof (10 + "Is the result"));

// JavaScript behaves this way because its a loosly typed language. meaning it often automatically converts types during the runtime. In java for example a explicit type conversion is required

// !Comparison Operations:
// ?Write examples using all comparison operators (==, ===, !=, !==, >, <, >=, <=).
// ?Explain the difference between == and ===, and between != and !==.

// lets first define some variables which we are going to work with
let number = 5;
let strNumber = "5";

// *Loose Vs Strict equality
// Now lets compare both with loose operator
// Loose equality operator covertes the first operand to the second operand's type and then converts
console.log(number == strNumber); // true
// if we now compare them with strict operator lets us see what we get
console.log(number === strNumber); // false

// now lets try false and 0, false is converted to 0
console.log(false == 0);

// on the other hand strict equality would return false
console.log(false === 0);

// Another example is null and undefined are equal to each other when using loosly operator
console.log(null == undefined);

// *Loose vs Strict inequality
// This is opposite to the equality

// The number is 5 and strNumber is "5" which was souppose to be equal but != is returns the opposite. if they were not equal it would return true
console.log(number != strNumber);

// on the other hand the !== will return true. because when using === the number and strNumber are not equal, because their type does not match

console.log(number !== strNumber);

// * Greater than and Less than
// when comparing a string number and an actual number, if they are greater or less then each other, the string number is converted to a number first and then compared

// strNumber is converted to number and then compared with number 5
console.log(number < strNumber); //Both are 5 so returns falses

// now lets change strNumber to something else
strNumber = "7";
console.log(number < strNumber); //since number is now less than strNumber which is 7 it will now be true

console.log(number > strNumber); // false

// lets change the number to 7 and see if they return true, when comparing with >= and <= sice they are now both equal\
number = 7;
console.log(number >= strNumber);

console.log(strNumber <= number);
// ! -----------------------------------------------------------------

// !Logical Operations:
// ?Create a few examples using logical operators (&&, ||, !) in different scenarios.

// ?Explain in comments how these operators work.

// While demonstrating the && operators, which means that both conditions needs be true to execute a block of code, if variable a and b both has the value 5, the block of code will print equal
let a = 5;
let b = 5;

if (a === 5 && b === 5) {
  console.log("a and b are equal");
} else {
  console.log("a and b are not equal");
}

// for the condition or we use || operator, which says if either a or b is 5 then we will execute the block of code

a = 6;
b = 5;
if (a == 5 || b == 5) {
  console.log("a or b one of them equals to 5");
} else {
  console.log("None of them are equals to 5");
}

// Not ! represents inversion. if an expression evaluates to true and there was a ! sign infront of the expression, the block of code will not run. meaning the ! was expecting the expression to be false

a = 5;
if (!(a == 5)) {
  console.log("a does not equal to 5");
} else {
  console.log("a equals to 5");
}
// ! -----------------------------------------------------------------

// !Type and Instance Checking:
// Use typeof to check the type of various variables.
// If you have covered objects and classes, use instanceof to check if an object is an instance of a particular class.

// * typeof for variables
// Lets define some variables and then check their types
let name = "Obaedur Rahman";
let age = 27;
let isAdult = true;
let swimingSkill = null;
let divingSkill = undefined;

console.log(typeof name); // String
console.log(typeof age); // Number
console.log(typeof isAdult); // Boolean
console.log(typeof swimingSkill); // Object
console.log(typeof divingSkill); // Undefined

// Why the type of null is an object?
// while it might not make sense from a design perspective, typeof null === "object" is a quirk that JavaScript developers have learned to live with, and it remains as a part of the language for historical reasons and compatibility.

// * instanceof for a class instance
// Lets declare a class

class Student {
  constructor(name, major, university) {
    this.name = name;
    this.major = major;
    this.university = university;
  }
}

const obaedur = new Student(
  "Obeadur Rahman",
  "Computer Programming",
  "Farmingdale State college"
);

console.log(obaedur instanceof Student); //true
// ! -----------------------------------------------------------------

// !Evaluation Order:
// ?Write an expression that shows how JavaScript evaluates expressions from left to right. Use both numbers and strings to demonstrate this.
// ?Explain the result of each expression.

// JS evaluates expression from left to rigth. Which means different sequence of concatination will produce different results.

// for example,
let num1 = 7;
let num2 = 3;

console.log(num1 + num2 + " Result is 10");
// the result is 10 in this case, because num1 and num2 is first added and then concatinated to the string.

// on the other hand if the string was at the beggining the result would be different

console.log("The result is num1 and num2 concatinated " + num1 + num2);

// The string and num1 is first concatinated and then num2

// ! -----------------------------------------------------------------

// !Reflection:
// ?After completing the above tasks, reflect on your learning experience. What did you find most interesting or challenging about JavaScript operators? How do you think understanding these operators will help you in future programming tasks?

// The learnings will greatly help me because the are absolute fundimentals of JS, i have revised the operators, typeof instanceof operator expression evaluation, which solidified my understanding about JS. The most interestion was null being object and got to know that it actually was a bug

// ! -----------------------------------------------------------------
