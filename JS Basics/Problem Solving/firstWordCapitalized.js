// Write a function capitalizeWords(str) that takes a string of words separated by spaces and returns a new string where the first letter of every word is capitalized.
const str = "hello world from javaScript";

// First Way
// function capitalizeWords(str) {
//   const arrOfWords = str.split(" ");

//   return arrOfWords
//     .map((value) => {
//       let newWord = "";
//       // Each indexes returned from a string is a string
//       for (let index in value) {
//         if (index == 0) {
//           newWord += value[index].toUpperCase();
//         } else {
//           newWord += value[index];
//         }
//       }
//       return newWord;
//     })
//     .join(" ");
// }
// console.log(capitalizeWords(str));

// Second Way
function capitalizeWords(str) {
  // value.slice(1) is slicing from the index 1 and slicing it all the way to the end
  // if there is hello, value.slice(1) is slicing e to o (ello)
  return str
    .split(" ")
    .map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    })
    .join(" ");
}
console.log(capitalizeWords(str));
