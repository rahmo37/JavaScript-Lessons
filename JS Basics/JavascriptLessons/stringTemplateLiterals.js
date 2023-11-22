// template literals are another great way to write strings.
// we use backtics instead of quotes, lets see an example
let a = `Bangladesh`;
// what are the benifits of using this
// you can add any quotes inside this backticks and they will work perfectly
let b = `I bought a dehumidifier named 'Breezome'`;
console.log(b);

// you can use multilines with no special characters used
let c = `My name is Obaedur Rahman
         I am learning JavaScript
         Its pretty easy to learn`;

// the most significant benifit of template iteral is the interpolation. it lets you add variables inside a string effciently, also you can do calculation with variables as well, lets see an example

let var1 = 2;
let var2 = 18;
let country = "Bangladesh";

let d = `The population of ${country} will soon become ${var1 + var2} million`;
console.log(d);

// you can even call methods and properties
console.log(
  `the length of the string variable d is ${
    d.length
  }, i can also call methods, lets capitalize the country variable: ${country.toUpperCase()}`
);

// you can even add actual HTML code inside a the template literal
// for example
let header = "Template Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("body").innerHTML = html;
