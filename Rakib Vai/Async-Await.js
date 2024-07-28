const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let bool = false;
    if (bool) {
      resolve("P1 resolved");
    } else {
      reject("P1 rejected");
    }
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let bool = false;
    if (bool) {
      resolve("P2 resolved");
    } else {
      reject("P2 rejected");
    }
  }, 40000);
});

async function handlePromise() {
  console.log("Line 14");

  const response = await fetch("https://api.github.com/users/rahmo37");
  const data = await response.json();
  console.log(data);

  try {
    const valP1 = await p1;
    console.log("prints after p1 setteles!");
    console.log(valP1);
  } catch (err) {
    console.log(err);
  }

  try {
    const valP2 = await p2;
    console.log("prints after p2 setteles!");
    console.log(valP2);
  } catch (err) {
    console.log(err);
  }
}

console.log(handlePromise());

// const button = document.getElementById("testBtn");
// button.addEventListener("click", () => {
//   console.log("Hi");
// });
