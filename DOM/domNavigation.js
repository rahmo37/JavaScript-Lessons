const p = document.getElementById("demo");

// you can retrieve the value of the element like this
console.log(p.innerHTML, "<-- 0");

// You can retrieve the value by navigating the DOM
// In this case we are accessing the nextSibling of the first p element child/node of the
console.log(p.nextSibling.firstChild.nodeValue);
// This way is confusing because if there is any line breaks or space in between the elements, these line breaks and the spaces are also counted as nodes. Its better to avoid this syntax

// Anotherway
// Even though this way is little more clear, there may still remain ambiguity when its time to retrieve specific elements, for example childNodes[0] is text or line break, but i was expecting it to be the first p element

const body = document.getElementById("main");
console.log(body.childNodes[4].childNodes[0].nodeValue);
// In this case at first we are retrieving the 3rd p element, which the 5th child of the body (including line breaks and spaces) element, then we retrieved the firstChild which is [0] (text), then we printed the nodeValue of that element
// to be honest its much easier to do these tasks with getElementById and innerHTML properties

// Now lets retrive the whole document and the body

// To retrive the whole document we use,
const wholeBody = document.documentElement;
// console.log(wholeBody);

// to retrive the only the body element we use
const onlyBody = document.body;
console.log(onlyBody.nodeName);

// to retrieve a name of a node/element we use nodeName property
console.log(onlyBody.childNodes[4].nodeName); // Outputs: p
