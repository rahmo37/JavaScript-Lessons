const fs = require("fs");
const path = require("path");

// Module Scaffolding
const populationReader = {};

const filePath = path.join(__dirname, "Population of each Country CSV.csv");

populationReader.fetchPopulationData = (callback) => {
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      callback(err, { err: "There was an error while reading the data" });
    } else {
      let populationData = data.split("\n").map((row) => parseCsvLine(row));
      console.log(populationData[0]);
      callback(null, JSON.stringify(populationData));
    }
  });
};

// Understand This Code First
function parseCsvLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let char of line) {
    if (char === "," && inQuotes) {
      continue;
    } else if (char === '"' && inQuotes) {
      inQuotes = false;
    } else if (char === '"' && !inQuotes) {
      inQuotes = true;
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current);
  return result.map((field) => field.trim());
}

module.exports = populationReader;
