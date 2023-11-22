// To performe mathmatical task on numbers we use the Math Object
// The Math Object is static and you cannot create and instance of math object
// That means all methods and properties can be used without creating a Math object

// To get the PI value we use the Math.PI
console.log(Math.PI);

// To get the Eular number value we use the Math.E
console.log(Math.E);

// To get the suare root of two we use,
console.log(Math.SQRT2);

// To get the suare root of 1/2 we use,
console.log(Math.SQRT1_2);

// To get the natural logarithm of 2 we use
console.log(Math.LN2);

// To get the natural logarithm of 10 we use
console.log(Math.LN10);

// To get the base 2 logarithm of E we use
console.log(Math.LOG2E);

// To get the base 10 logarithm of E we use
console.log(Math.LOG10E);

// Math methods

// Math.round() method rounds a number to its nearest integer
// for example
console.log(Math.round(16.4)); //returns 16
// but 16.5 returns 17
console.log(Math.round(16.5)); // returns 17
// so after .4 it rounds downwards
console.log(Math.round(-16.5)); // returns -16

// Math.celi() method always rounds upwards
console.log(Math.ceil(4.9)); // returns 5

console.log(Math.ceil(4.1)); // retruns 5

console.log(Math.ceil(4.5)); // returns 5

console.log(Math.ceil(-4.9)); // retruns -4
// because -4 is bigger than -4.9

// Similarly Math.floor rounds down
console.log(Math.floor(4.9)); // Ootputs 4

console.log(Math.floor(4.7)); // Ootputs 4

console.log(Math.floor(4.4)); // Ootputs 4

console.log(Math.floor(4.2)); // Ootputs 4

console.log(Math.floor(-4.2)); // Ootputs -5

// Math.trunc just retruns the integer part, no rounding down or up
console.log(Math.trunc(4.1)); //Outputs 4

console.log(Math.trunc(4.9)); //Outputs 4

console.log(Math.trunc(-4.1)); //Outputs 4

console.log(Math.trunc(-4.9)); //Outputs 4

// Math.sign() returns if a value is negetive, posetive or 0, so it will always return 1 , 0 or -1

console.log(-569); // outputs -1
console.log(0); // outputs 0
console.log(769); // outputs  1

// Math.pow() retruns the the value of first parameter (x), to the power of second parameter (y)

console.log(Math.pow(8, 2)); // or 8^2 outputs 64

// Math.sqrt() returns the square roots the given number,
console.log(Math.sqrt(64)); // outputs 8

// Math.abs returns the absolute value of a number
console.log(Math.abs(-456)); // outputs 456

// Math.min returns the lowest number in a series of number
console.log(Math.min(50, 25, 60, 78, 12)); // outputs 12

// Math.max returns the hights number in a series of number, you can pass an array with the spread operator
let numArr = [5, 10, 2, 100, 56, 143, 89];
console.log(Math.max(...numArr));

// Math.log() returns the natural logarithm of the number given
// Means how many times we must multiply Math.E to get 100
console.log(Math.log(100));

// Lets prove it
console.log(Math.pow(Math.E, Math.log(100))); //outputs 100

// Math.log2 works the same way, the base is now changed from E to 2
console.log(Math.log2(8));
//returns 3

// This says that if you multiply 2 it-self 3 time it returns 8
// lets prove this
console.log(2 ** Math.log2(8)); // returns 8

// Same with Math.log10()

// The fractional part of a number is called the mantissa
// Math.random() returns a number between 0 - 1, 0 is inclusive and 1 is exclusive. 0 is always returned with its mantissa part

console.log("printing 5 random numbers: ");
for (let i = 0; i < 5; i++) {
  console.log(Math.random());
}

// Now there is no built-in way of building random integer in JS, but we can create a function where we make our random method to generate random integers
// We are going to take help of Math.floor() and a self defined function
// Recall the Math.floor method rounds down
function randomeIntegers(exclusiveRange) {
  let randInt = Math.floor(Math.random() * exclusiveRange);
  return randInt;
}
// exclusiveRange is range where we want our value to be between
// Remember the value you pass in exclusiveRange is exclusive
for (let i = 0; i < 5; i++) {
  console.log(randomeIntegers(9), "Random Integer");
}

// if you want to exclude 0 from your range and include the number you pass, just add one to you result, an example give below:
console.log(Math.floor(Math.random() * 10) + 1);

// You can create another function that can give you a proper random integer, and you can pass a min and max value, and both the value will be always included

function getRndInteger(min, max) {
  let num = Math.random();
  return Math.floor(num * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  console.log(getRndInteger(1, 6));
}
