// with the createElement() method we can create am element, for example lets say that we want to create a paragraph element
const para = document.createElement("p");

// Now lets create a textNode that we will incluide in the p element. We learned before In HTML everyting is a node. an element is a node, but not all nodes are element. we have textNOde commentNode and so on. when a text is written inside an element, under the hood it is written in a textNode.

// Now we can add a textNode in a p element directly through innerHTML or innerText or we can creat a textNode and insert the node inside the p element

// We can create a textNode with createTextNode() method
const node = document.createTextNode("Hello World");

// With the appendChild() we can add a node to a paragraph
para.appendChild(node);

// So far we've created an element, created a textNode, added that text node inside a paragraph
// now we want to add that paragraph inside the div we have

// lets grab the div first
const container = document.getElementById("container");

// we added the paragraph with the textNode inside the div, thus showing it in the browser as well
container.appendChild(para);

// insertBefore() method, inserts an element before a child element. first you have to grab the element you want to insert before.

// Lets say that we want to insert the new element before the p2 element

const p2 = document.getElementById("p2");

// Now we apply the insertBefore() method in the parent DIV
// our div is currently inside the container variable

// insertBefore() method takes the new element in the first parameter, and the relative element in the second parameter

container.insertBefore(document.createElement("p"), p2).innerHTML = "I am p3";

// ! Note that insertBefore() method inserts the new element and returns that element, that is why i was able to chanin the .innerHTML property aswell

// We dont have a built in method for inserting before an element but we can create one.

function insertAfter(newElem, relative, text = "") {
  if (text === "") {
    relative.parentNode.insertBefore(newElem, relative.nextElementSibling);
  } else {
    newElem.innerText = text;
    relative.parentNode.insertBefore(newElem, relative.nextElementSibling);
  }
  return newElem;
}
const p4 = insertAfter(document.createElement("p"), p2, "I am p4");

// now lets try to remove an element
// simply grab an element and call the remove method

const p1 = document.getElementById("p1");
p1.remove();

// you can also use removeChild() function, but as usual you have to apply it on the parent element
const replacement = document.createElement("p");
replacement.innerHTML = "I am the replacement of p4";
container.replaceChild(replacement, p4);
