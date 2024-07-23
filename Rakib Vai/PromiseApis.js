let test = "";

const p1 = new Promise((resolve, reject) => {
  let condition = false;
  setTimeout(function () {
    if (condition) {
      test = "Hi";
      resolve("P1 was successful!");
    } else {
      reject("P1 failed!");
    }
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  let condition = false;
  setTimeout(function () {
    if (condition) {
      resolve("P2 was successful!");
    } else {
      reject("P2 failed!");
    }
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  let condition = false;
  setTimeout(function () {
    if (condition) {
      resolve("P3 was successful!");
    } else {
      reject("P3 failed!");
    }
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err.errors.forEach((eachErr) => {
      console.log(eachErr);
    });
  });

setTimeout(function () {
  console.log(test);
}, 5000);
