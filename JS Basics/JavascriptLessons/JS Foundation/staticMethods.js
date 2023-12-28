// Static class methods are defined on the class itself
// You cannot call a static method on an object, only on an object class
// Static method are a property of a class only, they cannot be called by any instace of that class.

class Car {
  constructor(name) {
    this.name = name;
  }
  // We just add a static keyword infrot of the hello method
  // x.name means we can pass an object as its parameter and .name will call the name property of that object that has been passed in
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Ford");

// first of all we cannot call the hello method on myCar object
// console.dir(myCar.hello()); // this will give you an error

// But then we can pass the myCar object in the hello method to utilize the myCar objects property inside a ctatic method
