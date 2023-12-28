// ! How can you display an object in a webpage

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// we use the document object, and use it's getElementByID method to select an element, then we change its innerHTML to the objects property and value.

/**
 * Then we can use the Object property by its name
 * Display Object properties in a loop
 * Display the Object using the Object.values()
 * Display the object using JSON.stringify()
 */

// By name
document.getElementById("demo").innerHTML = person.name;

// By a loop
let txt = "";

for (let value in person) {
  txt += person[value] + "<br>";
}

document.getElementById("demo").innerHTML = txt;

// Using Object.values(); , this method returns an array of the object values
myArr = Object.values(person).join("<br>");
document.getElementById("demo").innerHTML = myArr;

// we can use the JSON.stringify method, which converts an object to a string
let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

// Strigify doesnot work on methods, if you need to convert an object method to string, you must first save the returned value in a variable and then use strigify it

// Arrays can be strigified
