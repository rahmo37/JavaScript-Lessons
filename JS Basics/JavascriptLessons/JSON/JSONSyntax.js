// The JSON syntax is a subset of the JavaScript syntax

// JSON syntax is derived from JavaScript object notation syntax:

// * Some similarities are,
// Data is in name/value pairs
// Individual Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// * What are the difference than?
// The whole object needs to be surrounded by quoutes
// Now not only the Whole object but each properties needs to be sorrounded by quotes
// The quotes needs to be double quotes
// After each Comma and Colon an empty space needs to be present as well

// Example,
const JSON =
  '{"name": "Obaedur Rahman", "age": 38, "Skills": ["Java", "JavaScript"]}';

// A JSON Object can be evaluated into a JS object
// Redundant but worth mentioning that, JSON, keys must be written with double quotes
// On the otherhand, JS keys can be strings, numbers, or identifiers

// In JSON, Values must be one of the following data types:
// a String
// a number
// an object
// a boolean
// null

// In JS values can be all of the above, plus any other valid JS expression, including:
// a function
// a date
// undefined
// The reason the values are not accepted is beacuse they are platfomr specific
