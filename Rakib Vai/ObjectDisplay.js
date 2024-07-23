// Individual property display

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name + " " + person.age + " " + person["city"]);

// Print with a loop
// You must use person[key] in the loop.

// person.key will not work (Because key is the loop variable).
let text = "";
for(let key in person) {
  text += key + " " + person[key] + " ";
}

console.log(text);

// create an array from object values
const myArray = Object.values(person);
console.log(myArray);

// JSON.strigify()
let myString = JSON.stringify(person);
console.log(myString);


