// Variables can be declared in 3 ways in js let, var, and const.

// once you declare a value with let keyword you cannot redeclare that variable, though you can still assigne it with new value.
let sunSurfaceTemp_C_Let = 5500;
// On the other hand you can actually redeclare a variable with var keyword
var sunSurfaceTemp_C_Var = 5500;
var sunSurfaceTemp_C_Var = 1000;
// console.log(sunSurfaceTemp_C_Var);

// Another trait of let and const is, if a variable is declared inside a block it cannot be accessed outside of that block
{
  let x_let = 2;
}
// console.log(x_let);

// on the other hand var is not block scoped, if a variable is declared inside a block it can be accessed outside of that block. (Not function block though)
{
  var x_var = 5;
}
console.log(x_var);

// another trait of let is, say that a variable is declared outside of a block. and you want to declare another variable with the same name and change its value inside a block, and outside of that block its value would still stay the same, you could do it with let key word
let y_let = 5;

{
  let y_let = 10;
  console.log(y_let); //outputs 10
}

console.log(y_let); // outputs 5

// on the otherhand if you change a variable's value that has been declared with var keyword, and you declare a variable with the same name and change its value in a block it would still change the value of the global variable.
var y_var = 10;

{
  var y_var = 1;
  console.log(y_var); //outputs 1
}

console.log(y_var); //outputs 1

// Hoisting
// Hoisting in bangla means উত্তোলন or উপরে উঠানো
// now when a variable is declared with var, it can be assigned a value even before the value is declared, because behind the scene JavaScript hoists the declare statement to the top and assignes an undefined value. lets see an example
carMiles = 62500;
// car miles is not even declared yet but assigned a value
var carMiles;
// its defined just now.
// but now i can print the value, in other programming languages it is not allowd, but in JS we can achive this
console.log(carMiles);

// though we cannot achive this with let key word.
// carModel = "Hyundai";
let carModel;
// console.log(carModel);
// This is giving me an error.
// Now just like var the carModel keyword is also hoisted to the top but, it is not assigned a value of undefined like var keyword. thats why we cannot assign a value before declaring it.

// const means the value wont change
// also the value needs to be assigned when declared
const sunSurfaceTemp_C = 5500;
console.log(sunSurfaceTemp_C);

// const shoud be used with objects, arrays, function and RegExp

// Important note: you cannot reassign a array or object, BUT you can change their inner values, lets see an example

const person = {
  name: "Cillian Murphy",
  age: 62,
};

// now you cannot reassign this person variable with another object in it, will give you an error.
/*
 const person = {
  name: "Chirstopher Nolan",
  age: 55,
 };
 cannot do this
*/
// But you can certainly change the inner properties of the person variable

console.log(person.name);
person.name = "Chirstopher Nolan";
console.log(person.name); //changed :)

// const is also blocked scoped. lest see an example
const speedOfLight_Miles = 186282;
{
 const speedOfLight_Miles = 1;
 console.log(speedOfLight_Miles);
}
console.log(speedOfLight_Miles);
