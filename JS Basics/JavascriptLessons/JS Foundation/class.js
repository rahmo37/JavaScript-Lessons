//! JS classes are templates/bluprints for JS objects.

// to define a class we use the class keyword followed by the calssName

// Lets see the syntax
class Person {}

//* Constructor function. Most of the classes usually have the constructor function
// What is constructor function?
// Constructor function is a special kind of function it is used to create and initialize objects of the class it is defined in
// The constructor function is used to initialize the object's properties or member variables.
// IN other words, when an object is created, the constructor sets the initial values for that object's properties based on the parameters passed

// lets see an example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
// we use the this constructor to , which will refere to each object that will be created using the class constructor, so lets say you create three cars. when you create a toyota, the this keyword will refere to the toyota object's name and year, again when you create a honda, the this keyword will refere to the honda object's name and year and so on

// The benifit or class, you can create any number of car object as you want, let create three car objects

const car1 = new Car("Honda", "2021");
const car2 = new Car("Toyota", "2020");
const car3 = new Car("Suburu", "2023");

console.log(car1, car2, car3);

// you can create method inside a class, a method is same as a JS function, but it will be a property of each object that will be created from that class, lets see an example

class cricketPlayer {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  description(team) {
    console.log(`${team}: Now playing ${this.name} he is a(n) ${this.type}`);
  }
}

const player1 = new cricketPlayer("Shakib", "All Rounder");
const player2 = new cricketPlayer("Tamim", "Batter");
const player3 = new cricketPlayer("Mushfiq", "Batsman/Wicket Keeper");


// you pass arguments in a method as well
player1.description("Bangladesh");
player2.description("Bangladesh");
player3.description("Bangladesh");
