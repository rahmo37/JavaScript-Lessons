// In programming when interacting with an interface many events can occure such as click event, mouse over (hover) event, scroll event, keyup event, key release event etc.

// Now HTML DOM allows JS to react when these events occurs.

// A JavaScript can be executed when a event occurs, like when a user clicks on an HTML element.

// Examples of HTML events

/**
 * When a user clicks the mouse
 * When a web page has loaded
 * When an image has been loaded
 * When the mouse moves over an element
 * When an input field is changed
 * When an HTML from is submitted
 * When a user strokes a key
 */

// Lets say we have an h1 element in our HTML page. and onclick on that we want that h1 element to change its text.

// We can define a function here which we will call when from HTML when that element is clicked
// If clicked and the counter is odd the text inside the h1 element will be "text changed"
// Otherwise if the counter is event it will changed back to the starting text
let counter = 0;
const h1 = document.getElementById("title");
const startingText = h1.innerText;
function changeText() {
  counter++;
  console.log(counter);
  if (counter % 2 !== 0) {
    h1.innerText = "text changed";
  } else {
    h1.innerText = startingText;
  }
}

// Lets say that we a button with its innerText click
// Now we want soley JS to add an event response when this button is clicked
// we are grabbing the button with id "#button"
// Afterward we are changing the button's onclick attribute call an anonymous function
const button = document.querySelector("#button");
button.onclick = function () {
  console.log("Hello World");
};

// Then we have onload and onuload event
// The onload and onunload events are triggered when user enters or leaves the page.

// lets call a function when attached HTML document loads
const body = document.getElementById("body");
body.onload = function () {
  console.log("Document loaded");
};

// same for unloading
// This one is not working probably because browser does not supprt this any more
body.onunload = function () {
  console.log("Document unloaded");
};

// Also we have onchange event, when some thing changes the onchnage event will fire
const input = document.getElementsByTagName("input")[0];
input.onchange = function () {
  console.log("hello");
};

// also we have onmouse, onmoseover, onmousedown, onmouseup, onclick
