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
// ?Create a mini-program that utilizes all the methods learned (indexOf(), lastIndexOf(), search(), match(), matchAll(), includes(), startsWith(), endsWith()). The program should analyze a long text (you can choose a paragraph or two from a book or article). Your program should:

console.log("\n------------------------------------------\n");

let parapgraph =
  "In the heart of the dense forest, a mysterious and ancient tree stands tall, its branches spreading wide across the sky. The tree, known to the local villagers as the Guardian of the Forest, has been the centerpiece of countless legends and stories passed down through generations. Its leaves, a vibrant shade of green, seem to shimmer in the sunlight, casting an ethereal glow on the forest floor below. A small, crystal-clear stream winds its way around the tree's massive trunk, its waters sparkling like diamonds in the light. Birds of all colors and sizes perch on the tree's branches, filling the air with their melodious songs. The forest is alive with the sounds of nature, from the gentle rustling of leaves in the breeze to the distant roar of a waterfall. As night falls, the tree takes on a new persona, with fireflies illuminating its surroundings, creating a magical spectacle that leaves all who witness it in awe. This tree is not only a symbol of nature's beauty and strength but also a reminder of the deep, unspoken connection between all living things.";

// ?Find the occurrences of different words or patterns, using different methods for each.

// ?indexOf(): Find the first occurrence of "forest". It returns the position where "forest" first appears.

//Use indexOf() when you need to find the position of a specific substring.

console.log("First index of forest is", parapgraph.indexOf("Forest"));

// ?lastIndexOf(): Find the last occurrence of "tree". It gives the position of the last appearance of "tree".

console.log("Last index of tree is", parapgraph.lastIndexOf("tree"));

// ?search(): Search for "waterfall". This method searches for a string for "waterfall" and returns its position.

// Use search() when you need more complex searches that require the flexibility of regular expressions.
// ! NOTE: The search() method will always return the index of the first match it finds in the string, regardless of any flags. The g (global) flag does not change this behavior for search();

console.log(parapgraph.search(/waterfall/i));

//? match(): Use it to find all occurrences of "the". It returns an array containing all matches.
// returning the array of all occurences of the word the.
console.log(parapgraph.match(/the/gi));

// ?matchAll(): This can be used to find all occurrences of "the", but it returns an iterator with all matches, including capturing groups.
// returning the array of all occurences of the word the. returns an iterator, so we have to iterate through the array.
let iterator = parapgraph.matchAll(/the/gi);

for (let occurance of iterator) {
  console.log(occurance);
}

// ?includes(): Check if the paragraph includes "magic". It returns true or false.
console.log(parapgraph.includes("magic"));

// By providing the starting point from the middle we can also direct the function to start from the half of the string

console.log(parapgraph.includes("magic", parapgraph.length / 2));

// ?startsWith(): Check if the paragraph starts with "In". It returns true or false.

console.log(parapgraph.startsWith("In"));

// ?endsWith(): Check if the paragraph ends with "things.". It returns true or false.

console.log(parapgraph.endsWith("Things"));

// Check if the text includes a specific phrase, starts with a certain word, and ends with a certain word.

console.log(parapgraph.startsWith("In"));

console.log(parapgraph.endsWith("things."));
