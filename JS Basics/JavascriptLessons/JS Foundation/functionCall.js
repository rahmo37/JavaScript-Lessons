// With the call() method you can write a method that can be used on different objects

// In JavaScript all functions are object methods.

// When a function is present inside an object, you can call the function a property of that object, and this inside that function referes to that object

const obj = {
  firstName: "Obaedur",
  lastName: "Rahman",
  fullName: function () {
    return `full name is ${this.firstName} ${this.lastName}`;
  },
};
console.log(obj.fullName()); // this is reffering to the obj

// but when a function is defined outside of any Object, this referes to the global window object

function sayHi() {
  return `Hi` + this;
}
console.log(sayHi()); // global in node environment and window in browser environment

// The call() method
// A predefined js method

// With call() an object can use a method which belongs to another method

// Lets create some objects

// Notice that the fullName function of the person object using this.firstName and this.lastName which doesn't even exist inside the person object
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Only person1 & 2 object has the fistName and the lastName object.
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// Callinf person.fullName is illogical since it does not even have the the firstName and lastName property.
// ! However if we want to use that fullName function in the context of person1 and person2 we can do that with the call() function.

// What actually will happen is the "this" inside the person object will change to the object we are calling / passing in the call() function, lets see how we would do that

// We start with the regular syntax, object.methodName then the syntax starts changing
// So the full syntax is object.methodName.call(object1);
console.log(person.fullName.call(person1));

//  So the fullName() method will now use the person1 in the context of this.firstName and this.lastName

// you can also send additional argument in to be used in the original object.

const animal = {
  printDescription: function (color1, color2) {
    return this.name + " " + color1 + " " + color2;
  },
};

const cat = {
  name: "Tom",
};

console.log(animal.printDescription.call(cat, "White", "Black"));
