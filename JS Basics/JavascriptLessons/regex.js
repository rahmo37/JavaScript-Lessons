// ! In simple terms, regex (short for regular expression) in JavaScript is a pattern that allows you to match and find certain combinations of characters within strings. It's like a special code that can search for specific text patterns in a string.

// another defination
// ! A regular expression is a sequence of characters that forms a search pattern, The search pattern can be used for TEXT SEARCH and TEXT REPLACE operations

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// In a regular expression you can you a single character or a more complicated pattern

// A regular expression can be used for all types of text search and text replace operations

// * General Syntax
// ! /pattern/modifiers

// Pattern: This is the main part of a regular expression. It describes the specific sequence of characters you're searching for or trying to match. For example, in the regex /hello/, the pattern is hello, which will match the word "hello" in any string.

// These are optional flags that affect the search. They can alter how the pattern searches through strings. Here are a few common modifiers in JavaScript:

/**
 * g: Global search
 * i: Case-insensetive search
 * m: multiline search. etc
 */

// Example /W3school/i, in the example we are searching for a the word W3chool, and the word is case-insensetive, meaniing even if it is upper-case or lower-case it does not matter

//* Using String Methods
// In JS, regex are often used with only two string methods: search() and replace().

// *search() method
/**
 * this method uses an expression and search for a match
 * then returns the position of the match
 */

// search() method using a string expression
let text = "I love Bangladesh love";
let position = text.search("love");
console.log(position); // 2

// couple of things to notice here
// only exact match(including casing) are considered as a successful match
// other wise it returns -1
// returns the first occurence of the specified argument

// search() method using a regular expression
position = text.search(/love/i); // 2
console.log(position);

// Notice the syntax and the result
// Just passed the pattern we are looking for and provided the i modifier
// "i" signifies case insensivity
// you may ask Love is a word, why did you say its a pattern, because, it need not to be a complete word, you can search with a part of the word, and it will return the first occurance of the specified pattern

// *replace() method
/**
 * replace method returns a MODIFIED string, where the pattern is replaced
 */

// replace() method using a string expression
text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result);

/**
 * Notice the syntax, first you pass, what you are searching for, and you pass what you want to replace it with
 * Now it needs to be an exact match, no case insensivity
 * If cannot find the specified text, nothing will change
 * Will replace the first occurance
 */

// replace() method with regex
result = text.replace(/Microsoft/i, "Google");
console.log(result);

/**
 * Same as the search method, replacing microsoft with google
 * Replacing the first occurance
 */

// Additionally there is match() method, that returns array of results
// lets see an example
text = "I love cats and i love dogs";
result = text.match("love");
console.log(result);
// with the array it also returns some additional information about the result

// You can also use regex expression
result = text.match(/love/gi);
console.log(result);
// returns an array of every occurance of the text we are searching for

// g flag modifier
// if you want to replace a text with all the occurance of a specific pattern you can use the g flag, lets see an example

let pepe = "pakhi paka pepe khay";
// lets replace all the p with f
result = pepe.replace(/p/gi, "f");
console.log(result);

// m flag modifier
// if there is a text that spans multilines and you want to replace them all, you can use the m flag, lets see an example
text = "pokemon games are real fun \n i love pokemon games";
result = text.replace(/are/i, "is").replace(/pokemon games/gm, "coding");
console.log(result);
// In this example we are first replaceing the are with is, this is simply how we did before. but then we used the g and m flag to replce the words that are evne in the multilines.
// Used method chaining

// using bracket search, []

// Find any characters between the brackets [abc]
text = "Pakhi paka pepe khai";
result = text.match(/[abp]/gi);
console.log(result);

// Find any digits between the brackets [0-9]
text = "45127859";
result = text.match(/[5-7]/g);
console.log(result);
// when ever the result is more than 1, the additional information that comes with the result is replaced with every occurance of the string we are searching for.

// the or search |
// When you use the | symbol, it allows you to match either the pattern on its left or the pattern on its right
result = text.match(/5|6/g);
console.log(result);

// You can group multiple patterns using parentheses:
// you can even save the regex in a variable and pass it later in the method
let regex = /(blue|red) car/g;
text = "I saw a blue car and then a red car.";
result = text.match(regex);
console.log(result);

// metacharacters, \d,\s,\b
// \d matches anycharacter from 0 to 9
regex = /\d/g;
text = "I am 25 years old.";
result = text.match(regex);
console.log(result);

// \s: Matches any whitespace character (spaces, tabs, and line breaks)
regex = /\s/g;
text = "Hello World! How is everyone";
result = text.match(regex);
console.log(result);

// \b find a word at the biggining of a word or at the end of a word for example

regex = /\bwar|at\b/g; // This expression is both searching for a word with war at the beggining or a word wit at at the end
text =
  "What is the warhead means, i know what a warrior is , but what is warhead?";
result = text.match(regex);
console.log(result);

// Quantifiers

// n+
text = "hellooo world! Hello W3Schools!";
result = text.match(/o+/g);
console.log(result);

// So the n+ looks for consequtive occurance of the specified character or sting,
// in this case we specified that we are looking for o, so it looked for the consequtive amount of o(s) in the string, lets see another example

result = text.match(/[a-d]+/gi);
console.log(result); // In this case we were looking for charcters from a to d and we found d and c

//n* this returns 0 or more occurence of the specified character, you can specify what letters you are looking to have your specified chracter with. lets define it with an example,

result = text.match(/lo*/gi);
console.log(result);
// so whats happening here is, i am looking for the letter l and also i am looking any occurence of o, 0 or more times, meaning, i am looking for 1 l, but if there is any o with it, its also fine, and even if the occurence is more than one time, i am fine.

// n? Matches any string that contains zero or one occurences of n
// meaning, if the occuerence is 0 or one i will accept it otherwise, reject the whole search and return null
text = "I love colour red";
result = text.match(/colou?r/);
console.log(result);
// I am saying i am going to take the word colo and then if there is a u, occuring o or 1 times i am going to accept that, but there has to be an r in the end.

// The test method of regex
// Tests the regex pattern on a specific string and returns true or false, according to the result
let regPattern = /e/gi;
console.log(regPattern.test(text));

// Same as test, just returns the actual value instead of true or false. The exec method returns the result it self not a boolean value
console.log(regPattern.exec(text));
// you can save the result and access its first index

// since you called the exec method on regPattern once its index is saved on the last e that it found before, so we need to reset the lastIndex to 0, and then initiate the exec method again
regPattern.lastIndex = 0;
result = regPattern.exec(text);
console.log(result[0]);
