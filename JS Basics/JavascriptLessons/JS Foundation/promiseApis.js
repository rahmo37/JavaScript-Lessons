let test = "hi";

const p1 = new Promise((resolve, reject) => {
  let condition = false;
  setTimeout(function () {
    if (condition) {
      resolve("P1 Success");
    } else {
      reject("P1 Failed");
    }
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  let condition = false;
  setTimeout(function () {
    if (condition) {
      resolve("P2 Success");
    } else {
      reject("P2 Failed");
    }
  }, 1000);
});

// Remeber first SETTELED promise
const p3 = new Promise((resolve, reject) => {
  let condition = false;
  setTimeout(function () {
    if (condition) {
      resolve("P3 Success");
      test = "hello";
    } else {
      reject("P3 Failed");
    }
  }, 0);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
    res.forEach((element) => {
      console.log(element);
    });
  })
  // .catch((msg) => {
  //   console.log(msg);
  // });

// setTimeout(function () {
//   console.log(test);
// }, 5000);

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//     res.forEach((element) => {
//       if (element.status === "fulfilled") {
//         console.log(element.value);
//       } else {
//         console.log(element.reason);
//       }
//     });
//   })
//   .catch((msg) => {
//     console.error(msg);
//   });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err)
//   });

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
