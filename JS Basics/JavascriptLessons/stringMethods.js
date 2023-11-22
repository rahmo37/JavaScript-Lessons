// First of all every primitive type has a corresponding object type
// and we know that primitive type dont have any methods or properties in them, and to be frank thats why they are called literal syntax right?
// but in JavaScript when we try to call a method on a primitive type variable, under the hood the primitive value is wrapped around the object type, as a result we are able to call the methods on the primitive type as well.

let x = "Hi";
let y = new String("Hi");

x.substring();
y.substring();

// Here's what's happening under the hood:

// The string primitive "HI" is temporarily wrapped in a String object.
// The substring method is called on that temporary object.
// The temporary object is discarded, and you're left with the result.

// okay now lets see some properties and methods of String
// .length property will return the length of that string

console.log(x.length);

// slice() method extracts a part of a string and returns the expected part in new string.
// the slice method takes two parameters a start position and an end position
// start is including and slice is excluding
// Characters stars from index 0;
let str = "Shinigami loves apple";
console.log(str.slice(0, 9));

// you can also slice from the back
console.log(str.slice(-5, -2));

// now if you do not give a vlue for the second parameter, the method will slice out the rest of the string. for example,
console.log(str.slice(-5));

// Substring method.
// Substring method is similar to slice, but the difference is it cannot accept negetive indexes
console.log(str.substring(10, 15));

// Another method is called substr method
// Similar to slice but in this one you specify the length of how many character you want to slice. For example
console.log(str.substr(10, 5));
// the length of the word "loves" is 5, so we include the number 5 in the second parameter

// this method allows negetive count in its first parameter
console.log(str.substr(-5, 5));

// replace method
// replaces a SPECIFIED value, with another value in a string
console.log(str.replace("apple", "pineapple"));
// One thing to note is that the replace method doesnot alter the original string.
// Also if there is multiple same words, it will only replace the first one
// this method is case sensetive. if the original string is uppercase, the parameter of the replace method also needs to match

// If you want to make a particular string upper case you can use the toUpperString() method

console.log(str.toUpperCase());

// Opposite with toLowerCase();
let str1 = "I MISS BANGLADESH";
console.log(str1.toLowerCase());

// concat() method concatinates two strings
let text1 = "Hello";
let text2 = "World!";
// You can use the first parameter to secify the operator that will divide both of the text
console.log(text1.concat(" ", text2));

// Trim method trims any white spcae in a text. (Before and After)
let text3 = "       Hi         ";
console.log(text3.trim()); // outputs: Hi

// padStart() and padEnd()
let numStr = "5";
// So the total number of characters will be 4 and at the beginnig 3 zeros will be added
console.log(numStr.padStart(4, 0));

// padEnd() is the opposite
console.log(numStr.padEnd(4, 0));

// charAt returns the character at the specified position
console.log(text1.charAt(1)); //outputs e

// charCode returns the unicode value of the character of a specified position
console.log(text1.charCodeAt(2));

// you can imagine a string of text as an array of characters, thus accessing them like, accessing array element
console.log(text1[0]);

// Split method finds the specified character between a string, divids them and returns an array.
console.log(str1.split(" "));

// if you ommit the argument, the whole string will be returned as one element in the array.
console.log(str1.split());

// on the other hand if you pass and empty string every sigle character will be returned as individual element of an array
console.log(str1.split(""));
