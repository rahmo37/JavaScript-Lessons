const givenArray = [2, 9, 1, 18, 12, 4, 6, 9];
const resultArray = [];

// lets first find the highest number

function higestNum(arr) {
  let currentVal = 0;
  for (let val of givenArray) {
    if (currentVal < val) {
      currentVal = val;
    }
  }
  return currentVal;
}

// Now lets see what nums are missing
function findingMissingNums(largestNum) {
  let j;
  for (let i = 0; i < largestNum; i++) {
    for (j = 0; j < givenArray.length; j++) {
      if (i === givenArray[j]) {
       console.log(givenArray[j]);
        break;
      }
    }
    if (j === givenArray.length) {
      resultArray.push(i);
    }
  }
  return resultArray;
}

console.log(findingMissingNums(higestNum(givenArray)));


// Another Solution
// const givenArray = [2, 9, 1, 18, 12, 4, 6, 9];
// const resultArray = [];

// // Let's first find the highest number
// function highestNum(arr) {
//   let currentVal = 0;
//   for (let val of arr) {
//     if (currentVal < val) {
//       currentVal = val;
//     }
//   }
//   return currentVal;
// }

// // Use a Set to keep track of the numbers in the array
// const numSet = new Set(givenArray);

// // Now let's see what nums are missing
// function findingMissingNums(largestNum) {
//   for (let i = 0; i <= largestNum; i++) {
//     if (!numSet.has(i)) {
//       resultArray.push(i);
//     }
//   }
//   return resultArray;
// }

// console.log(findingMissingNums(highestNum(givenArray)));
