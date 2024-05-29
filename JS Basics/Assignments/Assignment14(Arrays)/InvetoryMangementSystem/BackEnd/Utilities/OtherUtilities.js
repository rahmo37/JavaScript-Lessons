// Dependecies
const crypto = require("crypto");

// Module Scaffolding
const utilities = {};

// Module functions

// 1 Cleans up unwanted slashes
utilities.trimmedPath = (originalPath) => {
  return originalPath.replace(/^\/+|\/+$/g, "");
};

// 2 Parses a json string to object
utilities.jsonToJsObject = function (jsonString) {
  let output;
  try {
    output = JSON.parse(jsonString);
  } catch {
    // If the data sent is not a JSON string, meaning there was an error while parsing we sent an empty object
    output = {};
  }
  return output;
};

utilities.createProductId = function (idLength) {
  let length = typeof idLength === "number" && idLength >= 5 ? idLength : false;

  if (length) {
    return crypto.randomBytes(length).toString("hex");
  } else {
    return false;
  }
};

// Export
module.exports = utilities;
