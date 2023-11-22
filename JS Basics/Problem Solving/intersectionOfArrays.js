// Given two arrays, write a function findIntersection(arr1, arr2) that returns an array containing their intersection.
// Example:
// javascriptCopy code
// findIntersection([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]

//* My solution
// function findIntersection(arr1, arr2) {
//   return arr1.filter((value) => {
//     return arr2.includes(value);
//   });
// }
// console.log(findIntersection([1, 2, 3, 4], [3, 5, 4, 6]));

// chatGPT solution
function findIntersection(arr1, arr2) {
 let set1 = new Set(arr1);
 let intersection = [];

 for (let value of arr2) {
   if (set1.has(value)) {
     intersection.push(value);
     set1.delete(value);  // Ensure each value is counted only once
   }
 }

 return intersection;
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
