// You can change the css properties with Java script, you have to select the actual element with the getElementByID or querySelector first
// Then you can change it with the style property of the element
// I inserted the whole function into a setTimeout function to demonstraint that the html loads its content first and then it applies the Js
setTimeout(function () {
  const p = document.querySelector("#demo");
  p.style.color = "red";
  p.style.fontSize = "30px";
}, 2000);
// 2000 represent 2 sec

// Another Example with button event
let counter = 0;
let changeColor = function () {
  let p2 = document.getElementById("demo2");
  if (counter % 2 === 0) {
    p2.style.color = "orange";
    p2.style.fontSize = "50px";
  } else {
    p2.style.color = "black";
    p2.style.fontSize = "20px";
  }
  counter++;
};
