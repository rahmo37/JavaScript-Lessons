// ARITHMATIC OPERATOR
// + addition operator
// = assignment operator
// - Substraction Operator
// * Multiplication Operator
// / Division Operator
// % Modulus Operator. returns the remainder, for example,
let x = 5,
  y = 11;
console.log(y % x); // outputs 1
// ** exponent operator
console.log(y ** x);
// ++ increment
// -- decrement
// +=, x += y is same as x = x + y
// -=, x -= y is same as x = x - y
// *=, x *= y is same as x = x * y
// /=, x /= y is same as x = x / y
// %=, x %= y is same as x = x % y
// **=, x **=y is same as x = x ** y

// the + operator can also be used to add strings together
let text1 = "ki";
let text2 = "khobor";
let text3 = text1 + " " + text2;
console.log(text3);

// you can also do this
console.log((text1 += " Koro"));

// Important note: adding a number and a string will return a string with the number added
// for example
let z = "Give me " + 5;
console.log(z);

// also if the string is a number and you adding it to a number this will also give you a string,
let a = "5" + 5;
console.log("This is a", typeof a, a);

// COMPARISON OPERATOR
// ==, wheather a equals to b or not
// ===, wheather the type and the value of a are equal to b or not
// !=, wheather a is not equal to b, or not
// !==, wheather the type or value of a are not equal to b or not
// > wheather a is greater than b or not
// < wheather a is less than b or not
// >= wheather a is greater than or equal to b or not
// <= wheather a is less than or equal to b or not
// ? ternary oprator

//! Some General rules of Loose equality and Strict Equality

// String and Number: If first operand is a number and the other is a string, the string is typically converted to a number. For example, 5 == '5' would convert the string '5' to the number 5.

// Boolean Comparisons: If one operand is a boolean, JavaScript converts the boolean to a number (true to 1 and false to 0) before making the comparison.

// Object Comparisons: If one operand is an object and the other is not, JavaScript calls the toString() or valueOf() method on the object to convert it to a primitive value, which is then compared as per the above rules.

// Null and Undefined: null and undefined are equal to each other but not to anything else.

// Other Falsy Values: JavaScript has other "falsy" values like 0, "" (empty string), NaN, null, and undefined. When compared with the loose equality operator, conversions are based on the rules above, and results can sometimes be non-intuitive.

// So, in summary, whether a number is converted to a string or a string is converted to a number when using the == operator depends on the specific values being compared and their types. This type coercion is why many developers prefer to use the strict equality operator ===, which does not perform type conversion and only returns true if both the value and the type of the operands are the same.

// LOGICAL OPERATOR
// &&, wheather a and b
// ||, wheather a or b
// !, logical not

// TYPE OPERATOR
// typeof returns the type of a variable
// instanceof retruns true if an object is an instance of an object type

// One Important Thing is JS evaluates expression from left to right. So generally different sequenses can produce different results. for example,
// in this case the 16 and 8 will be added first and the the result will be concatinated with the number 24
let e = 16 + 8 + "pokemon";
console.log(e);
// on the other hand if the order was different, the result would be different
e = "pokemon" + 16 + 4;
console.log(e);
// now the word pokemon and the number 16 is concatinated first, so generally the result became a string and then the result is added to the number 4.
