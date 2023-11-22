// The easiest way to select an element from the HTML is getElementById
// Note that if you have multiple IDs with the same name, only tyhe first found match will be returned.
// If the element is found the method will return the element as an object. on the other hand if the element is not found it will return null

const p = document.getElementById("demo");
console.log(typeof p);

// We can find an element with class name
// for example
const div = document.getElementsByClassName("demo1")[0];
div.innerHTML = "<p>I am demo1</p>";

// You can even grab an element with css selectors
// if you want to find ALL HTML elements that match a specified CSS selector such as (id, class name, types, attributes, values of attributes, etc) we can use the querySelectoreAll() method.

// In HTML we have two a tags and we have defined some styles for them, now to select them through getElementsByClassName() method we use the following syntax

// if class .className
// if id then #idname

// only querySelector selects the first found element
const anchor = document.querySelector(".anchor");
console.log(anchor);

// querySelectorAll select all the elements
const anchorList = document.querySelectorAll(".anchor");
console.log(anchorList);

// Now Lets say that i have a form In HTML
// We use document.forms to retrive all the forms in the HTML. Which returns an HTML collection with all the forms

// Now we can use bracket notation (or index) and retrive a specific form, like the below syntax

const frm = document.forms["frm1"];
console.dir(frm);

// Each from have an elements valriable which has the all the elements inside the form's innerHTML

// Below we are just looping through each element, retrieveing their value and saving the values in the text variable
let text = "";
for (let i = 0; i < frm.length; i++) {
  text += frm.elements[i].value + "<br>";
}
// Then finally in our demo2 paragraph we are passing that text variable in our p elements innerHTML
document.getElementById("demo2").innerHTML = text;

// Now the following HTML objects (and object collections) are alos accessible:

/**
 * document.anchors
 * document.body
 * document.dovumentElement
 * document.embeds
 * document.forms
 * document.head
 * document.images
 * document.links
 * document.scripts
 * document.title
 * ...Etc
 */
