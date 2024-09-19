//! JavaScript is called a prototype powered language

// Previously we learned about object constructor,

function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

const myFather = new Person("Obeadur", "Rahman", 50, "black");

// We also learned about the factrory function lets see a quick example.

function createDog(name, breed) {
  return {
    name,
    breed,
    speak() {
      console.log("Whoof! I am " + this.name + ", the " + this.breed);
    },
  };
}

console.log(createDog.prototype);

const myDog = createDog("Rex", "Laborador");
myDog.speak();

//! Now notice with both factory and constructor function we can create an object

//* But any function regardless if it creates an object or just completes a task, it has a prototype property.

// This prototype property is an object, which has only one property at this stage which is constructor property

console.dir(myDog.prototype);

// And this constructor property points back to the function itself

console.log(Person.prototype.constructor === Person); // true

// This prototype property also has a prototypal linkage to Object.prototype

// What the heck is a prototypal linkage?

// Prototypal linkage is the relationship between an object and it's prototype, allowing the object to inherit properties and methods from the prototype. In JavaScript, this linkage is often represented internally by the [[Prototype]] property.

// Reffering to this line from the defination,"Prototypal linkage is the relationship between an object and its prototype" Person.prototype is the object in this case, and Object.prototype is the prototype of Person.prototype.
console.dir(Object.getPrototypeOf(Person.prototype));

// BTW with .getPrototypeOf you can get the prototype of an object
// Also, both Object.getPrototypeOf(myObj) and myObj.__proto__ will generally return the same object: the prototype of myObj

// Now lets continue

// Erlier i said that Person.prototype has only one attribute which is a constructor property, but you can add functions and properties to Person.prototype object

Person.prototype.description = function () {
  return `This person's name is ${this.firstName} ${this.lastName}`;
};
Person.prototype.haircolor = "Black";
console.log(Person.prototype);

//! Now something to note here is that, if you assign a new object to the Person.prototype, its constructor property and the memory location will change, however you can still retain the constructor property, with constructor: person, property, lets see an example but it will be commented out.

// Person.prototype = {
//   constructor: Person,
//   description: function () {
//     return `This person's name is ${this.firstName} ${this.lastName}`;
//   },
//   haircolor: "Black",
// }; console.log(Person.prototype);

// * Now when we create new instances of the Person constructor, each instance's prototype will point to the Person.prototype object, meaning a prototypal linkage will be created between every instance of the Person object and Person.Prototype

const person1 = new Person("Obeadur", "Rahman", 27, "black");
const person2 = new Person("Zarin", "Rafa", 21, "black");
console.dir(Object.getPrototypeOf(person1));
console.dir(Object.getPrototypeOf(person2));

// What is the point of creating this prototypal linkage?

// Well now you have access to all the properties and the method that were present in Person.prototype. Each instance set the constructor function's prototype as their parent or we can say a repository where every instance can grab the properties and functions when they need to.

console.log(person1.haircolor);
console.log(person2.description());

// * Now Every object created with a literal syntax has Object.prototype as its(Object thats created with the literal syntax) prototype by default

const person3 = {};
console.dir(Object.getPrototypeOf(person3)); // Object

// but you can chnage it
Object.setPrototypeOf(person3, Person.prototype);
console.dir(Object.getPrototypeOf(person3));

// * When you create objects of Array or String (With Literal stntax or without) those instance's prototype will point to the corresponding constructor function(Array, String...etc).

let myArr = [];
console.dir(Object.getPrototypeOf(myArr)); // Array

let str = "John";
console.dir(Object.getPrototypeOf(str));

// Each of these instance's prototype linkage is created with their corseponding contructor function's prototype (Array prototype, String prototype)

//* An interesting fact is all the Array methods and String methods like forEach(), push(), shift() splice(), toUpperCase(), indexOf all coming from their corresponding prototype

// Now you can create an object an set its prototype directly with Object.create()
// In the first argument you provide which object do you want to set its prototype ase, and in the second argument you provide the properties with both value and descriptor, of the newly created object(second argument is optional).
// Note that in the value and descriptor both are required

const animal = {
  kind: "Bird",
  color: "Blue",
};

const bird = Object.create(animal, {
  name: {
    value: "doyel",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  canFly: {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(bird.kind);

// * you can declare static methods for a class and a constructor fucntion, we have a Person constructor function outside lets use that


Person.staticMethod = function () {
  console.log("I am Static method");
};

Person.staticMethod();

//static methods can also be added in ES6 classes using the static keyword.

// Note that static methods are not available on instances

// Method Overriding: It's possible to override inherited methods by defining a method with the same name directly on the object, thereby masking the inherited method.


const test = function() {

}

console.log(test.prototype);