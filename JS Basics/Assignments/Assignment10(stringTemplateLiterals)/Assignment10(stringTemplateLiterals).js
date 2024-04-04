// *Assignment10:
// ?related to JS Foundation folder, stringTemplateLiterals.js and w3schools JavaScript Template Strings

//! Assignment 1: Getting Started with Template Literals
// ?Basic Syntax: Create a string using template literals that says Hello, World! and log it to the console.
// ?Quotes Inside Strings: Write a template literal that contains both single and double quotes: She said, "It's a beautiful day!" and log it to the console.

let str = `Hellow World!`;
console.log(str);

str = `She said "it's a beautiful day!"`;
console.log(str);

//! Assignment 2: Multiline Strings
// ?Create a multiline template literal that represents the following poem and log it to the console:

//* Roses are red,
//* Violets are blue,
//* Sugar is sweet,
//* And so are you.

str = `Roses are red
      Violets are blue
      Sugar is sweet
      And so are you`;

console.log(str);

//! Assignment 3: Interpolation and Expressions
// ?Variable Interpolation: Create two variables, name and age, and use them in a template literal to introduce someone. For example, "My name is John, and I am 30 years old."

let name = `John`;
let age = 26;

console.log(`My name is ${name} and I am ${age} years old`);

// ?Expression Substitution: Calculate the area of a rectangle with the width of 5 and height of 10 using template literals. Log "The area of the rectangle is: X" to the console, where X is the calculated area.

let width = 5;
let height = 10;

console.log(`The area of the recangle is ${height * width}`);

//! Assignment 4: Advanced Interpolation
// ?Method and Property Calls: Create a variable containing a string. Log a message to the console using a template literal that includes both the length of the string and the string in uppercase.

str = "hello";

console.log(`${str.toUpperCase() + " " + str.length}`);

// ?Complex Expressions: Create a template literal that calculates and displays the result of a more complex expression, like the sum of the squares of three numbers.

let a = 5;
let b = 10;
let c = 15;

console.log(`Sum of three numbers ${a + b + c}`);

//! Assignment 5: HTML Templates
// ?Simple HTML Template: Create a simple HTML template for a user profile card. It should include the user's name, age, and a short bio. Use template literals to insert the values.

name = `Obaedur Rahman`;
age = 25;
let shortBio =
  "My Name is Obaedur Rahman. I am a computer programming and information system student. i study in the farmingdale state college";

userInfoHTML = `<div>
      <p>
      Name: ${name}
      <br>
      Age: ${age}
      <br>
      Short Bio: ${shortBio}
      </p>
</div>`;

// insertAdjacentHTML is a method in the JavaScript DOM API that allows you to insert HTML text into a specified position relative to the element it's called on. It doesn't overwrite existing content unless specifically directed to replace it. This method is useful for dynamically adding content to your webpage without removing or replacing what's already there.

// The syntax of insertAdjacentHTML is as follows:

// javascript
// Copy code
// element.insertAdjacentHTML(position, text);
// element is the DOM element you're targeting.
// position is a string value that specifies where to insert the HTML in relation to the element. There are four possible values for position:
// 'beforebegin': Inserts the HTML text as a sibling before the element.
// 'afterbegin': Inserts the HTML text as the first child of the element.
// 'beforeend': Inserts the HTML text as the last child of the element.
// 'afterend': Inserts the HTML text as a sibling after the element.
// text is the string of HTML that you want to insert
document.body.insertAdjacentHTML("afterbegin", userInfoHTML);

// ?Dynamic List: Generate an HTML unordered list (<ul>) of items from an array of strings using template literals. Insert this list into the provided div in your HTML file with id="myList".

const foodArr = ["Cake", "Fish", "Chiken"];

const container = document.getElementById("myList");
console.log(container);
container.innerHTML = `
My Favorite foods are given below:
<ul>
      <li>${foodArr[0]}</li>
      <li>${foodArr[1]}</li>
      <li>${foodArr[2]}</li>
</ul>`;

// //!! Comprehensive Assignment: The Ultimate Challenge
// Create a small web application or a piece of complex HTML structure that incorporates everything you've learned about template literals. Your project should:

// ?Incorporate Variables: Use variables to store information that will be displayed.
// ?Use Expressions: Include expressions that calculate and display data.
// ?Handle Multiline: Have at least one example of a multiline string.
// ?Perform Interpolation: Interpolate variables and expressions throughout the text.
// ?Include Quotes: Include both single and double quotes within your strings.
// ?Generate HTML Dynamically: Use template literals to dynamically generate complex HTML structures, possibly including loops to process arrays or objects.
// ?Example Project Idea: A dynamic blog post generator that takes in an array of post objects, each with a title, author, date, and content, and generates a full HTML page displaying all posts beautifully formatted. Include a feature that calculates how long ago each post was written (e.g., "2 days ago") using expressions within your template literals.

// I have saved a file with JSON string, with many posts. lets fetch that file so that we can have the post object
// const fs = require("fs");
// Unfortunately the browser is not identifying the require object, conflcting front end with back end

// fs.readFile(__dirname + "/blogPOst/posts.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error while reading the file", err);
//   } else {
//     console.log(data);
//     // Parsing the JSON string
//     let postArr = JSON.parse(data);

//     let postContainer = document.getElementById("myList");

//     postArr.forEach((element) => {
//       postContainer.innerHTML += `
//       <div class="eachPost">
//         <p>
//         ${element.title}
//         </p>
//         <p>
//         ${element.author}
//         </p>
//         <p>
//         ${element.date}
//         </p>
//         <p>
//         ${element.content}
//         </p>
//         </br>
//       </div>
//       `;
//     });
//   }
// });

// Lets strat again

const postArr = [
  {
    title: "The Evolution of Pikachu",
    author: "Ash Ketchum",
    date: "2024-03-15",
    content:
      "Pikachu, one of the most iconic Pokémon, has evolved significantly over the years. This post explores Pikachu's journey and its impact on the Pokémon universe.",
  },
  {
    title: "Understanding Super Saiyan Levels in DBZ",
    author: "Goku Son",
    date: "2024-03-10",
    content:
      "DBZ's Super Saiyan transformation is a key aspect of its characters' power. We delve into the various levels and what they signify for the Saiyans.",
  },
  {
    title: "JavaScript: The Heart of the Web",
    author: "Brendan Eich",
    date: "2024-03-01",
    content:
      "A deep dive into JavaScript, exploring how it has shaped the modern web and continues to drive interactive web experiences.",
  },
  {
    title: "Java: Building Reliable Applications",
    author: "James Gosling",
    date: "2024-02-20",
    content:
      "Java has been a staple in enterprise environments. This post explores the principles that make Java a robust platform for application development.",
  },
  {
    title: "Node.js: Revolutionizing Backend Development",
    author: "Ryan Dahl",
    date: "2024-02-10",
    content:
      "Node.js has transformed backend development with its non-blocking I/O model. Here's how it works and why it's become so popular.",
  },
  {
    title: "The Orange: A Fruit Full of Wonders",
    author: "Linnaeus",
    date: "2024-01-25",
    content:
      "Exploring the nutritional benefits and fascinating history of oranges, a fruit cherished around the globe for its taste and health benefits.",
  },
];

const postContainer = document.getElementById("myList");

postArr.forEach((element) => {
  postContainer.innerHTML += `<div class="eachPost">
  <p>
  Titile: ${element.title}
  </p>
  <p>
  Author: ${element.author}
  </p>
  <p>
  Date: ${element.date}
  </p>
  <p>
  Post: ${element.content}
  </p>
  <br>
  </div>`;
});
