const button = document.getElementById("myButton");
const addButton = document.getElementById("add");

// you can avoid adding the the onclick event on html or in javascript and add an event listener in the JavaScript code to trigger an event. In that case you dont have to rely on HTML file.
button.addEventListener("click", function () {
  console.log("hello how are you?");
});

// you can trigger multiple event in one element
button.addEventListener("mouseover", mouseoverEvent);
function mouseoverEvent() {
  console.log("the mouse is over the button");
}

// you add a listener when the window object is changed
window.addEventListener("resize", function () {
  const p = document.getElementById("demo");
  p.style.fontSize = "30px";
  p.style.color = "Green";
  p.innerHTML = "Window resized";
});

// how can you pass parameter in a function?
// So lets say we have a function that adds two number
function addNumbers(n1, n2) {
  console.log(n1 + n2);
}
// use an anonymous function to call you intended function then you can pass parameters
// This technique is known as a "callback".
addButton.addEventListener("click", function () {
  addNumbers(5, 10);
});

// Suppose one of your element is inside a div, button for example. And the div has click event listener. However you button also has a click event listener. Now when you click the button, Both div and the button will fire an event. normally the button's event is fired first and the div's event is fired after, its called the Bubble mode. But if you want to switch them you can switch it to capture mode.
function changeText(text) {
  console.log(text);
}
const container = document.getElementById("container");
const anotherButton = document.getElementById("anotherButton");
container.style.background = "skyBlue";
// Add a third parameter in the container and set it to true
container.addEventListener(
  "click",
  function () {
    changeText("From Container");
  },
  true
);

anotherButton.addEventListener("click", function () {
  changeText("From Button");
  // you can also remove an eventListener from a button when another button is clicked
  // note: you can only remove the listener whoes functions are defined seperately and then just added in the parameter.
  // both parameter(add & remove) needs to be exactly same, if add has click, and you said mouseover in remove, it wont work
  button.removeEventListener("mouseover", mouseoverEvent);
});
