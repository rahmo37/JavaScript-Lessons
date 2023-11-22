// Returns the URL of the website
console.log(document.URL);

// Returns the element by id
console.log(document.getElementById("demo"));

// Returns the element by tag name. Returns an array
console.log(document.getElementsByTagName("p"));

// Returns the elements by class name. Returns an array
console.log(document.getElementsByClassName("anchor"));

// innerHtml property changes the inner content of an element
document.getElementById("demo").innerHTML = "Test 5";

// Returns element by CSS id/class

//Class
// If you have multiple elements with same class and you want to grab the first element with that class you use querySelector
console.log(document.querySelector(".anchor"));

// If you have multiple elements with same class and you want to grab all of them, you use querySelectorAll
console.log(document.querySelectorAll(".anchor"));


