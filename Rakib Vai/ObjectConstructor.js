function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

let person1 = new Person("Obaedur", "Rahman", 28, "Black");
let person2 = new Person("John", "Doe", 28, "Black");

Person.prototype.fullname = function () {
  return this.firstName + " " + this.lastName;
};

person1.fullname = 30;

console.log(person1.fullname);
