// 12.	Square of a Sorted Array Write a function sortedSquares(arr) that takes an array of integers sorted in non-decreasing order and returns an array of the squares of each number, also in sorted non-decreasing order. Example:
// javascriptCopy code
// sortedSquares([-4, -1, 0, 3, 10]); // Output: [0, 1, 9, 16, 100]



// myVersion
// function sortedSquares(arr) {
//   let unsortedArr = arr.map(function (value) {
//     return value * value;
//   });

//   let currentPosition;
//   let currentMinimum;
//   let currentItem;
//   let currentMinimumIndex;

//   for (let i = 0; i < unsortedArr.length; i++) {
//     currentPosition = unsortedArr[i];
//     currentMinimum = unsortedArr[i];
//     currentMinimumIndex = i;
//     for (let j = i + 1; j < unsortedArr.length; j++) {
//       currentItem = unsortedArr[j];
//       if (currentItem < currentMinimum) {
//         currentMinimum = currentItem;
//         currentMinimumIndex = j;
//       }
//     }
//     // console.log(currentMinimumIndex ,unsortedArr[currentMinimumIndex]);
//     unsortedArr[i] = currentMinimum;
//     unsortedArr[currentMinimumIndex] = currentPosition;
//     console.log(unsortedArr, currentMinimumIndex);
//   }
//   return unsortedArr;
// }
// console.log(sortedSquares([-4, -1, 0, 3, 10]));


// chatGPT version 
function sortedSquares(arr) {
  let squaredValues = arr.map(value => value * value);

  for (let i = 0; i < squaredValues.length; i++) {
    let currentPosition = squaredValues[i];
    let currentMinimum = squaredValues[i];
    let currentMinimumIndex = i;

    for (let j = i + 1; j < squaredValues.length; j++) {
      let currentItem = squaredValues[j];
      if (currentItem < currentMinimum) {
        currentMinimum = currentItem;
        currentMinimumIndex = j;
      }
    }

    squaredValues[i] = currentMinimum;
    squaredValues[currentMinimumIndex] = currentPosition;
  }
  
  return squaredValues;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));  // [0, 1, 9, 16, 100]
