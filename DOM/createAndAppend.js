// To add a dyamic element to the html,
// First we need to create an element
const newElement = document.createElement("p");
// Then we create it's content
const textNode = document.createTextNode("From JavaScript");
// Then we add(append) the text node inside our new element
newElement.appendChild(textNode);

// Now we need to grab the div element where we want to place our new element
const divContainer = document.getElementById("divContainer");

// After grabbing we just append our new child in the container
divContainer.appendChild(newElement);

// You can even insert an element before another element

// So frist, create the element that you want to insert
const anotherElement = document.createElement("p");
const anotherTextNode = document.createTextNode("Another from JavaScript");
anotherElement.appendChild(anotherTextNode);

// Then grab the element you want to put it before
const p1 = document.getElementById("p1");
divContainer.insertBefore(anotherElement, p1);

// You can remove an element as well
// First you need grab the parent of tha child that will be deleted
// We did this already at the top (div container)
// then we need to grab the child we want to delete
const p2 = document.getElementById("p2");
// then we just call the removeChild function on the divContainer
divContainer.removeChild(p2);

// replacing a chile can also be done
// Lets replace p3 with p4
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
// divContainer.replaceChild(who will be placed, who will be replaced);
divContainer.replaceChild(p4, p3);
