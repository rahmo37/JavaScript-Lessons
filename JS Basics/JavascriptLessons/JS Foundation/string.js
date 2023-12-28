// Strings data type is used for storing and manipulating text
// A String is zero or more characters written inside single or double quotes
let str = "string";

// to find out how many character a string has we use the length property on a string variable
let alphabet = "ABCDEFGHIJKLMNOPQRSTuVwXYZ";
console.log(alphabet.length);

// If we sarround a String with double or single quote and we still want to use that same quote inside a string, we use the backslash escape character.
// JS will not understand this string
// let missledString = ""Obaedur Rahman" is an undergrad student";
// in this case we need to use the escape character
let usingBackSlashes = '"Obaedur Rahman" is an undergrad student';
console.log(usingBackSlashes);

// Now what if you want to keep backslash as your string
// we simply use backslash before back slash
let backSlashAsString = "\\Rayquaza\\ sky high pokemon";
console.log(backSlashAsString);

// \n inside a string will create a new line
// \t inside a string will place a tab in between

// Now lets say that you have a big line of string and you dont want to make the line this big and you want to go to the next line, for example,
let longLine =
  "My name is Obaedur Rahman. i would like to learn JavaScript Througholy";
// now you want the second sentense to start from a new line
// you can simply put a back slash after the first sentence and start from the next line.
longLine =
  "My name is Obaedur Rahman. \
i would like to learn JavaScript Througholy";
console.log(longLine);

// you can also achive this with + (plus/concatination) operator

longLine = "My name is Obaedur Rahman. " + "Java Script is Fun";
console.log(longLine);

// You can create a String as an object
let strObject = new String("strObject");

// but this is the litarel string variable. Thyey are also called primitive value
let primitiveString = "primitiveString";
console.log(typeof strObject, typeof primitiveString);


// Now lets say we have a primitiveString and a objectString variables, but their values are same
let x = "Hello World";
let y = new String("Hello World");

// and you want to check their values if they are equal or not.
// now if you use double equal ==, it will return true, but if you use === equal it will retrun false. can you tell me why?
// brcause == only checks the value but === equal checks for value and type
console.log(x == y);
console.log(x === y);

// Now lets look at this
let a = new String("hi");
let b = new String("hi");

// The object and the values both are the same
console.log(a == b);
console.log(a === b);
// but why they are both returning false for
// Although the values are the same, they are two separate and distinct objects in memory. console.log(a == b); returns false because the == operator compares the references of objects, not their content. Since a and b are two different objects in memory, this comparison returns false.

// And console.log(a === b); also returns false because the === operator checks for both type and reference equality. Again, a and b are different objects, so this comparison returns false as well.

// now if you really want to succeed in life you need to work hard 

// now if you really want to compare both the values you can use the valueOf() operator of string

console.log(a.valueOf() == b.valueOf(), a.valueOf() === b.valueOf());
// now they will return true 

// Finally, not only string any javascript object when comparing them will alawys return false. because their location in memory are different