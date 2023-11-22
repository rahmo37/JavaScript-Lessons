// ! JS variables can be converted to a new variable and another data type
/**
 * by the use use of a JS function
 * and sometimes JS automatically does this
 */

// some conversion that can happen in JS is
/**
 * Converting Strings to Number
 * Converting Number to Strings
 * Converting Dates to Numbers
 * Converting Numbers to Dates
 * Converting Booleans to Numbers
 * Converting Numbers to Boolean
 */

// Lets convert a string to  number
// we are going to take two variables
let numStr1 = "3.14";
let numStr2 = "Obaedur";
// now if you want to convert the numStr1 to a number we can use the Number() method
console.log(typeof Number(numStr1));
// but the second vari able is not convertble because the value is a number
// and even if you try to force converty it, the variable result will NaN, lets see
console.log(isNaN(Number(numStr2)), Number(numStr2));

// Now let update both of the variables up above
numStr1 = "";
numStr2 = "   ";
// one has empty string, another has just space it them. now when we try to convert them in a number both will resilt in 0. so empty string to any number of string both will be converted to 0
console.log(Number(numStr1), Number(numStr2));
console.log("\n.............\n");

//* Also we have parseFloat() --> which converts a numericString to a number. any number after decimal will be converted to a number data type
// We also have parseInt() --> this converts a numericString to a number, but any decimal point will be ommited, basically if you have 3.14, it will only take 3 and convert it to a number

//* we also have unary operator which takes a single oprand and performs an operation. we can use it to convert a numbericString, even convert a boolean value, lets see,

// Unery plus
console.log(+true); // Outputs 1
console.log(+false); // Outputs 0
console.log(+"5"); // Outputs 5
console.log("\n.............\n");
//Unery negetion tries to convert the operand into a number and negates it.
console.log(-"3"); // Outputs -3
console.log(-false); // Outputs 0
console.log(-"5"); // Outputs 5
console.log("\n.............\n");
//* Numbers to String

// we can convert numbers to strings by using the String() method
let x = 123;
console.log(String(x));
console.log(String(123));
console.log(String(1 + 3));
console.log("\n.............\n");

// you can achive the same result with toString()
console.log(x.toString());
console.log((123).toString());
console.log((1 + 4).toString());

console.log("\n.............\n");

// * converting date to numbers
// the global Number() method can be used to convert dates to number
// for example,
let d = new Date();
console.log(Number(d)); // returns 1692387369777, number of milliseconds passed from 1970

// getTime() does the same, returns the number of milliseconds, in number
console.log(typeof d.getTime());

console.log("\n.............\n");

// *converting Dates to String
// The global method String() can convert dates to Strings
// For excample
console.log(String(Date()));

// toString() does the same
console.log(Date().toString());
console.log("\n.............\n");

// * you can convert booleans to numbers as well
// we first need to realize false will be converted to 0 and true will be converted to 1
console.log(Number(false));
console.log(Number(true));

console.log("\n.............\n");
// Converting boolean to string
console.log(String(false));
console.log(String(true));
//Similar result can be gain with toString

console.log("\n.............\n");
//* now lets learn about some of the things the JS Automatically Handles

console.log(5 + null); // returns 5, because null is converted to 0
console.log("5" + null); // returns "5null" because null is converted to "null", and we are adding the string 5 with null, string get prioritize
console.log("5" + 2); //now JS confused because it doesnot know wheather to add 2 to 5 or concatinate 2 to 5, again string is prioritize the number 2 is concatinaed and converted to a string

console.log("5" - 2); // now the intention is specific, we only use a negetive sign to perform arithmatic operation, so JS converts the string 5 to number 5 and performs the operation
console.log("5" * "2"); // the intention is again creal here, the multiplication  symbol is only used in arithmatic operation so, JS converts the String 5 and 2 to a number and performs the operation

// Converting an object to a string
// This is a confusing one
// the exlanation i found o chatGPT is,
// The default toString() method for plain objects in JavaScript returns the string "[object Object]". When you call toString() on an object without a more specific implementation of this method for its type, this default representation is what you get.

// Why? Because the default behavior of the toString() method for an object is to return a string in the form of [object type], and for plain objects, the type is Object.
console.log({ name: "Obeadur" }.toString()); //outputs "[object, Object]"

// Converting an Array
console.log([1, 2, 3].toString());



// ! go to this link to find the complete list of type conversion table, https://www.w3schools.com/js/js_type_conversion.asp
