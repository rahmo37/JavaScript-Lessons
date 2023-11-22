// 11.	Search Insert Position Given a sorted array and a target value, write a function searchInsert(arr, target) that returns the index where the target is found. If not, return the index where it would be if it were inserted in order. Example:
// javascriptCopy code
// searchInsert([1, 3, 5, 6], 5); // Output: 2

// My Solution
// function searchInsert(arr, target) {
//   const arrLength = arr.length;
//   let valueIndex = undefined;
//   if (arr[arrLength - 1] < target) {
//     return arrLength;
//   }
//   arr.forEach(function (value, index) {
//     if (value === target) {
//       valueIndex = index;
//     }
//   });
//   if (valueIndex === undefined) {
//     for (let i = 0; i < arrLength; i++) {
//       if (target < arr[i]) {
//         valueIndex = i;
//         return valueIndex;
//       }
//     }
//   } else {
//    return valueIndex;
//   }
// }

// console.log(searchInsert([1, 3, 5, 6], 5));

// ChatGPT solution
function searchInsert(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) {
      return i;
    }
  }
  return arr.length;
}

console.log(searchInsert([1, 3, 5, 6], 6)); // Outputs: 2
