// number is a primitive typeof. and it does not have any access to any methods. but JS temporarily wraps the primitive number type to its corresponding object typeof, therefore, the primitive number type also have access to the Number methods
// All and any forms of numbers can have access to methods.

//toString method, returns a number as String, let us see an example
let x = 123;
let y = "60";
console.log(x.toString(), typeof x.toString());
console.log((123).toString());
console.log((456 + y).toString());

// A number is converted to its exponential form with iExponential() method. for example

console.log(x.toExponential());

// you can provide a parameter to reduce the number after the decimal
x = 12345.67890001;
console.log(x.toExponential(5));

// toFixed()  method returns a string, used to reduce the digits after the decimal points
// also it rounds the number
console.log(x.toFixed(2));

// toPrecision() method returns the total number of digits matching the argument. not after the decimal rather the whole number will be that length
// for example
console.log(x.toPrecision(9));

// Value of is called to exrtact the exact value from an Number Object
let num = new Number(500);
console.log(num.valueOf());

// Some Global Methods of number
// Number() function can convert a value to its corresponding number
// for example
console.log(Number(true)); // outputs 1
console.log(Number(false)); // outputs 0
console.log(Number("10")); // outputs 10
console.log(Number("10.33")); // outputs 10.33
console.log(Number("10 33")); // outputs NaN
console.log(Number("John")); // Outputs NaN

// You can apply number method on Dates which returns how many millisecond have passed after 1.1.1970
console.log(Number(new Date("2023-08-08")));

// The ParseInt method converts a number with decimal and digits after points to whole number, so eliminates the numbers after the point
// for example
console.log(parseInt(10.33)); //outputs 10
console.log(parseInt("-10")); //outputs -10
console.log(parseInt("-10.33")); //outputs -10
// if you have series of numbers seperated by space, will only return the first number
console.log(parseInt("10 20 30")); //outputs 10
// Even if you have a number and string, it will still return the first number
console.log(parseInt("10 Years"));
// but if the string is before the number it will return NaN
console.log(parseInt("years 10"));

// Some Property of the number object
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

// These properties cannot be used in Variables
