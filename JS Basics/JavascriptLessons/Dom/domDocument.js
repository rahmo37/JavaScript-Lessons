// the document object represents you web page.
// If you want to access any element in an HTML page, you alawys starts with accessing the document object.

// Below is some examples of how you can use the document object to access and manipulate HTML.

// Finiding or selecting HTML element
// element with id
document.getElementById("here you pass the the id");

// element with the tag name
document.getElementsByTagName("p"); //Returns HTMLcollection with all the element

// finc element by class name
document.getElementsByClassName("demo"); //! Note: no dot when using document.getElementsByClassName(). Just pass the class name directly.
//Returns HTMLcollection with all the element

// Changing HTML element

// Change the inner content
// Element.innerHtml = new Html content

// Change the attribute value of an html element
// Element.attribute = new Value

// Change the style of an HTML element
// Element.style.property = new style

// Adding and Deleting Elements

// document.createElement("p"); Create an HTML element
// parent.removeChild("p"); remove an HTML element
// parent.appendChild("p"); add an element
// parent.replaceChild(new,old); replace an element
// document.write(text); write into the thml output stream

// !Note Methods like removeChild, replaceChild, and appendChild are called on the parent node of the element(s) you're dealing with

// Lets see an example

// lets first select the element
let p = document.getElementById("par");

// we also need to grab the body element. Since getElementsByTagName returns a collection we access its first element that is in 0th position
let body = document.getElementsByTagName("body")[0];

// Then create a new element
let img = document.createElement("img");
// lets change the src attribute
img.src = "./image/bean.jpg";

// This function replaces the element
function changeElement() {
  body.replaceChild(img, p);
}
