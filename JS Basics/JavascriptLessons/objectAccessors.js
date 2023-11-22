// From ES5 Getter Setter has been added.
// In JavaScript, getters and setters allows you to control the access and modification of object properties. They let you add additional logic around getting and setting values, making it more than just a simple data storage operation.

// JS Getter / The get keyword
// In JavaScript, you can define getters directly within object literals using get keyword

const circle = {
  _radius: 5, // convention to indicate it's intended as a "private" property

  get diameter() {
    return this._radius * 2;
  },
  get area() {
    return Math.PI * this._radius * this._radius;
  },
};
// Lets say the _radius property is not writable
Object.defineProperty(circle, "_radius", { writable: false });
circle._radius = 10; // Did not chnage the property

// but using the get keyword we can access completely a different property(diameter / area) but still use our private _radius property inside the diameter and area properties and get a result based on the _radius property

console.log(circle.area, circle.diameter);

// JS setter / The set keyword
// Setter sets a value of a property, based on a passed in value
// you can even set the value based on a condition
// for example

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set setLanguage(language) {
    if (language !== "Bangla") {
      console.log("Not a valid language");
    } else {
      this.language = language;
    }
  },
};

person.setLanguage = "Bangla";
console.log(person.language);
// The language will only be set if the language is bangla

// JS function or getter? if we can use function why getter
// lets see two eaxmple

const obj1 = {
  firstName: "Obaedur",
  lastName: "Rahman",
  get getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(obj1.getFullName);

const obj2 = {
  firstName: "Zarin",
  lastName: "Rafa",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(obj2.getFullName());

// Syntax: Access looks like regular property access, so it’s less verbose and feels more like reading a property than calling a function.
// Encapsulation: You can control the internal representation of an object and expose only high-level properties.
// Computed Properties: Getters are great for properties that are derived from other properties. They are recalculated only when you access them, making them potentially more efficient for costly computations.
// Read-Only: If you define a getter without a corresponding setter, you can create read-only properties.
// Consistency: It allows you to expose a property that is internally a computed value as though it is a simple field/attribute.

// You can define the get function later just like function or properties. We just have to use the Object.defineProperty method
// Lets see an example

const obj3 = {
  firstName: "Umme",
  lastName: "Roushan",
};
Object.defineProperty(obj3, "fullName", {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
});
console.log(obj3.fullName);
