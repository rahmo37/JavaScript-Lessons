const paymentSuccess = true;
const marks = 80;

function enroll() {
  console.log("Course enrollment in progrss");

  // Declaring a promise instance, instantiating it with Promis constructor, if payment is successfull then the resolve is sent, if not reject is sent with 'payment failed' as a string value
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed!");
      }
    }, 2000);
  });

  // finally we are returning that promise instance
  return promise;
}

function progress() {
  console.log("Course on progress...");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the cirtificate!");
      }
    }, 3000);
  });
  return promise;
}

function getCirtificate() {
  console.log("Prepareing you cirtificate!");

  // No condition is needed since we are just printing a congrats msg, no reject is needed as well since there are no condition that might be false.
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! You got the certificate!");
    }, 1000);
  });
  return promise;
}

// Why are we just providing the function body and not calling the progress or the getCirtificate function?

// * The .then() method expects a callback function to be passed as its argument. When we provide just the function name (like progress or getCirtificate), we're passing a reference to that function as the callback. If we were to invoke the function directly (like progress()), we would be passing the result of the function execution (which would be a promise) rather than the function itself.

// * By passing only the function reference, we allow the Promise infrastructure to call (or "execute") our function when it's ready. In our code, when the previous promise resolves, the next function in the chain (passed to .then()) gets invoked. Each of these functions (like progress and getCirtificate) return their own promises, which can be further chained with more .then() methods or handled with .catch() for errors.

// * In summary, we provide just the function reference and not the invocation so that the Promise chain can control when the function gets executed and can handle the promise it returns.

enroll()
  .then(progress)
  .then(getCirtificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
// So one catch is catching any errs that might occure inside the all of the then, and if one err occures then rest of the promise's then is not executed?

// * If a promise rejects at any point in the chain, it will skip all subsequent .then() handlers and go straight to the nearest .catch() handler. Even if the function that caused the rejection returns a promise, the fact that it rejected will cause the promise chain to jump to the .catch().
