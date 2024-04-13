const fs = require("fs");
const path = require("path");

// Creating populationReader object which will hold other function in it
// Module Scaffolding
const populationReader = {};

// Creating the Path to read the Population of each Country CSV file. using the path.join function from path module to create the path
const filePath = path.join(__dirname, "Population of each Country CSV.csv");

// Adding a function called fetchPopulationData in the populationReader which returns a callback function, also uses the readFile function to read the "Population of each Country CSV" file, and returns the data in utf-8 format. Returns an error back pattern, with data. The data is then splitted in each new line, then each row is parsed with parseCsvLine() function.

// Finally if there are no error, we send null in the place of error and the parsedPolupationData is converted to JSON string and returned in the callback function.
populationReader.fetchPopulationData = (callback) => {
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      callback(err, { err: "There was an error while reading the data" });
    } else {
      let populationData = data.split("\n").map((row) => parseCsvLine(row));
      callback(null, JSON.stringify(populationData));
    }
  });
};

// This code is parsing the line so that population numbers are in an acceptable format to be converted in a JS object and JSON String.

// Example line: 2,China,"1,425,671,352"
function parseCsvLine(line) {
  const result = []; // Array where each element will be accumulated
  let current = ""; // This Variable is usaed to build each elements, and then push it in the result array
  let inQuotes = false; // This varuiable is used to determine if the element is inside the quote or not. since the population number is inside the quotes.

  // This for loop, loops through each character of a line, and then each character is saved in the char variable.
  for (let char of line) {
    if (char === "," && inQuotes) {
      // If the current character is a ',' and the inQuotes is true meaning the comma is inside the quotes.
      continue;
    } else if (char === '"' && inQuotes) {
      // If the current character is a ' " ' and the inQuotes is true this means the current quote, is the end of the previous quote that made the inQuote variable true. Now we simply change it to false
      inQuotes = false;
    } else if (char === '"' && !inQuotes) {
      // else if  If the current character is a ' " ' and the inQuotes is false that means this is the first quote and we change inQuotes to true.
      inQuotes = true;
    } else if (char === "," && !inQuotes) {
      // else if  If the current character is a ' , ' but not inside a ", that means this an end of an element so we push it in our result array, and make the current back to ""
      result.push(current);
      current = "";
    } else {
      // For any other characters we simply accumulate them in the current variable
      current += char;
    }
  }

  result.push(current); // Finally we push the current element if not added already
  return result.map((field) => field.trim()); // We return the result array by trimming all the white spaces from the elements if there are any
}

// finally we export the complete object
module.exports = populationReader;
