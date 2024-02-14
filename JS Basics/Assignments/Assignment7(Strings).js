// *Assignment7:
// ?related to JS Foundation folder, string.js and w3schools Strings

// !Assignment 1: Exploring String Creation and Quotes
// *Objective: Practice creating strings using both single and double quotes and understand how to include quotes within a string.

// You can create create strings in JavaScript in both signle quote and double quote.
let str1 = "Double Quote";
let str2 = "Signle Quote";

// We can add quotes inside a string in three ways

// First Way (Quote inside Quote)
// If you need to use double quote inside, then use single quoted string, and you can use the double quote inside with no issues
let doubleInSingle = 'I love you "ALLAH"';

// If you need to use single quote inside, then use double quoted string, and you can use the double quote inside with no issues
let singleInDouble = "I love you 'ALLAH'";

// Second Way (Backslash)
// (Pretier might change code when saved)
// You can use backslashes inside a double quote and use your intended double quote to with backslasesh
// !let backSlashWithDouble = "I love you \"ALLAH\" ";
// !let backSlashWithSingle = 'I love you \'ALLAH\' ';

// Thirdway(String template)
// With template literal you can you a combination of double or single quote in one string
let templateLiteral = `I love you "ALLAH". 'LaIlahaIllallah'`;

// ?Task: Create two variables, one using single quotes and the other using double quotes. Both should contain the sentence: Learning JavaScript is fun!

// !let singleQuote = "Learning JavaScript is fun!";
// !let doubleQuote = 'Learning JavaScript is fun!';

// ?Task: Create a string that includes both single and double quotes within it, such as: She said, "It's a beautiful day!" Demonstrate two ways to achieve this.

// first way
let bothQuotes = "'She said', \"It's a beautiful day!\"";

// second way
let bothQuotes2 = `'She said', "It's a beautiful day!"`;

console.log(bothQuotes, bothQuotes2);

// Start Here...
// !Assignment 2: Using Escape Characters
// ?Objective: Understand and apply escape characters in strings to include special characters.

// We can use a \n escape character to insert a new line
let stringWithNewLine = "Hello \nWorld";
// We can inster a tab by inserting \t
let stringWithTab = "Hello \tWorld";
console.log(stringWithTab);

// ?Task: Create a string variable that includes a double quote inside it. For example, the output should be: The "escape" character is useful.
//! let str = "The \"escape\" character is useful";

// ?Task: Create a string that includes a new line and a tab. Use it to format the following sentence across two lines: JavaScript is powerful.\tIt allows for complex web applications.
let str3 = "JavaScript is powerful.\n \tIt allows for complex web applications";
console.log(str3);

// !Assignment 3: Template Strings and Multiline Text
// ?Objective: Explore the use of template strings for including variables and creating multiline strings.
let num = 5;
// In template literal string, we can add variables and we can use multiline without any special characters
let templateString = `This is the first line,
This is the second line and 5 added with 5 is ${num + num}`;
console.log(templateString);

// ?Task: Create a template string that uses both single and double quotes inside it without needing escape characters. Example sentence: Template strings can include "double" and 'single' quotes easily.

let templateString2 = `This string can have "double" quotes and 'single' quotes`;
console.log(templateString2);

// ?Task: Use a template string to create a multiline string that represents a simple address, including street, city, and zip code on separate lines.

let addressString = `
adress: ${"26 west"},
city: ${"21st st"},
zip: ${"11729"}
`;
console.log(addressString);

// !Assignment 4: String Length and Access
// ?Objective: Learn to find the length of a string and access specific characters within it.

// To find the length of a string we use the length property.
let lenOfStr = "Hello World";
console.log(lenOfStr.length);

// to access specific character we can either use indexing or we could use the substring method

// Lets print all the l's in the string using indexing
// Indexing
console.log(lenOfStr[2], lenOfStr[3], lenOfStr[9]);

// Substring method
console.log(
  lenOfStr.substring(2, 3),
  lenOfStr.substring(3, 4),
  lenOfStr.substring(9, 10)
);

// ?Task: Create a string and find its length. Print both the string and its length to the console.

// lets use the string from above,
console.log(lenOfStr.length, lenOfStr);

// ?Task: Access the first, middle, and last character of a string. If the string is JavaScript, print J, S, and t.

// Lets define a string called testStr

let testStr = "JavaScript";
console.log(
  testStr.substring(0, 1),
  testStr[4],
  testStr.substring(testStr.length - 1, testStr.length)
);

// !Assignment 5: Strings as Objects vs. Primitive Strings
// Objective: Understand the difference between strings created as primitive values and those created as objects.

// Task: Create a primitive string and a string object with the same value. Compare them using == and === to observe the difference. Explain the results in comments.
// Task: Compare two string objects containing the same value using == and ===. Then, compare their values using the valueOf() method. Explain the outcomes.

// !Comprehensive Assignment: Manipulating and Comparing Strings
// Objective: Combine all the lessons learned about strings into a single, comprehensive task.

// Task: Write a script that does the following:

// Prompt the user for their full name.
// Check if the name includes any quotation marks (single or double) and remove them.
// Split the name into first and last name assuming a single space separates them. Consider edge cases where there might be multiple spaces or none.
// Convert the first and last names to template strings that spell out each character on a new line.
// Compare the length of the first and last names using primitive values and as objects. Discuss the comparison in comments within your code.
// Finally, output a formatted address using a template string, including the sanitized name, a made-up street, city, and zip code, all on separate lines.
