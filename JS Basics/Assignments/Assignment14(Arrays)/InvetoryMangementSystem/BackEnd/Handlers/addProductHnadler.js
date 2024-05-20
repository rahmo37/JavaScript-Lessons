// Dependencies

// Module Scaffolding
const handler = {};

// Module Funtions
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
  if (productName.length >= 3 && productName.length <= 50) {
    // !Here we will check if the productName is unique or not
    callback(true, null);
  } else {
    callback(false, {
      error: "Invalid product name!",
    });
  }
};

handler.addProduct = (requestProperties, callback) => {
  handler.validate(requestProperties, (isValid, err) => {
    if (isValid && !err) {
      // !Here we will add the product...
      callback(200, {
        message: "Product added successfully!",
      });
    } else {
      callback(400, err);
    }
  });
};

// Export
module.exports = handler;
