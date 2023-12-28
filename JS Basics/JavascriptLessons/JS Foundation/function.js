// A function in JS is a block of code
// Each function has a name
// What does function do?
// A function is designed to perform a particular task
// But it only works when it is invoked/called with its name
// Lets see an example
function carColor() {
  console.log("The color of my car is black");
}
// Inside this particular function called carColor, we are just printing the color of a car. but you can wrtie an code inside it

// now its time to call this function, that is when it is actally works

carColor();
console.log(carColor());

// now this function is kind of static or constant right? since it will always print the same exact thing no mattar how many times we call it
// but we can make it dynamic, which will make the function print any value we want
// we have to use something called a parameter and argument, inside the parentheses after the function name, we can provide a placeholder variable called a parameter
// and when we are calling the function we can provide our desired value which is called the argument
// now the argument (the value we passed in when we called the function) will be placed in the placeholder variable also called a parameter. and with that parameter (which has you passed in value), you can manipulate it any way you want
// for example

// parameter name can be anythig you want. (a meaningful name is recommeded)
function carColorDynamic(color) {
  // so we just used the color parameter as regular variable but it will hold the passed in value, included with the function call.
  console.log("The color of my car is", color);
}

// lets call the function and include an argument
carColorDynamic("Green");

// you can pass multiple parameters and use them inside you function
// an important note: the parameter variables are only accissible to than function scope only

// Now read the first defination again, it says A function is designed to perform a particular task, but in addition to performing a specific task a function can also return something aswell (a value, an array, an object etc) lets see an example

function addTwoNumbers(num1, num2) {
  //a particular task
  let sum = num1 + num2;
  console.log("The sum is :", sum);
  // now the return part
  return sum;
}

console.log(addTwoNumbers(5, 6));
// now how does a function returning something is useful?
// its useful because we can save the returned value in a seperate variable and use that value elsewere in our code, for example
let result = addTwoNumbers(50, 60);
console.log(result);

// Important Note: after the return statement nothing is executed in the the function body, so if there are lines of code after the return statement they wont be executed

// BTW if you forget to include the parentesese when calling a function it will directly return the whole function body, with no calculation or task completed, for example,

let body = addTwoNumbers;
// console.log(body);

// function can be used same as a variable, for example,
let text = "The total of two number is: " + addTwoNumbers(150, 60);
console.log(text);
