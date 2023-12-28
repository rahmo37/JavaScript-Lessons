// Inheritance is the process how one class inherits properties and methods from other (More generic class), such as Animal --> Cat, Dog, Tiger

// To create a class inheritance we use the extends keyword

// A Class created with a class inheritance, inherits all the methods from another class

// lets create a Car (Parent) and Model (Child) Class and make model inherit properties from Car

// In this car class i have a special method called constructor, which is used to instantiate variables, users can pass arguments and they will used to instantiate variables
// Has method that returns a template string

class Car {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return `I have a ${this.carName}`;
  }
}

// Now this class here which is model exdends car, meaning it will have access to all the properties and methods of class car

// Uses super keyword to pass parameter brand to its parent class so car class can instantiate the carName variable with the parameter brand

// in show method first we are calling the present method (Since model has access to all the properties and method of its parent class)

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + ", it's model is " + this.model;
  }
}

const Audi = new Model("Audi", "R8");
console.log(Audi.carName);
console.log(Audi.show());

// lets dig deeper of super() method. Super() method refers to the parent class

// By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent properties and methods

// Getter and Setter

// Classes also allows you to use getter and setters.

// Getters and Setters are very useful, espesially if you want to do something special with the values before returning them, or before you set them.

// We just use get and set keywords, just like we used in JS objects.

// Let us see an example

class Animal {
  constructor(_name) {
    this._name = _name;
  }
  get name() {
    return this._name;
  }
  set name(_name) {
    this._name = _name;
  }
}

// ! Now a very important thing to note here, In JavaScript, getter and setter methods are not invoked like regular methods. They are syntactic sugar that allows you to access properties as if they were regular properties, not methods. You don't call it like a regular method animal1.name("Lion");. Instead, you assign a value to it as if it were a regular property

const animal1 = new Animal("Tiger");
console.log(animal1.name);
animal1.name = "Lion";
console.log(animal1.name);


// Many programmer use an underscore(_) value to seperate the property name from the getter and setter name, as i'ved used in the top.