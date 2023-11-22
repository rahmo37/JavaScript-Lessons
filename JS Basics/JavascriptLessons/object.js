// What is Object?
// Think of an object as a regular day to day object
// Lets say a car. What individual properties can you think a car might have?
// Color, Doors, Wheels, Engine, Headlight, Battary etc right?
// An object in JS is same, A complete object is made out of many properties combined.
// Lets see an example
// You should declare the objects with const
const car = {
  Brand: "Toyota",
  Model: "Corola",
  Color: "Black",
  Year: "2005",
};

// you can add more properties of car object if you want

// though a complete object is defined at the to you can still add properties to it afterward
car["Wheel"] = 4;
console.log(car.Wheel);

// you can add function to an object as well
car.start = function () {
  console.log("car starting!");
};

car.start();

// One note: why do we declare const when defining objects?
// because we dont want to declare another object with same name

// accessing object property
// you can either access an object property with dot notation or bracket notation
// Dot notation
console.log(car.Brand);

// Bracket notation
console.log(car["Model"]);

// the this keyword is used when we need to refere the same property inside an Object function. using the this keyword we can use the same property inside object function, for example

// Was not able to use the this keyword to refere to one of its own property and save it as a value in another porperty of the same object.
// what i meant is, description: this.firstName, in this case this is refereing to the global object window hence retrunning undefined
const person = {
  firstName: "Obaedur",
  lastName: "Rahman",
  age: 27,
  certificate: "Assocciate degree so far",
  description: function () {
    return (
      this.firstName + " " + this.lastName + " Achived " + this.certificate
    );
  },
};
console.log(person.description());

// one thing i just figured out you can call a object method with bracket notation, for example,
console.log(person["description"]());

// An important thing to note
// When we declare variables such as number, string, boolean with new key we are creating an actual object, for example
let var1 = new String("String");
let var2 = new Number(5);
let var3 = new Boolean(true);
// You may think they are their coresponding types, but the are not.
// Check with typeof operator
console.log(typeof var1, typeof var2, typeof var3);
// So avoid declaring these variables with new
