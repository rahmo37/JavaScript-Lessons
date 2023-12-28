//! What is a constructor function?

// It is a special kind of function, that creates many objects with one blueprint, with one blueprint you can create object that can have same properties, with different values.

// Its an ifficient way to implement the dry concept (dont repeat yourself)

// When creating an object, we use the new keyword to invoke the corresponding constructor function

// defination from chatGpt

// "A constructor function in JavaScript is a specialized function designed to instantiate new objects based on a single blueprint. By using one constructor function, you can create multiple objects that share the same set of properties but hold different values. This approach adheres to the DRY (Don't Repeat Yourself) principle, making the code more maintainable and readable. Constructor functions are usually invoked using the new keyword, which creates a new object and sets its prototype to the constructor function's prototype."

// Convention: constructor function name starts with Capital letter

// Now lets see the syntax

function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.description = function () {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, EyeColor: ${this.eyeColor}`;
  };
}

// btw this referes to every object that will be created from this constructor function

const person1 = new Person("Obaeddur", "Rahman", 27, "Black");
const person2 = new Person("Zarin", "Rafa", 21, "Black");
console.log(person1.description(), " ", person2.description());

// You can add different preperties and function to any of the object if you want just like you would add in a regular object

person1.country = "Bangladesh";
console.log(person1);

// Remember you cannot a property from outside the constructor function, only from inside

// ! Note That Math() class is not a class where you can create new objects from, its a static class, that cannot have any object, nor you can use the new keyword

