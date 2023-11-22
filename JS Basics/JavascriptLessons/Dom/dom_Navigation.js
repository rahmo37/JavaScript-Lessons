// * if you need to run a specific console log, use/copy/paste this "<--Here" to know which log you are printing
// According to the W3C HTML DOM standard, everything in an HTML document is a node:

// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes

// The terms parent, child, and sibling are used to describe the Node relationships.
// In a node tree, the top node is called the root (or root node)
// Every node has exactly one parent, except the root (which has no parent)
// A node can have a number of children
// Siblings (brothers or sisters) are nodes with the same parent

/* <html>

<head>
  <title>DOM Tutorial</title>
</head>

<body>
  <h1>DOM Lesson one</h1>
  <p>Hello world!</p>
</body>

</html> */

// From the above html you can conclude that,

/**
 * <html> is the root node
 * <html> has no parent
 * <html> is the parent of both <head> and <body>
 * <head> is the first child and <body> is the last child
 */

// also

/**
 * <head> has one child: <title>
 * <title> has one child (a text node): "DOM Tutorial"
 * <body> has two children: <h1> and <p>
 * <h1> has one child: "DOM Lesson one"
 * <p> has one child: "Hello world!"
 * and <h1> and <p> are siblings
 */

// Now we can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

//! Before diving deep be aware of these distictions

// Node: This is a generic term that represents any type of object in the DOM hierarchy. There are several types of nodes, including element nodes, text nodes, comment nodes, and others.

// Element: This is a specific type of node that represents an HTML or XML element (like <div>, <p>, <a>, etc.). Elements can have attributes and can contain other elements and text.

// Remember that every element is a node, but not every node is an element

// Now moving forward, when we say nextChild firstChild lastChild nextSibling previousSibling they are refering to nodes not element, now if a node happend to be an element, then you accessed a node that is the type element

//to access p element's parent we use parentNode
const div = document.getElementById("demo").parentNode;
console.log(div);

// To get a list of childNodes in a parent we use .childNodes
console.log(div.childNodes);

// Now to access a specific child we use
console.log(div.childNodes[1]);
// Now you might ask why did we use 1 instead of 0, well if you go to the html page, even the generation of new line and the space between them are also considered to be placed in a text node, so currently the invisible text node has the node value of "\n       "

// to access the firs child we use the firstChild method
console.log(div.firstChild); // Notice this is returning the textNode

// to access the last child we use the lastChild method
console.log(div.lastChild); // Notice this is returning a commentNode, because before the last element we used a comment

// nextSibling
console.log(div.firstChild.nextSibling); // at first we grabbed the firstChild then we grabbed the next sibling of the first child

console.log(div.childNodes[2].previousSibling); //At first we are grabbing the 3rd(0,1,2) child and then we are returning to the previousSibling

//! Note that
// For situations where you only want to navigate through element nodes and skip other types of nodes (like text nodes or comment nodes), the DOM provides analogous properties:

// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// These specifically refer to element nodes, ignoring other node types.

//! Also note that
// innerHTML:

// Used with element nodes.
// Gets or sets the HTML content inside an element.
// Can include and render HTML tags.
// nodeValue:

// Used with text, comment, and attribute nodes.
// Gets or sets the text value of the node.
// Treats HTML tags as plain text.

// Lets use the nodeValue and innerHTML peoperty
const p = document.getElementById("demo");

// Notice that first child is a textNode(which is not an element) so thats why we use nodeValue
console.log(p.childNodes[0].nodeValue);
// On the other hand for the childNode[1] which is a node but type element, (p) thats why we use innerHTML
console.log(p.childNodes[1].innerHTML);

// document.body will give you the body of an html,
// On the other hand document.documentElement will give you the whole document

console.log(document.body);
console.log(document.documentElement);

// if you need to know the name of a node you can use the nodeName property
console.log(div.lastChild.nodeName);

// Lets try to grab a complex structured node before ending this lesson
// lets first grab our div
const container = document.getElementById("list");

// dynamic
function findOutTheValue(container) {
  let counter = 0;
  for (let i = 0; i < container.childNodes.length; i++) {
    if (container.childNodes[i].nodeName === "UL") {
      findOutTheValue(container.childNodes[i]);
    } else if (
      container.childNodes[i].nodeName === "LI" &&
      container.childNodes[i].innerHTML !== ""
    ) {
      if (container.childNodes[i].textContent === "I am Here") {
        console.log(container.childNodes[i].innerHTML);
        return;
      } else {
        findOutTheValue(container.childNodes[i]);
      }
    } else {
      continue;
    }
  }
}

findOutTheValue(container);
