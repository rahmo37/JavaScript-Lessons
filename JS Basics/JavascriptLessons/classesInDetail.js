// JavaScript classes are templates for JavaScript Objects

// Use the "class" keyword to create a class.
// Then you always add a method named constructor().

// Syntax
// class ClassName {
//   constructor() {}
// }

// Lets create a class
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const Audi = new Car("Audi", 2023);

// Once you have created an instance of that Class, that instance becomes a JS object and you can even add other properties to without using the class syntax
Audi.model = "x5";
console.log(Audi);

// Constructor Method
// the name of the constructor has to be same as the text constructor
// It is executed automatically when a new object is created
// It is used to initialize object property
// Also if you do not include a constructor method JS will automatically create an empty constructor

// Methods
// You can simply add methods in a class, just type the method name and inside the curly braces add you code that you want to run

// You can even pass parameters in the method

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  description(nameDescription, ageDescription) {
    return nameDescription + this.name + ageDescription + this.age;
  }
}

const person1 = new Person("Obaedur Rahman ", 27);
console.log(
  person1.description(
    "The name of this person is ",
    "The age of this person is "
  )
);
