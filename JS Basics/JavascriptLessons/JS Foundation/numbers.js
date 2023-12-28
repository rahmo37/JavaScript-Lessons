// numbers can be written in decimals or without decimals
// for example
let x = 3.14;
let y = 3;

// you can add too small number or too big numbers with e notation
x = 123e5;
y = 123e-5;
console.log(x, y);

// the number variable is accurate upto 15-17 digits, after that the value might flactuate.
x = 123456789012345.12345678901234567;
console.log(x); // this is printing upto .12
// When you define the value 123456789012345.12345678901234567, the number is stored in that 64-bit floating-point format. Because of this, only a certain number of significant digits can be represented accurately, and the remaining digits will be lost or rounded.

// When you print this number, you may observe the output 123456789012345.12 or something close to it, since only the first 15-17 digits can be precisely represented. The rest of the number will be lost due to the limitations of the floating-point representation

// another thing to note is
// the floating point arithmatic is not always accurate, for example
y = 0.2 + 0.1;
console.log(y); // returns 0.300000000000004
// but we were expection just 0.3 right?
// so, to achive this accurately we can follow this formula,
y = (0.2 * 10 + 0.1 * 10) / 10;
console.log(y); // now it returns 0.3;

// if you add a string and number type variable, string will be prioritize

x = `10` + 20;
console.log(x, typeof x);

// a common mistake people make is, concatination a raw string at the beginning of the concatination and then add two numbers,

y = "The result is :" + 500 + 1000;
// if you are expection the result to be 1500, you are mistaken
console.log(y); // outputs 500100
// to fix this you have to use the following syntax
x = 500 + 1000 + " <-- this is the actual result";
console.log(x);

// or we could try
x = "The result is :" + (500 + 1000);
console.log(x);
// when you put parentheses, it works

// in case of numaric strings js behaves differently, for example
// you can have two string variable with numaric values and they will calculate like normal numbers. JS automatically converts that numaric string into a number and calculates.
x = "5";
y = 2;
console.log(x * y);
// So the main thing to note here is, JS only have diffrent rule for + symbol, other than that if you are using - / or * symbol, JS will treat both x and y as numeric operation

// Lets talk about NaN - not a number
// NaN is javascript reserved word indicating that a number is not a valid or leagal number
// for example trying to do arithmetic with non-arithmatic string will result in NaN

x = "apple";
y = 100;
console.log(x / y);

// isNaN is a function that can check if a variable is number or not.
// Now you need to note that if the variable is infact a number, the function will return false, otherwise it will return true.
// becasue the function is asking, is it not a number? if not a number then yes it is not number otherwise, no its not a number
// lets see an example
console.log(isNaN(x));
console.log(isNaN(y));
// you can even check if an operation of the variables is number or not
console.log(isNaN(x / y));

// If one variables value is NaNand you want to perform any peration with another variable, the output will be NaN as well
x = NaN;
y = "5";
console.log(x + y);

// The type of NaN is a number surprisingly
console.log(typeof NaN);

// Infinity is also a vlue
x = Infinity;
console.log(x);

// If you divide a number by zero it will result in Infinity
x = 0;
console.log(y / x);

// the type of infinity is an number
console.log(typeof Infinity);

// you can even write hexadecimal numbers. you need start your value with 0x, to make JS understand you are trying to save a hexa value
let hexaNum = 0x15c;
console.log(hexaNum);

// you can change the base of a number by using toString method.
// for example
x = 1500;

console.log(x.toString(10));
console.log(x.toString(32));
console.log(x.toString(16));
console.log(x.toString(8));
console.log(x.toString(2));

// a number can be defined as an object aswell
let objNum = new Number(456);
// its is best not to use this syntax as its slows down the execution speed
// the type of the objNum variable is now Object


