// The querySelector method uses CSS selectors to identify and return the first matching element in the DOM. This means that even if there's no specific CSS styling applied to that element, you can still use the same selectors to grab that element with JavaScript.

// So at first we grab the p element with the querySelector method
const p = document.querySelector("#demo");

// Then we change the styling of the p element.
// p.style, changing the style property of p element and then call the atribute and change its value
p.style.color = "red";
// In JS we use camel case insted of hyphen
p.style.fontSize = "30px";
