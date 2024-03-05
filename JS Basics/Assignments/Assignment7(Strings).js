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
//? Objective: Understand the difference between strings created as primitive values and those created as objects.

// Primivite
// Primitive String are created by assiging a value to a variable directly. For example:
let primitiveString = "Primitive String";

// Primitive strings are not object. they are immutable, meaning once created, their value cannot be changed. If you attempt to reassign the assigned variable to a new value, it will create a new value in the memory.

// Also Operations on a primitive string, such as accessing individual characters or using string methods do not modify the orignal string rather returns a new string value.

// Object
// Object strings are created by the new keyword and the String constructor
// For example
let objectString = new String("Object String");

// String objects are instances of the string class, and have properties and methods defined by the String prototype.
// They are mutable, meaning their properties can be changed after creation
// Comperatively slower to proccess than primitive strings

// Type: Primitive strings are of type string, while string objects are of type object.
// Equality: Comparing two primitive strings with the same value using == or === will return true, because their values are compared. Comparing two string objects with the same value will return false when using ===, because they are different objects in memory.
// Performance: Primitive strings are generally faster and more efficient because they are not objects and do not have the overhead associated with objects.

// ?Task: Create a primitive string and a string object with the same value. Compare them using == and === to observe the difference. Explain the results in comments.

let primitiveStr = "Hello World";
let objectStr = new String("Hello World");
console.log(primitiveStr == objectStr, primitiveStr === objectStr);
// The first comparison is returning true because the loose equality performs type coercion to try and match the types before comparing their values. In this case, the string object is converted to a primitive string value. This conversion process is known as "unboxing."

// ?Task: Compare two string objects containing the same value using == and ===. Then, compare their values using the valueOf() method. Explain the outcomes.

let strObj1 = new String("Falcon");
let strObj2 = new String("Falcon");

console.log(strObj1 == strObj2, strObj1 === strObj2); // None of them returns true because, they are pointing to different object

// However, below both will return true because we are using the value of both variable to check the equality.
console.log(
  strObj1.valueOf() == strObj2.valueOf(),
  strObj1.valueOf() === strObj2.valueOf()
);

// !Comprehensive Assignment: Manipulating and Comparing Strings
// Objective: Combine all the lessons learned about strings into a single, comprehensive task.

// Task: Write a script that does the following:

// ?Prompt the user for their full name.
// ?Check if the name includes any quotation marks (single or double) and remove them.
// ?Split the name into first and last name assuming a single space separates them. Consider edge cases where there might be multiple spaces or none.
// ?Convert the first and last names to template strings that spell out each character on a new line.
// ?Compare the length of the first and last names using primitive values and as objects. Discuss the comparison in comments within your code.
// ?Finally, output a formatted address using a template string, including the sanitized name, a made-up street, city, and zip code, all on separate lines.

// Import readline module, to take input from user
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fullName = "";
let firstName = "";
let lastName = "";

// Explain and understand what is happening in the promise. Here we've creater new promise object with providing a callback function and which takes a resolve object to resolve it later.
// Note that the inheritly synchronous lines inside a promise constructor are NOT async, only the lines that are inheritly async are the line that runs asynchronously. such as rl.question function and the callback function inside it are async, because it waits for user's input.

function modifyString() {
  return new Promise((resolve) => {
    const askQuestion = () => {
      rl.question("Please enter full name: ", (fullName) => {
        let charArr = fullName.split("");
        let numberOfSpaces = 0;
        charArr.forEach((elem) => {
          if (elem === " ") {
            numberOfSpaces++;
          }
        });
        // if the user provides an input that has no space we promt the user to enter the their name agaiin
        if (numberOfSpaces !== 1) {
          console.log(
            "Please check the spaces entered in the input, must be only and atleast one space after the first name!"
          );
          askQuestion(); // Retry by asking again, recursively we call this function again
          // we don not call the whole modifyString function again because, that would create new promise instances, instead we call the askQuestion() function over and over, until the user do not input the correct first and last name
        } else {
          let name = charArr.join("");
          // If there are any quotes in the string provided we remove them
          if (charArr.includes(`"`) || charArr.includes(`'`)) {
            name = charArr
              .filter((char) => char !== `"` && char !== `'`)
              .join("");
          }
          resolve(name); //finally we resolve the name
        }
      });
    };
    askQuestion(); // Initial call to start the process
  });
}

// after resolving we call the .then method
modifyString().then((name) => {
  fullName = name;
  console.log(fullName);
  firstName = name.split(" ")[0];
  lastName = name.split(" ")[1];
  rl.close(); // Close readline interface after successful input

  // Converting Each character on a new line with template string
  let newStringWithLines = name
    .split("")
    .map((eachChar) => {
      return `${eachChar}\n`;
    })
    .join("");
  console.log(newStringWithLines);

  // Comparing both the firstName and lastName as primitive and as objects

  // primitive
  if (firstName.length > lastName.length) {
    console.log(`first name is bigger than last name`);
  } else if (firstName.length < lastName.length) {
    console.log("last name is bigger than first name");
  } else {
    console.log("both are equal");
  }

  // Comapring both as objects, the length property are same as the primitive lengths.
  const firstNameObject = new String(firstName);
  const lastNameObject = new String(lastName);
  if (firstNameObject.length > lastNameObject.length) {
    console.log(`first name is bigger than last name`);
  } else if (firstNameObject.length < lastNameObject.length) {
    console.log("last name is bigger than first name");
  } else {
    console.log("both are equal");
  }

  // A formatted address using template string
  console.log(
    `Name: ${fullName}
  Street: 26 w 21st St
  City: Deer Park
  State: New York
  Country USA`
  );
});
