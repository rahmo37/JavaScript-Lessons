// Changing HTML content

// The easiest way to modify the content(innerHtml) of an HTML element is by using the innerHTML property.

// To change the content of an HTML element, use this syntax:

// document.getElementById(Id).innerHTML = new Html
// Note that an html content could be text of any other HTML element definition as well

// Lets change the inner content of our body element

const body = document.getElementsByTagName("body")[0]; // [0] added because getElementsByTagName returns an HTMLcollection

// Now lets change the innerHTML of our body
body.innerHTML = `<p>I am inside the body</p>`;

// Lets now create a paragraph element and change its innerHTML
const para = document.createElement("p");
para.innerHTML = "I am also inside the body";

// We can add this para element also inside out body by using append child method
body.appendChild(para);

// innerHTML can be changed dynamically as well

// The appendChild method appends the new p element to the body and then returns that p element
const para2 = body.appendChild(document.createElement("p"));
para2.innerHTML = `Today is: ${Date().slice(0, 16)}`;

// You can also chnage the css styleing, but that a different topic
para2.style.fontSize = "2rem";

// Now we can also change the attribute of an element.

// lets add an image element and change its src attribute

// Lets do it in one line

// The appendChild method appends the new img element to the body and then returns that img element, allowing you to directly set the src attribute in the same line.
body.appendChild(document.createElement("img")).src = "./image/bean.jpg";

// ! One thing to note is to never write the documnt.write() after the document is loaded, it will override the the document
