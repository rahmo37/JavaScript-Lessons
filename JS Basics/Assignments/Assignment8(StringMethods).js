// *Assignment8:
// ?related to JS Foundation folder, stringMethods.js and w3schools StringMethods

// !Assignment 1: Length and Basic Extraction

// ?Create a string variable with your full name. Use the .length property to find the length of your name.

let fullName = "Obaedur Rahman";
console.log(fullName.length);

// ?Extract the first letter of your name using .charAt() and the last letter using .at(-1) or the property access [].

// .at(-1) is a method you can use on arrays and strings to get the last element or character. The .at() method takes an integer value as an argument, and when you pass -1, it returns the last element of the array or the last character of the string.
console.log("First Letter: " + fullName.charAt(0));
console.log("Last Letter: " + fullName.at(-1));

console.log("Last Letter " + fullName[fullName.length - 1]);

// !Assignment 2: Character Codes

// ?For the string "JavaScript", use .charCodeAt() to find the code of the first character.

// The charCodeAt() method in JavaScript is used to return the UTF-16 code unit (an integer between 0 and 65535) at a specific index in a string. This method is typically applied to a string object and takes an index parameter representing the position of the character for which you want to retrieve the Unicode code point

// For example, The Unicode code point for the Latin capital letter "A" is U+0041, which corresponds to the integer value 65 in decimal notation

let str = "JavaScript";
console.log(str.charCodeAt(0));

// Compare the character codes of the first letters in "Hello" and "hello". Discuss the difference.

console.log("Hello".charCodeAt(0)); // 72
console.log("hello".charCodeAt(0)); // 104

// The Unicode code point for the Latin capital letter "H" is U+0048. This corresponds to the decimal integer value 72.
// The Unicode code point for the Latin small letter "h" is U+0068. This corresponds to the decimal integer value 104.
// So, in the Unicode standard:

// U+0048 represents the capital letter "H", which has the integer value 72.
// U+0068 represents the small letter "h", which has the integer value 104.

// !Assignment 3: Extracting String Parts

// ?Use .slice() to extract the first three letters and the last three letters of "Programming".

let str1 = "Programming";

//* slice()
// Returning the first 3 character of the string, the 3 is exclusive
console.log(str1.slice(0, 3));

// Returning the last 3 character of the string
console.log(str1.slice(-3));

// When used the slice method in a string it retuns a sliced string, when used in an array, it returns a sliced array.
let strArr = ["a", "b", "c"];
console.log(strArr.slice(0, 2));

// ?Try .substring() and .substr() to achieve the same as above. Note the differences in how you achieve it with each method.

//* substring()

// First three characters, 3 is exclusive
console.log(str1.substring(0, 3));
// Last 3 character, starting from 8 and onward
console.log(str1.substring(8));

//* substr() : starts from a position and retruns the number of character specified

// Start at 0 and then 2 more.
console.log(str1.substr(0, 3));

// Start at -3 and then 2 more.
console.log(str1.substr(-3, 3));

// In JavaScript, substr, substring, and slice are three methods used to extract parts of strings, but they have different characteristics and behaviors. Here's a breakdown of each:

// substr(start, length)
// Definition: Extracts a substring from a string, starting at a specified index and extending for a given number of characters.
// Parameters:
// start: The starting index. If negative, it is treated as strLength + start where strLength is the length of the string (i.e., it counts from the end of the string).
// length: The number of characters to extract.
// Note: The substr method is considered a legacy function and is not recommended for use in new code. It's not part of the core JavaScript standard (ECMAScript) and might not be supported in all browsers.
// substring(start, end)
// Definition: Extracts characters from a string between two specified indices.
// Parameters:
// start: The index at which to start extraction. If start is greater than end, substring will swap the two arguments.
// end (optional): The index before which to end extraction. The character at this index will not be included. If end is omitted, extraction goes to the end of the string.
// Note: If either start or end is less than 0, it is treated as 0.
// slice(start, end)
// Definition: Extracts a section of a string and returns it as a new string, without modifying the original string.
// Parameters:
// start: The zero-based index at which to start extraction. If negative, it is treated as strLength + start.
// end (optional): The zero-based index before which to end extraction. If negative, it is treated as strLength + end. If omitted, extraction goes to the end of the string.
// Note: slice can handle negative indices as parameters, which count from the end of the string, making it more versatile in certain situations.
// Key Differences
// Handling of Negative Indices:

// substr treats a negative start as counting from the end of the string.
// substring treats negative indices as 0.
// slice also supports negative indices for both start and end, counting from the end of the string.
// Parameter Meaning:

// substr uses (start, length).
// Both substring and slice use (start, end) but behave differently if start > end.
// Legacy Status:

// substr is considered legacy and its use is discouraged.
// Versatility:

// slice is often preferred due to its handling of negative indices and consistent behavior.
// When choosing between these methods, it's generally recommended to use slice for its versatility and because it conforms to modern JavaScript standards, unless there's a specific reason to use the others.

// !Assignment 4: Case Conversion and Concatenation

// ?Convert "i love javascript" to uppercase.

str = "i love javascript";
console.log(str.toUpperCase());

// ?Convert "I AM LEARNING JAVASCRIPT" to lowercase.

str1 = "I AM LEARNING JAVASCRIPT";
console.log(str.toLowerCase());

// ?Concatenate the two strings from above with a connector " and " in between.

console.log(str + str1);

// !Assignment 5: Trimming and Padding

// ?Given a string with leading and trailing spaces, use .trim(), .trimStart(), and .trimEnd() to clean it up.

// .trim() method
// The .trim() method in JavaScript is used to remove whitespace from both ends of a string. However, it's not limited to just spaces; it also removes other whitespace characters. This includes:

