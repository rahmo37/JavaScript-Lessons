// Dependencies
const { addProduct } = require("./Handlers/addProductHnadler");

// Module Scaffolding
const routes = {};

// Function to check the entered method and url
routes.checkMethodAndUrl = (requestProperties) => {
  const enterdPath = requestProperties.cleanedPath;
  const enterdMethod = requestProperties.method;
  if (enterdPath.toLowerCase() === "addproduct" && enterdMethod === "post") {
    return addProduct;
  } else if (
    enterdPath.toLowerCase() === "viewproduct" &&
    enterdMethod === "get"
  ) {
    return "viewProductHandler";
  } else if (
    enterdPath.toLowerCase() === "updateproduct" &&
    enterdMethod === "put"
  ) {
    return "updateProductHandler";
  } else if (
    enterdPath.toLowerCase() === "deleteproduct" &&
    enterdMethod === "delete"
  ) {
    return "deleteProductHandler";
  } else {
    return false;
  }
};

// Module Exports
module.exports = routes;
