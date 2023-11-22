// The Browser Object Model Allows javascript to "talk to" the browser

// The Window object is supported by all the browsers. It represents the browser's window.

// All global JavaScript object, functions, and variables automatically become a member of the window object

// Global variables in JS are properties of the window object

// Global functions are methods of window object.

// Event the document object is a property of the window object

// window.document.getElementById("header");

// is same as

// document.getElementById("header");

// Lets Explore different methods and properties of window object.

// grabbing the dom elements

const width = document.getElementById("width");
const height = document.getElementById("height");

// show window object properties
width.innerHTML = "This Window's inner Width is: " + window.innerWidth;
height.innerHTML = "This Window's inner Height is: " + window.innerHeight;

let google;
let x;
// Lets Look att the functions now
// window.open() Is a function that will take you to a new window
function openWindow() {
  // _self in the second parameter will open the window in the current window
  google = window.open("https://google.com", "_self");
  x = 5;
}

// another one is window.close
// you have to save the window you have opened in a vaiable and the you can call the closed window on that variable

function closeWindow() {
  // This is now working properly
  google.close();
}
