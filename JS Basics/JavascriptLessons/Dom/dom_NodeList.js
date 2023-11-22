// A NodeList object is a list of nodes extracted from a document.
// A NodeList object is almost the same as an HTMLCollection object

// Now the HTMLCollection is the collection of elements, on the otherhand the NodeList is the collection of nodes (regularNodes + elements);

// a node list is returned when used the querySelectorAll() method

const nodeList = document.querySelectorAll(".para");
console.log(nodeList);

// you can grab individual elements just like an Array from nodelist

console.log(nodeList[0]);

// Also you can use the length property and even loop through the list

// Another key difference between NodeList and HTMLCollection is,

// HTMLCollection elements can be accessed with their name, id, or index number.

// But NodeList elements can only be accessed by their name, id or index number.

// Lets demonstrate

const HTMLCollection = document.getElementsByTagName("h3");
console.log(HTMLCollection);

// Now lets try to grab one elements from each of ArrayLike DSs

console.log(nodeList[0]);
console.log(HTMLCollection["heading3"]);

// Finally lets see which methods returns which DS

// Methods that return HTMLCollection:

// document.getElementsByClassName(className)
// element.getElementsByTagName(tagName)
// document.forms
// document.images
// document.links
// document.anchors
// element.children

// Methods that return NodeList:
// document.querySelectorAll(selector)
// document.getElementsByName(name)
// node.childNodes

//! It's worth mentioning that NodeList and HTMLCollection are both collections of DOM nodes, but they have different methods and properties. For example, NodeList returned by querySelectorAll is static (does not update), whereas HTMLCollection is live (updates automatically when the DOM changes).
