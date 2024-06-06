const cart = [
  { item1: "T-Shirt", price: 40 },
  { item2: "Pant", price: 60 },
];

const createOrder = (cart, callback) => {
  let orderTotal = 0;
  cart.forEach((item) => {
    orderTotal += item.price;
  });
  if (orderTotal) {
    console.log("Order Created... Preceed To Payment...");
    callback("Payment Processed...");
  }
};

const proceedToPayment = (msg, callback) => {
  if (msg) {
    console.log(msg + "View Order Summary...");
    callback("Summary has been showen...");
  }
};

const viewOrderSummary = (msg, callback) => {
  if(msg) {
    console.log(msg + "Now view the wallet...");
    callback("Wallet has been showen...");
  }
}

const viewWallet = (msg) => {
  if(msg) {
    console.log(msg);
  }
}


createOrder(cart, function(msg) {
  proceedToPayment(msg, function(msg) {
    viewOrderSummary(msg, function(msg) {
      viewWallet(msg);
    })
  });
})