// *Assignment9:
// ?related to JS Foundation folder, stringSearch.js and w3schools StringSearch

//! Part 1: indexOf() and lastIndexOf()

// ?Create a string variable with the text of your choice. Use the indexOf() method to find the first occurrence of a word or character in your string. Print the index to the console.

// Searching for a word called World which start from index 6.
let str = "Hello World";
console.log(str.indexOf("World"));

// ?Use the lastIndexOf() method to find the last occurrence of the same word or character. Compare the results and explain the difference.
str = "Hello World World";
// Trying to find the last occurrence of the word, World, The last occurrence starts from index 12.
console.log(str.lastIndexOf("World"));

// The lastLindexOf finds the last occurance of the word Wolrd and the index of method finds the first occurrance of a word

//! Part 2: search()

// ?Use the search() method to find a word in your string. Note the index of the first occurrence.

// Search method, searches a string for a value and returns the position of the first match
str =
  "Please do verify and please again Verify your new Amazon account To verify your email address, please use the following One Time Password (Otp): 754334 Do not share this OTP with anyone";

// Finds the exact match
console.log(str.search("Verify"));

// ?Try to use search() with a regular expression. For example, search for a word regardless of case sensitivity.

// Finds the first occurance of the word otp regardless of case sensetivity
console.log(str.search(/otp/i));

//! Part 3: match() and matchAll()

// ?Use the match() method to find all occurrences of a pattern in your string. Use both a simple string and a regular expression as arguments.

// The match method finds first occurence of a pattern. if found returns the the detail about that match in an array.

// However when using in the g flag and a lots of matches are found, then it only returns the matching strings, not their positions or other details.

// Regex
/**
 * First lets try to understand the regex, m* is saying that m could appear 0 or more time, after m [a-z]* means the letters from a-z could appear 0 or more time, then we are saying the word must end with ic, then i means, it could be case insesetive and g means we are searching globally
 */

let text = "Magic and mystic, where's the logic?";
let pattern = /m*[a-z]*ic/gi; // Looking for words that start with 'm'(Zero or more times) and end with 'ic'
let matches = text.match(pattern);
console.log(matches); // ["Magic", "mystic", "logic"]

// Simple String search
console.log(text.match("c"));
// [
//   'c',
//   index: 4,
//   input: "Magic and mystic, where's the logic?",
//   groups: undefined
// ] returns the first index where it was found and other information about the position

// ?Explore matchAll() with a regular expression that includes the global flag. Iterate over the results and print them.

// matchAll() returns all indexes and their details about the index specified. when provided a simple string to match, it matches every index it can find and prints the detail about that index

// Now when provided a regex pattern you must provide the g flag otherwise it will return an error.

text =
  " when it comes to using matchAll() in JavaScript, including the g (global) flag with your regular expression is a must";

// The matchAll() returns an iterator to iterate over all the element of the array.
let matchIterator = text.matchAll("e");

// Here we are iterating over each element of the array.
for (let match of matchIterator) {
  console.log(match);
}
//! Part 4: includes(), startsWith(), and endsWith()

// ?Check if your string includes a specific word or phrase using includes(). Try this with and without a starting index.

// The includes method checks if a specified string is present in the string or not.you can provide an additional parameter called starting index to start the search form a specific index. if omitted the whole string is searched.

//! NOTE: the includes method search is case sensteive. it will only return true if there is an exact match

// Searching the entire string to see if the word JavaScript is included.
console.log(text.includes("JavaScript"));

// Now lets include a stating index. so we are staring from exactly half of the string.
console.log(text.includes("JavaScript", text.length / 2));

// ?Use startsWith() to check if your string begins with a certain character or word.

// Now lets check if the string text starts with H and Hello
text = "Hello World";
console.log(text.startsWith("H"));
console.log(text.startsWith("Hello"));

// Lets check if the string starts with some other letter R
console.log(text.startsWith("R")); // false

//! NOTE: the startsWith method is also case sensetive

// ?Use endsWith() to verify if your string ends with a specific term.

// Next lets check if the string text ends with a certain character or string d and World
console.log(text.endsWith("d"));

console.log(text.endsWith("World"));

// Lets check if the string starts with some other letter S
console.log(text.endsWith("s"));

// !Comprehensive Assignment: Combine Your Knowledge
// Create a mini-program that utilizes all the methods learned (indexOf(), lastIndexOf(), search(), match(), matchAll(), includes(), startsWith(), endsWith()). The program should analyze a long text (you can choose a paragraph or two from a book or article). Your program should:

// Find the occurrences of three different words or patterns, using different methods for each.
// Check if the text includes a specific phrase, starts with a certain word, and ends with a certain word.
// Print a summary of your findings, including the indexes of occurrences, whether certain patterns are found, and if the text meets the startsWith and endsWith conditions.
// Guidelines for Critical Thinking:

// Why might you choose one method over another for specific tasks?
// How can regular expressions enhance your search capabilities?
// Consider the efficiency and readability of your code. How might these methods affect the performance of your script in a larger project?
