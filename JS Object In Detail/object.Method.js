//! we already know, but an object can have method inside it
// lets see an eaxmple
let obj = {
  name: "John Doe",
  age: 23,
  description: function () {
    return this.name + " " + this.age;
  },
};

console.log(obj.description());

//! A very important note
// When we write the function property name without any () parentheses, it returns the function defination, but when we include the (), we actually make a call to the function.

// * the term function defination means the actual function body

// You can add an object method externally.

obj.someMethod = function () {
  console.log("I am some method");
};
obj.someMethod();

// ! one thing to note, In JavaScript, if a function doesn't explicitly return a value using the return statement, it will implicitly return undefined. This holds true for methods as well, which are simply functions attached to objects, thats why if a function does not retrun anything and you console log, and call the function, it returns undefined.
