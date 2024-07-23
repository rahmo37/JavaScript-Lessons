let cart = ["Shirt", "Pant", "Shoe"];

// Producer end

// ! create order function
function createOrder(cart) {
  // 1st job: Validate the cart
  // 2nd job: create the order and save it in the database
  // 3rd job: After successful order creation it will return an orderId
  // Err: if anything goes wrong the function will return an error
  const promiseInstace = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!validateCart(cart)) {
        const err1 = new Error("Invalid cart!");
        reject(err1);
      } else {
        let orderId = returnOrderId(cart);
        if (orderId) {
          resolve(orderId);
        } else {
          const err2 = new Error("Unable to create the order!");
          reject(err2);
        }
      }
    }, 0);
  });

  return promiseInstace;
}

function proceedToPayment(orderId) {
  // 1st job: validate the orderId
  // 2nd job: process to payment
  // 3rd job: return confirmation message
  // Err: send and error if anything goes wrong
  const promiseInstace = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let validId =
        typeof orderId === "number" && orderId > 0 ? orderId : false;
      if (validId) {
        if (processPayment) {
          resolve("Payment Processed...!");
        } else {
          const err2 = new Error("Unable to process the payment!");
          reject(err2);
        }
      } else {
        const err1 = new Error("Invalid id!");
        reject(err1);
      }
    }, 0);
  });
  return promiseInstace;
}

// Consumer end
let orderPromise = createOrder(cart);

orderPromise
  .then(function (orderId) {
    console.log("The order id is " + orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
    return 1
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (confirmationMsg) {
    console.log(confirmationMsg);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("I will always run!");
  });

// Helper function
function validateCart(cart) {
  if (cart.length != 0) {
    return true;
  } else {
    return false;
  }
}

function returnOrderId(cart) {
  // creates an order
  // saves the order in the database
  let orderId = 12345;
  if (orderId) {
    return orderId;
  } else {
    return 0;
  }
}

function processPayment(orderId) {
  if (orderId) {
    return true;
  } else {
    return false;
  }
}
