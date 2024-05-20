// *Assignment15:
// ?related to JS ArraysMethods in w3Schools

// !Array Length
// !Assignment 1:

// ?Create an array of 5 different fruit names. Write a function to return the length of the array.

let fruits = ["Guava", "Litchi", "Grapes", "Banana"];
console.log(fruits.length);

// !Array toString()
// !Assignment 2:

// ?Create an array of 4 car brands. Use the toString() method to convert the array into a string and display it.
let cars = ["Audi", "BMW", "Ferrari", "Honda"];
console.log(cars.toString());

// !Array at()
// !Assignment 3:

// ?Create an array of 6 different vegetables. Use the at() method to access the third and last elements. Display these elements.

let vegtables = [
  "Brocoli",
  "Green Peppers",
  "Cabbage",
  "Beans",
  "Tomato",
  "Carrots",
];

console.log(vegtables.at(2));
console.log(vegtables.at(vegtables.length - 1));

// Array join()
// Assignment 4:

// Create an array of 5 different colors. Use the join() method to combine these into a single string separated by a hyphen (-). Display the string.
// Array pop() and push()
// Assignment 5:

// Create an array of 4 city names. Remove the last city using pop() and add a new city at the end using push(). Display the modified array.
// Array shift()
// Assignment 6:

// Create an array of 5 animals. Remove the first animal using shift(). Display the modified array.
// Array unshift()
// Assignment 7:

// Create an array of 3 countries. Add a new country at the beginning using unshift(). Display the new length of the array.
// Array delete()
// Assignment 8:

// Create an array of 4 beverages. Use the delete keyword to remove the second element. Display the modified array and note any changes.
// Array concat()
// Assignment 9:

// Create two arrays of 3 names each. Use the concat() method to merge them into one array. Display the new array.
// Array copyWithin()
// Assignment 10:

// Create an array of 5 different book titles. Use the copyWithin() method to copy the first two elements to the end of the array. Display the modified array.
// Array flat()
// Assignment 11:

// Create a nested array with 3 sub-arrays, each containing 2 elements. Use the flat() method to flatten it into a single array. Display the flattened array.
// Array splice() and toSpliced()
// Assignment 12:

// Create an array of 6 sports. Use the splice() method to remove the third and fourth sports and add two new sports in their place. Display the modified array.
// Then, create a copy of the original array and use the toSpliced() method to achieve the same result without altering the original array. Display the new array.
// Array slice()
// Assignment 13:

// Create an array of 5 movie genres. Use the slice() method to extract the middle three genres into a new array. Display the new array.
// Comprehensive Assignment
// Assignment 14:

// Create an array representing a library with 8 book titles. Perform the following operations in sequence and display the results after each step:
// Use push() to add a new book at the end.
// Use pop() to remove the last book.
// Use shift() to remove the first book.
// Use unshift() to add a new book at the beginning.
// Use splice() to remove the third and fourth books and add two new books in their place.
// Use concat() to merge the library array with another array of 2 book titles.
// Use flat() to flatten the array if it has any nested sub-arrays.
// Use join() to create a single string of all book titles separated by a comma.
