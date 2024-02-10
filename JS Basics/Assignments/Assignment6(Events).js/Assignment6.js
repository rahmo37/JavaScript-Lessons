// *Assignment6:
// ?related to JS Foundation folder, event.js and event module in w3Schools

//! Page Load Event:

// ?Create an HTML page with a <div> element.
// ?Use the onload event to display a welcome message in the <div> when the page loads.

window.onload = function () {
  console.log("Hi");
  welcomeMessage(
    document.getElementById("container1"),
    "Welcome this is container1"
  );
};

function welcomeMessage(element, message) {
  element.innerHTML = message;
}

// we could also add an event listener to the document object
document.addEventListener(`DOMContentLoaded`, (event) => {
  welcomeMessage(
    document.getElementById("container2"),
    "Welcome this is container2"
  );
});

// *--

// *Answer with your own words,

// *What is the document object?

// Core part
// Rerpesents
// Entry point
// Manipulate the web structure

// The document object is the core part of DOM. It represents the entire HTML document, It works as an entry point to the other elemets of the document such as images, links, divs etc. it also provides methods and properties to manupulate the DOM structure. you can also manipulate the style and script with it as well

// *DOMContentLoaded vs onload explain

// The DomContentLoaded fires when the HTML page is completely loaded but it does not wait for the style sheet, images, or frames to be loaded first

// On the other hand the onload event waits for every thing to be loaded forst then it fires

// !Input Field Change Event:

// ?Add an <input> field to the page.
// ?Use the onchange event to update and display the input field's value in another <div> whenever the user changes the input.

function showInput(elem) {
  document.getElementById("container3").innerHTML = elem.value;
}

// *Answer with your own words,

// *When does an input field triggers an onchange event?

// if the values of the input field changes since gaining focus and the input field is now unfocused or the users pressed enter, the onchnage event is triggered.

// !Button Click Event:

// Add a <button> to the page.
// Use the onclick event to change the color of the button when clicked.

let isClicked = false;
function changeColor(element) {
  console.log(element);
  if (!isClicked) {
    element.style.backgroundColor = "Green";
    isClicked = true;
  } else {
    element.style.backgroundColor = "lime";
    isClicked = false;
  }
}

// !Mouse Events:

// ?Create a new HTML page with a few elements (like images or boxes).
// ?Add onmouseover and onmouseout events to these elements to change their appearance when the mouse hovers over them and reverts back when it moves away.

// Most of the code is in the html file

// The element and the box string is passed, we change the innerHTML of that element, and concatinate the box string with the raw string
function changeBox(elem, box) {
  elem.innerHTML = `The mouse is hoverd ontop of ${box} now`;
}

// !Keyboard Event:

// ?Add a text box to the page.
// ?Use the onkeydown event to display a message when a specific key (e.g., the spacebar) is pressed.

// Grabbing the textBox and message element from the HTML page
const textBox = document.getElementById("textBox");
const message = document.getElementById("message");

// Function to display the message when key down event occurs
function checkKeyPress(event) {
  // checking if the pressed key is a spacebar (keycode 32)
  if (event.keyCode == "32") {
    // if the key is a spacebar then the textBox's value will be assigned to the message's innerHTML
    message.innerHTML = textBox.value;
  }
}

// we are listening for keydown event
textBox.addEventListener("keydown", checkKeyPress);

// the event.keyCode property is assocciated with number values like 32, 83 etc (deprtcated)
// the event.key property is assocciated with string values such as " ", " Enter", "Tab"

// * refere to the KeyCode.png for more information

// !Page Load and Unload Events:

// ?Use onload to initialize a counter when the page loads.
// ?Use onunload to alert the user when they are leaving the page.

// an uninitialized variable
let count;

// a function that initializes the count variable with 5
function initialize() {
  count = 5;
  console.log(count);
}

// grabbing the body element
let body = document.getElementById("body");

// when the body is loaded the onload event is triggered and the function's callback is called
body.onload = initialize;

//

// The alert is blocked, the onunload event is triggering, but the browser is blocking the alert pop up
body.onunload = function () {
  alert("You are leaving the page");
};

// you could also use the onbeforeunload

// !Comprehensive Assignment: Integrating All Concepts
// !Objective: Combine all learned concepts into a single, interactive web page.

// !Create a web page with the following elements:

// ?An <input> field that changes color when something is typed (onchange).

// This function will make the inputfiled change color when onchange event occurs
function changeColor2(elem) {
  colorArr = ["Red", "Green", "Yellow", "Pink", "Blue"];
  let index = generateRandomNumber(colorArr.length, 1);
  console.log(index);
  elem.style.backgroundColor = colorArr[index - 1];
}

function generateRandomNumber(max, min) {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1 + min));
}

// ?A <button> that changes text when clicked (onclick).

// This changedText function is attached to the button, when clickded the button sends the element in this function therefor allowing me to change it's content

function changeText(elem) {
  elem.innerHTML = "Text Changed";
}

// ?An image that changes size when hovered over (onmouseover) and returns to original size when the mouse leaves (onmouseout).

function changeSize(elem, signal) {
  if (signal === "over") {
    elem.style.height = "150px";
    elem.style.width = "150px";
  } else if (signal === "out") {
    elem.style.height = "300px";
    elem.style.width = "300px";
  }
}

// ?A message that displays on page load (onload).

function displayText() {
  console.log("Worlddd");
  document.getElementById("textContainer").innerHTML = "Page Loaded!";
}

// ?An alert that triggers when the user tries to close the page (onunload).
function displayText2() {
  console.log("Kemon");
  document.getElementById("textContainer2").innerHTML = "Page unLoaded!";
}

// ?A text box that changes color when a specific key is pressed (onkeydown).

function changeText2(event, elem) {
  colorArr = ["Red", "Green", "Yellow", "Pink", "Blue"];
  if (event.key == "Enter") {
    elem.style.backgroundColor =
      colorArr[generateRandomNumber(colorArr.length, 1)];
  }
}

// Add a brief documentation/comment above each feature explaining the event being used.

// This comprehensive assignment will require using all the event handling techniques discussed in Lessons 1 and 2.
