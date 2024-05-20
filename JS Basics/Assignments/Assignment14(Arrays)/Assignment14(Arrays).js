// *Assignment14:
// ?related to JS Foundation folder, Arrays.js and JS Arrays in w3Schools

// !Assignment 1: Basic Array Operations
// Objective: Demonstrate the creation, modification, and access of array elements.

//? Create an array named vehicles containing three types of vehicles.
//? Replace the second vehicle with a new type and display the entire array.
//? Access and print the first and last vehicle in the array.
const vehicleArray = ["Audi", "BMW", "Maserati"];

vehicleArray[1] = "Lamorghini";
console.log(vehicleArray);

vehicleArray.forEach((element, index) => {
  if (index === 1) {
  } else {
    console.log(element);
  }
});

// !Assignment 2: Looping Through Arrays
// Objective: Practice using loops with arrays.

//? Given an array of numbers, calculate the sum of all elements using a for loop.
const numArr = [5, 1, 12, 7, 9, 4];
let total = 0;

for (let i = 0; i < numArr.length; i++) {
  total += numArr[i];
}
console.log(total);
total = 0;

//? Repeat the task using the Array.forEach() method.

numArr.forEach((element) => {
  total += element;
});

console.log(total);

// !Assignment 3: Array Manipulation
// Objective: Explore methods to manipulate arrays.

// ?Create an array of five fruits.

const fruitsArr = ["Banana", "Jackfruit", "Mango", "Grape"];
// Add two new fruits at the end and one at the beginning.
fruitsArr[fruitsArr.length] = "Strawberry";
fruitsArr[fruitsArr.length] = "Blackberry";

// The .unshift() method adds elements to the start of an array.
// It modifies the original array and returns the new length of the array.
// This method is useful for prepending elements to an array.
fruitsArr.unshift("Dragonfruit");
console.log(fruitsArr);

// Sort the array alphabetically and print the result.
fruitsArr.sort(); // Sorts the array
console.log(fruitsArr);

// Remove the last fruit and print the name of the removed fruit.
let lastElem = fruitsArr.pop(); // pop() removes the last element from the array and returns it
console.log(lastElem);

// Also we can delete any number of elements from any index with the splice method, for example,
fruitsArr.splice(1, 1);
console.log(fruitsArr);
// !Assignment 4: Working with Complex Arrays
// ?Objective: Understand arrays containing different data types.

// ?Create an array that contains four different data types (e.g., a number, a string, object and a function).
// ?Write a function that prints the type of each element in the array.

let differentTypesInArr = [];
differentTypesInArr.push(8);
differentTypesInArr.push("Eight");
differentTypesInArr.push(function () {
  return "Number eight";
});
differentTypesInArr.push({
  number: 8,
  spelling: "Eight",
});

printDynamicArray(differentTypesInArr);

function printDynamicArray(arr) {
  arr.forEach((element) => {
    if (typeof element === "function") {
      console.log("This element is a function and it returns: ", element());
    } else if (typeof element === "object") {
      console.log("This is an object and it prints, ");
      for (let key in element) {
        console.log(element[key]);
      }
    } else {
      console.log("These are regular elements", element);
    }
  });
}

// !Assignment 5: Advanced Array Techniques
// ?Objective: Use advanced array properties and methods.
// ?Create an array of 10 random integers.
// ?Find the second largest number using JavaScript array methods.
// ?Write a function that returns an array with only unique elements from the initial array.

const numArray = [1, 2, 4, 1, 2, 4, 1, 5, 5, 6, 6];

// Calling the returnUniqeNumbers array to get only unique elements
let uniqueNumbers = returnUniqeNumbers(numArray);

// Sorting the array in decending order
uniqueNumbers.sort((a, b) => b - a);

// Then if there are any elements, then we are printing that element. otherwise we are printing "Empty Array"
console.log(uniqueNumbers.length > 1 ? uniqueNumbers[1] : "Empty Array");

// This function takes an array and then uses a set to extract out the unique elements, and then destructures and then returns that array
function returnUniqeNumbers(numArr) {
  return [...new Set(numArr)];
}

// !Comprehensive Project: Inventory Management System
// Objective: Build a full-stack web application to manage product inventories using Node.js, HTML, CSS, and JavaScript.
// Backend (Node.js):
// Develop a RESTful API to handle inventory data (CRUD operations: Create, Read, Update, Delete).
// Implement routes to add products, remove products, and update product quantities.
// Use an array to store product details (name, quantity, and price).
// Frontend:
// Create an HTML form to add new products to the inventory.
// Display all products in a sortable table with options to edit or delete.
// Use JavaScript to interact dynamically with the backend, updating the product list without reloading the page.
// Integration:
// Ensure the frontend communicates properly with the backend. Use fetch API to handle AJAX requests.
// Implement error handling in both frontend and backend to manage scenarios like product not found or invalid entries.
// Assignment Challenges:
// Validate form inputs both on the client side using JavaScript and server side in Node.js.
// Implement sorting functionality on the client side for the product list based on parameters like name or quantity.
// This set of assignments ensures that your students cover all fundamental and some advanced aspects of JavaScript arrays. The comprehensive project will challenge them to apply their knowledge in a real-world application, integrating both frontend and backend development skills.
