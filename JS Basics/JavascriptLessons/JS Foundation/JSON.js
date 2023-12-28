// !JSON is a format for storing and transporting data from one website to another or sending data from server to a webpase
// JSON statnds for JavaSricpt Object Notation

// JSON data can be used in any programming language
// JSON data stays in text format

// Since JSON format is syntactically identical to the code for creating a JS object, we can transform JSON data into an actual JS object

// JSON data has 4 syntax rules

/**
 * Data is on name/value pairs
 * Data is separated by commas
 * Curly braces hold objects
 * Square brackets hold arrays
 */

// An example of a name/value pair in JS
// "firstName": "Obaedur"
// every property/key/name has to inside a string

// JSON Objects are written inside curly braces.
// And just like a JS objects, a JSON object can contain multiple and nested name/value pairs

// {
//  "fname": "Obaedur",
//  "lname": "Rahman",
//  "skills": [
//   {"type": "prLanguage", "name": "Java"},
//   {"type": "prLanguage", "name": "JavaScript"},
//   {"type": "hobby", "name": "Singing"}
//  ]
// }

// JSon Arrays onm the other hand are written inside a square brackets

// "skills": [
//     {"type": "prLanguage", "name": "Java"},
//     {"type": "prLanguage", "name": "JavaScript"},
//     {"type": "hobby", "name": "Singing"}
//    ]

// * Converting a JSON text into a JS object
// A common use of JSON is to read data froma web server and display the data in a web page.
// First lets create a JS string which will contain the JSON data
let jsonData = `{
 "bestCricketPlayers": [
  {"name": "Sachin Tendulkar", "age": 50},
  {"name": "Brian Lara", "age": 54},
  {"name": "Shane Warne", "age": 52}
 ]
}`;

const jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

// Converting a JavaScript Object to a JSON object
// Lets say we have a JS object, called library
const library = {
  name: "Central Library",
  address: "123 Library Lane",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
  librarian: {
    firstName: "Alice",
    lastName: "Johnson",
    age: 34,
  },
};

// Now lets convert this JS object to a JSON string
const jsString = JSON.stringify(library);
console.log(jsString);

// These are very basic about JSON
