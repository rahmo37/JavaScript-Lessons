// Given a nested array, write a function flattenArray(arr) that returns a new array with all nested arrays flattened.
// Example:
// javascriptCopy code
// flattenArray([1, [2, [3, 4], 5], 6]); // Output: [1, 2, 3, 4, 5, 6]

// The some method is a built-in array method in JavaScript that tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value: true if at least one element satisfies the provided testing function, and false otherwise.

// Here's a breakdown of how it works:

// The some method loops through each item in the array.
// For each item, it runs the provided testing function.
// If the testing function returns true for any item, the some method stops looping and returns true.
// If the testing function returns false for all items, the some method returns false.

const nestedArray = [1, [2, [3, 4], 5], 6];
// const flattened = [];

// function flattenArray(nestArr) {
//   for (let i = 0; i < nestArr.length; i++) {
//     if (nestArr[i] instanceof Array) {
//       flattenArray(nestArr[i]);
//     } else {
//       flattened.push(nestArr[i]);
//     }
//    }
// }
// flattenArray(nestedArray);
// console.log(flattened);

// Another Way
// Explanation will follow
function flattenArray(nestArr) {
  const flattened = [];
  for (let i = 0; i < nestArr.length; i++) {
    if (Array.isArray(nestArr[i])) {
      // Recursively flatten and merge with the current flattened array
      flattened.push(...flattenArray(nestArr[i]));
    } else {
      flattened.push(nestArr[i]);
    }
  }
  return flattened;
}
console.log(flattenArray(nestedArray));

// Here is the step by step explanation
// This const nestedArray = [1, [2, [3, 4], 5], 6]; array is passed in the flattenArray function,
// first we call a variable called flattened and initialize it to an empty array
// the for-loop we have loops untill i is less then the size of nestArr.length
// now the if condition is checking if the first element is an Array or not. what happens if the element is an Array i will explain later, but first lets see if the element is not an array what do we do
// well if the element is not an array we simply push it inside the flattened variable
// now starts the intersting part,
// for the first element in the Array passed which is: const nestedArray = [1, [2, [3, 4], 5], 6]; is not an array so we simply push it inside the flattned array
// now the second element is indeed an array so we go inside the if block and we push all the element inside the Array, inside the flattened array, but at first this job is in a pending state, bucause we called the flattenArray() function again inside the flattend.push() and await for the flattenArray(nestArr[i])) to return a result.
// now when we are in the second(as in second call from inside the original's body) flattenArray() method has the array [2, [3, 4], 5] passed in
// Same functionality happens again a new flattened variable is created with empty array
// A new for-loop is created and it will again loop untill i is less that the passed in array's length.
// now inside the if statment, when starting from the first element which is 2, its not an array so we simply push it inside the new flattened variable
// now the next element is an array, now we again push the entaire array inside the flattened variable but it is again going to go in a pending mode since we call the flattedArray() again
// when called again we passed the array with [3, 4]
//  now inside this new version of the flattedArray() we create another variable called flattened and provided it an empty array
// In the if statement inside the for-loop we go to the else statement twice since the 3 and 4 both are not array. where both the element were pushed to the flattened variable
// Now for the first time flattedArray() returns a value which is flattend an array with the elements [3, 4];
// when returned the pending flattened.push from the previous version of flattedArray() function gets element to push inside its array which is 3 and 4, so that version if the flattened now has [2,3,4];
// When it completes it for loop flattened will have [2,3,4,5] since 5 was a regular element as well and it went in the else statement
// finally the original pending.push gets its value with [2,3,4,5] and insrets them in the original flattend variable array, which previously had 1 inside it, well now it has, [1, 2, 3, 4, 5]
// finally the last loop runs and insters 6 from the else block inside the flattend variable array, since 6 is not an array
