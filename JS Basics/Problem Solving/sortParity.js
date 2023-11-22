// 10.	Sort Array by Parity Write a function sortParity(arr) that takes an array of integers and returns a new array where all even numbers appear before the odd numbers, but their relative order remains the same. Example:
// javascriptCopy code
// sortParity([3, 4, 1, 2]); // Output: [4, 2, 3, 1]


// MySolution

// function sortParity(arr) {
//   const even = [];
//   const odd = [];
//   let combinedArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }
//   combinedArr = [...even, ...odd];
//   return combinedArr;
// }
// console.log(sortParity([3, 4, 1, 2]));

// The reason it's called "Sort Array by Parity" is that you're essentially sorting the array based on the parity (even or odd status) of each element. Even numbers have even parity, and odd numbers have odd parity. So the array gets sorted in a way that all numbers of the same parity are grouped together.


// ChatGPT Solution

function sortParity(arr) {
 const even = arr.filter(x => x % 2 === 0);
 const odd = arr.filter(x => x % 2 !== 0);
 return [...even, ...odd];
}

console.log(sortParity([3, 4, 1, 2]));  // Output should be [4, 2, 3, 1]
 // Output should be [4, 2, 3, 1]

