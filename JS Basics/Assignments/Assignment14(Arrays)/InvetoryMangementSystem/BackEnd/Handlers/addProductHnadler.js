//! Dependencies
const {
  readProductDirectory,
  createProduct,
} = require("../Utilities/FileAndDirFunctions");
const { createProductId } = require("../Utilities/OtherUtilities");

//! Module Scaffolding
const handler = {};

//! Module Functions
handler.validate = (requestProperties, callback) => {
  if (
    requestProperties.cleanedPath.toLowerCase() === "addproduct" &&
    requestProperties.method === "post"
  ) {
    handler.checkName(requestProperties.data.productName, (isValid, err) => {
      if (isValid && !err) {
        // Now we start cehking for other errors
        // An Array that acumulates Errors
        let errorArray = [];

        // Check Description
        if (
          typeof requestProperties.data.description !== "string" ||
          requestProperties.data.description.length < 3 ||
          requestProperties.data.description.length > 150
        ) {
          errorArray.push(
            "Invalid Description! Description must be 3-150 characters"
          );
        }

        // Check Quantity
        if (
          typeof requestProperties.data.productQuantity !== "number" ||
          requestProperties.data.productQuantity.toString().length === 0 ||
          requestProperties.data.productQuantity % 1 !== 0
        ) {
          errorArray.push("Invalid Product Quantity!");
        }

        // Check Warrenty
        if (
          typeof requestProperties.data.warranty !== "number" ||
          requestProperties.data.warranty.toString().length === 0 ||
          requestProperties.data.warranty % 1 !== 0
        ) {
          errorArray.push("Invalid Product Warrenty!");
        }

        // Check Price
        if (
          typeof requestProperties.data.price !== "number" ||
          requestProperties.data.price.toString().length === 0
        ) {
          errorArray.push("Invalid Product Price!");
        }

        if (errorArray.length > 0) {
          let errorObject = {};
          // Each error is added with an index
          errorArray.forEach((element, index) => {
            errorObject["errors " + (index + 1)] = element;
          });
          callback(false, {
            error: errorObject,
          });
        } else {
          // No error ending true
          callback(true, null);
        }
      } else {
        callback(false, err);
      }
    });
  } else {
    callback(false, {
      error: "There is a problem in your path or the method you've chosen!",
    });
  }
};

handler.checkName = (productName, callback) => {
  // First we are checking if the length of the product name is with in 3 - 50
  if (productName.length >= 3 && productName.length <= 50) {
    // Then we get all the data from each product file in our product directory
    readProductDirectory((err, productData) => {
      if (!err) {
        // If no error, then we start checking if there are any exsisting product with the same name
        let doesExists = false;

        // Data is collected in a large outer object, containing smaller objects within it, each representing a product.

        // We use the Object.keys method to obtain an array of keys for each product. Then, we use the forEach method to iterate through each key and access the corresponding data (product name in perticular) in the product object.
        Object.keys(productData).forEach((key) => {
          // then we check if the given product name equals to the product name of each product. If there is a match, we make doesExists true and send an error message
          if (productName === productData[key].productName) {
            doesExists = true;
          }
        });
        if (doesExists) {
          callback(false, {
            error: "Product already exists!",
          });
        } else {
          callback(true, null);
        }
      } else {
        callback(false, {
          error: "Error Verifying the product name!",
        });
      }
    });
  } else {
    callback(false, {
      error: "Invalid product name!",
    });
  }
};

handler.addProduct = (requestProperties, callback) => {
  handler.validate(requestProperties, (isValid, err) => {
    if (isValid && !err) {
      // Lets first accumulate the product details in an object
      let productId = "product-" + createProductId(5);
      let description = requestProperties.data.description;
      let productName = requestProperties.data.productName;
      let productQuantity = requestProperties.data.productQuantity;
      let warranty = requestProperties.data.warranty;
      let price = requestProperties.data.price
      let newProduct = {
        productId,
        description,
        productName,
        productQuantity,
        warranty,
        price,
      };

      createProduct(productId, newProduct, (err) => {
        if (!err) {
          callback(200, {
            message: "Product added successfully!",
          });
        } else {
          callback(500, {
            error: "Operation failed!",
          });
        }
      });
    } else {
      callback(400, err);
    }
  });
};

//! Export
module.exports = handler;
