// the indexOf() method returns the INDEX of the first occurrence of a specified text in a string

let text1 = "i have a hyndai ionic car";
console.log(text1.indexOf("have"));
// the letter h of the the word "have" starts at the index no 2
// so it returns 2
// you can also search for just a letter
console.log(text1.indexOf("i"));

// If it cant find a specified letter or word, the function will return -1

// The lastIndexOf() method returns the last occurrence of the specified letter or word.
console.log(text1.lastIndexOf("h"));
// the the last h occures at the 7th index

// for both the function you can specify where to search from. you can include the starting index at the second parameter

// one thing to note is that the lastIndexOf method searches from the end of the string, if you search for i, in the above text and pass 6 (from the back). it should return the 0.
console.log(text1.lastIndexOf("i"));

// the search() method is same as indexOf() methods, but there are some differences. lets see an example
let text2 = "I have an acer laptop";
console.log(text2.search("a"));
// the search method cant take any second parameter, even if you provide the second parameter it will not be in effect
console.log(text2.search("a", 5));
// On the other hand indexOf() method cannot take regular expression values

// the match method takes a pattern in the text and returns every occurance of that pattern in an array.
// for example
let text3 = "The train in BRAIN games can be a pain on the mind";

// now the regular expression will return every occurance as an array
console.log(text3.match(/ain/g));

// but searching it like this will return the occurance once it the first index of that array, other indecies will contain unwanted information. so we are searching the index 0
console.log(text3.match("ain")[0]);

// we can use the include() method to find out if a letter or a word exists in a sentence or word.

console.log(text3.includes("train"));
// you can also add a second parameter to start from a different position
console.log(text3.includes("train", 10));

// you can check if a value starts with your specified string with the startsWith() method
console.log(text3.startsWith("The")); //will return true
// you can also inclue a second parameter

//you can check if a method ends with a specified string
console.log(text3.endsWith("mind"));

haystack = "sadbutsad";
needle = "sad";

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));