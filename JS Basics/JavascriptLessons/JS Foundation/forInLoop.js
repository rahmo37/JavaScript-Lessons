//! for in statement, loops through the properties of an Object
//Lets define an Object first
//* A small note about objects
// when you talk about the "property of an object," you're typically referring to the key (or property name). The term "key-value pair" denotes both the property and its associated value.
// also "key" and "property" (or "property name") are often used interchangeably. They refer to the identifier that allows you to access the associated value in the object
let person = {
  fname: "Obaedur",
  lname: "Rahman",
  age: 27,
};

// Now lets apply the for in loop in the object defined above
for (let x in person) {
  console.log(x);
}
// Notice that it is looping through the properties of the object only

// If we need to access the values we need to pass these properties in the object to retrieve its corresponding value

for (let x in person) {
  let value = person[x];
  // note that we cannot pass it like this, person.x
  console.log(value);
}

// * Now you can also loop through an array with for in loop, but it will only return the index, not the value.

// lets see an example
let numArr = [45, 78, 15, 46, 93];

for (let x in numArr) {
  console.log(x);
}

// To retrieve the values from am array we need to pass the index in the array from the for loop

for (let x in numArr) {
  let value = numArr[x];
  console.log(value);
}
// in conclusion, for in loop either retrieves the properties of an object or the indexes of an array
