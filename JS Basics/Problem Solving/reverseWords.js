// 9.	Reverse Words in a Sentence Write a function reverseWords(sentence) that takes a string of words and returns a new string where the words are reversed but their order remains the same. Example:
// javascriptCopy code
// reverseWords("Coding is fun");  // Output: "gnidoC si nuf"

// mySolution
// function reverseWords(snt) {
//   const wordArr = snt.split(" ");
//   reverseSnt = "";
//   for (let i = 0; i < wordArr.length; i++) {
//     for (let j = wordArr[i].length - 1; j >= 0; j--) {
//       reverseSnt += wordArr[i][j];
//     }
//     reverseSnt += " ";
//   }
//   return reverseSnt;
// }

// console.log(reverseWords("Coding is fun"));

// chatGpt solution
function reverseWords(snt) {
 const wordArr = snt.split(" ");
 const reversedWords = wordArr.map(word => word.split("").reverse().join(""));
 return reversedWords.join(" ");
}

console.log(reverseWords("Coding is fun"));  // Output: "gnidoC si nuf"
