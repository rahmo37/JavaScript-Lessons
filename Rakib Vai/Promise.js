function showSummary(msg) {
  if (msg === "done2") {
    console.log("end");
  }
}

function proceedToPayment(msg) {
  if (msg === "done1") {
    return new Promise((res, rej) => {
      res("done2");
    });
  }
}

function createOrder() {
  return new Promise((res, rej) => {
    res("done1");
  });
}

createOrder()
  .then(function (msg) {
    return proceedToPayment(msg);
  })
  .then(function (msg) {
    showSummary(msg);
  });
