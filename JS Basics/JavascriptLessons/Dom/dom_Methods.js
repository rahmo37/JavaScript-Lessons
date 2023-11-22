// DOM = Document Object Model
// HTML DOM methods are actions you can perform on HTML elements
// HTML DOM properties are values of HTML element that you can set or change

// The HTML DOM can be accessed with JS /Or other Programming Languages

// In the DOM, all HTML elemets are defined as objects.

// A property is a value that you can get or set, like you can change the content of an HTML element

// A method is an action you can do, like add or delete an HTML element

// We have multiple p elements in out HTML and we want to change an element's innerHTML through JS

// Document refers to the whole HTML page, and we have a method called getElementById which takes a string parameter and that is where we pass our id from html

// Note that the getElementById method is coming from the Document prototype chain

// At first by using the getElementByID we first grab the the intended element and save that element in a variable called pDemo

const pDemo = document.getElementById("demo");

// Then we change the innerHTML of the pDemo (p) element
// Now if you go to the browser you should be able to see the TEST 1
pDemo.innerHTML = "TEST 1";

// Now lets add a button to HTML, and when clicked the inner text of p element will be changed

// Lets grab the id frist
const pDemo1 = document.getElementById("demo1");

// This function will be called in the html page
function changeInnerText() {
  pDemo1.innerText = "Changed";
}
