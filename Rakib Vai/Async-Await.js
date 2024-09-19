const promise1 = new Promise((res, rej) => {
  setTimeout(function () {
    rej("Promise1 Rejected");
  }, 10000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(function () {
    res("Promise2 Resolved");
  }, 10000);
});

// function getData() {
//   promise.then((res) => {
//     console.log(res);
//   }); // Async
//   console.log("Hi"); // Sync
// }

async function handlePromise() {
  console.log("Test"); // Sync

  const res = await promise1;
  console.log(res); // Async
  console.log("Hi"); // Async

  console.log(err);

  const res2 = await promise2;
  console.log(res2);

  console.log("Test 2");
}

handlePromise().catch((err) => {
  console.log(err);
});

console.log("Hi again!");

const btn = document.getElementById("testBtn");

btn.addEventListener("click", function () {
  console.log("Test Test Test!");
});

