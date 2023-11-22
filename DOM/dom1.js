// Get Element by id is a method of Document
// When used with the id name, it returns the element as object
const p = document.getElementById("Demo");
// And then innerHtml is a property of the element that was returned as an object
// It allows us to change the inner content of the element
p.innerHTML = `Today's date is: ${Date()}`;
console.log(p, typeof p);
