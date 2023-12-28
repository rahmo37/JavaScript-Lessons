// A common use of JSON is to exchange data to/from a web server.
// When sending data to a web server that data has to be a string
// And we convert a JavaScript object into a string with JSON.stringify() method.

// Lets say that we have an object in JS

const person = { name: "Obaedur Rahman", age: 27, city: "Deer Park" };

// Now we use the JSON.stringify to convert this opbject into a JSON string

console.log(JSON.stringify(person), person);

// You can event convert and array to a JSON string
const nameArr = ["Obaedur", "Jonson", "Zarin", "Dylin"];
console.log(JSON.stringify(nameArr), nameArr);


// When we are storing data in localStorage we use the JSON.stringify() method to convert it into a string and save it into the localStorage, on the other hand we can use the JSON.parse() method to parse the data back to a JS Object in from the localStorage.