// Space characters ( )
// Tabs (\t)
// No-break spaces (\u00A0)
// And all other Unicode space characters
console.log(str.trim());

// .trimStart() trims all the spaces and white spaces that are at beggining of the string
str = "     JavaScript  ";
console.log(str.trimStart());

// .trimEnd() trims all the spaces at the end of the string
str = "     JavaScript  ";
console.log(str.trimEnd());

// ?Take a number "42" and pad it to a string of length 5 with zeros on both ends using .padStart() and .padEnd().

// the padEnd and padStart method, pads a staring with specified number of defined value, for example, when str = "42", str.padEnd(3, "0") will pad the string with 42 with 1 0 at the end with total number of characters equal to 3

str = "42";
console.log(str.padEnd(3, "0").padStart(5, "0"));

// !Assignment 6: Advanced Character Extraction

// Use .charAt(), .charCodeAt(), and property access [] to extract and discuss the character and its code at position 3 in "Explorer".

str = "Explorer";

// The charAt() function returns the character at the given position from a string
console.log(str.charAt(2));

// The charCodeAt() function returns the character code at the specified position
console.log(str.charCodeAt(2));

// Property access usin square brackets returns the character in the specified position
console.log(str[2]);

// !Assignment 7: Replacing String Content

// ?Replace "Python" with "JavaScript" in the string "I am learning Python".

// The replace method in JavaScript, is used to search for a specified string, for a specified value, or a regular expression, and finally returns a new string with the specified values replaced. and it does not change the original string.

// !Note: It only replaces the first occurence of the specified string

// This method is usually used with regular expression. the "g" global flag when used will make the replace method to replace every occurence. and i will make it canse insensetive

// * Example
// str = "I love apples. Apples are great.";
// console.log(str.replace(/apples/gi, "oranges"));

// The second parameter of the replace method can even be a function that is returning a specified value

// * Example

// function result(a, b) {
//   return a + b;
// }
// str = "The result is 10";
// str = str.replace("10", result(10 , 10));

// console.log(str);

// Now coming back to the problem above,

str = "I am learning Python";

console.log(str.replace("Python", "JavaScript"));

// Use .replace() to change only the first occurrence and then .replaceAll() or a regular expression to change all occurrences.

// !Note: .replace() method does not take regular expression

str = "fhaaakaaa diye dey!";
str1 = "zakhi zaka zepe khay";

console.log(str.replace("f", "D"));
console.log(str1.replaceAll("z", "p"));

// Lets try one with the regular expression
str =
  "Learning to program can be challenging at first, but as you LEARN more about PROGRAMMING, you start to appreciate its power. The more you learn, the easier it becomes to LEARN new concepts and solve problems. Initially, the concept of variables, loops, and functions might seem daunting, but with time, these become tools that you eagerly learn to use. Remember, the key to success in programming is to continuously learn and apply what you've LEARNED.";

console.log(
  str
    .replace(/PROGRAMMING/gi, "programming")
    .replace(/LEARN(ED)?/gi, (match) => {
      return match.toLowerCase();
    })
);

// !Assignment 8: Splitting Strings

// Split "apple, banana, cherry" into an array of fruits.
let fruits = "apple, banana, cherry".split(", ");
console.log(fruits);
// Experiment with splitting a string into individual characters.
str = "pokemon";
console.log(str.split("").join(":"));

// !Comprehensive Assignment: Complete String Manipulation Project
// Create a mini-project where you:

// ?Take a paragraph of text (at least 4 sentences).
let para =
  "INSERT INTO Statement: This command is fundamental for adding new information to your database. Think of a table in a\n database like a spreadsheet where each row represents a distinct record or item. When you use INSERT INTO, you're \nessentially adding a new row to this spreadsheet. For instance, in a library system, to add a new book, you might \nuse a command like INSERT INTO books (title, author, year_published) VALUES ('The Great Gatsby', 'F. Scott \nFitzgerald', 1925);. This command inserts a new row into the books table with the specified values, thereby growing \nyour collection of data.";
// ?Perform the following operations:
// ?Find and replace a common word with another word of your choice.

let replacedWords = para.replace(/command/gi, "instruction");
console.log(replacedWords);

// ?Convert the entire paragraph to uppercase, then to lowercase.

let fullUpperCase = para.replace(/./g, (char) => char.toUpperCase());
console.log(fullUpperCase);

let fullLowerCase = para.replace(/./g, (char) => char.toLowerCase());
console.log(fullLowerCase);
// ?Trim the paragraph if it has leading or trailing spaces.

// ?Lets first pad the paragraph
let paddedPara = para.padStart(800, " ").padEnd(1000, " ");
console.log(paddedPara);

let trimedPara = paddedPara.trim();
console.log(trimedPara);

// ?Split the paragraph into sentences, then words.
// paragraph splitted in sentences
console.log(para.split("."));

// paragraph splitted in words
console.log(para.split(" "));

// First i added line breaks for each new line manually
// Then i splitted them according to new line
console.log(para.split("\n"));

// ?Extract the first and last word of the paragraph using string methods discussed.

console.log(para.split(" ")[0], para.split(" ")[para.split(" ").length - 1]);

// ?Concatenate a phrase to the beginning and end of the paragraph.
let phrase = " Some Paragraph ";
let addedAtTheBeginning = phrase + para;
let addedAtTheEnd = para + phrase;

console.log(addedAtTheBeginning);
console.log(addedAtTheEnd);

// ?Pad a specific sentence within the paragraph to emphasize it (you can choose the padding character).

let allSentenses = para.split("\n");
allSentenses[2] = allSentenses[2].padStart(allSentenses[2].length + 5, "0");
console.log(allSentenses);
