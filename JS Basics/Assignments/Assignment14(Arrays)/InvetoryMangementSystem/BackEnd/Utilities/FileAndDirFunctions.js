// Dependencies
const fs = require("fs");
const path = require("path");

// Module scaffolding
const lib = {};

// Base directory of this file
lib.baseDir = path.join(__dirname, "../Products/");

// This function reads every file in the product directory
lib.readProductDirectory = (callback) => {
  // Using the readdir method of the fs module to read the product directory. Each file is returned and accumulated in the files parameter
  fs.readdir(lib.baseDir, (err, files) => {
    if (err) {
      return callback("Error reading directory: " + err, null);
    }

    // Filtering the original files to only keep the JSON files
    const productFiles = files.filter((file) => path.extname(file) === ".json");

    // All data will be compiled in this object
    let compiledData = {};

    // a variable for each file
    let filesProcessed = 0;

    // For each file
    productFiles.forEach((file) => {
      const filePath = path.join(lib.baseDir, file); // For each file we join the directory of the product file with the file name.

      // Here we start reading the file
      fs.readFile(filePath, "utf8", (err, fileData) => {
        // we increament the filesProcessed variable by one for each file
        filesProcessed++;

        if (!err) {
          try {
            // Only extracting the product id so that can be used as the key for the product key
            const productIdMatch = file.match(/product-(\w+)\.json/);

            // If successfully is extracted then we add that object with the productId as the key
            if (productIdMatch) {
              // The match method returns an array, and we are just extracting the id from it
              const productId = productIdMatch[1];

              // Creating object
              compiledData[productId] = JSON.parse(fileData);
            } else {
              console.error(
                `Filename ${file} does not match the expected pattern`
              );
            }
          } catch (parseErr) {
            console.error(`Error parsing file ${file}: `, parseErr);
          }
        } else {
          console.error(`Error reading file ${file}: `, err);
        }

        // finally Sending the compiledData once all files are processed
        if (filesProcessed === productFiles.length) {
          callback(null, compiledData);
        }
      });
    });

    // Handle case with no JSON files
    if (productFiles.length === 0) {
      callback(null, compiledData);
    }
  });
};

lib.createProduct = (file, data, callback) => {
  // First opening the file to start writing, with the correct flag
  fs.open(`${lib.baseDir}/${file}.json`, "wx", function (err, fileDescriptor) {
    if (!err && fileDescriptor) {
      const stringData = JSON.stringify(data);

      // Now we write the data
      fs.writeFile(fileDescriptor, stringData, function (err) {
        if (!err) {
          // Then we close the file
          fs.close(fileDescriptor, function (err) {
            if (!err) {
              callback(false);
            } else {
              callback("Error closing the file");
            }
          });
        } else {
          callback("Error writing to new file!");
        }
      });
    } else {
      callback(
        "Could not create file, Corrupted path or the file may already exitst"
      );
    }
  });
};
// Export
module.exports = lib;
