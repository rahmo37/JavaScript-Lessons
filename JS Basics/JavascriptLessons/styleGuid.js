// ! Coding convensions are style guidlines for programming. they typically cover

/**
 * Naming and declaration rules for variables and function.
 * Rules for for use of white spcae, indentation, and comments.
 * Programming Practices and principles
 */

// What does conding conventions achive?
/**
 * Improve code readability
 * Make code maintenance easier
 */

// Variable Names
/**
 * use camelCase for Varibales and functions
 * All names start with a letter
 * Constants (Like PI) written in UPPERCASE
 */
// Example
let firstName = "Obaedur";
let lastname = "Rahman";
let price = 21.99;
let tax = 0.2;
let fullPrice = price + price * tax;
console.log(fullPrice);

// Spcaes around operators
// Always put spaces around operators (= + - * /), and after commas
// Example
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];

// Code indentatation
// always use 2 spaces for indentation of code blocks

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
// do not use tabs

// Statement rules
// General rules for simple statements
/**
 * Always end a simple statement with a semicolon
 */

// General rules for complex and compound statements
/**
 * Put the opening bracket at the end of the first line.
 * Use one space before the opening bracket
 * Put the closing bracket on a new line without leading spaces
 * And do not end a complex statement with a semi-colon
 */


// Object rules 
// General rules for object defination
/**
 * Place the opening bracket on the same line as the object name.
 * Use colon plus one space between each property and its value
 * Use quotes around string values, not around numeric values
 * Do not add a comma after the las property value-pair
 * Place the closing bracket on a new line, without leading spaces
 * Always end an object definition with a semi-colon
 */

// Keep every line less than 80 characters.
// If a JavaScript statement does not fit on one line, the best place to break it, is often an operator or a comma