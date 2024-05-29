const e = [];
const a = [3, 4];
const b = [5, 7];
const o = {
  v1: 4,
  v2: 3,
};

let func = function () {
  return o.v1 + o.v2;
};

const arr = [[3, 4], [5, 7], "v", o, func];
arr[arr.length] = e;

// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// console.log(arr.toString());

// intoduced the array method at()
// console.log(arr.at(2));

// The join() method joins all array elements into a string.
// console.log(arr.join( "   |    " ));

// The pop() method removes the last element from an array:
console.log(arr.pop());

// The push() method adds a new element to an array (at the end):
arr.push("String");
console.log(arr);

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
arr.shift();
console.log(arr);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
arr.unshift("jkasdh");
console.log(arr);

// delete keyword
// delete arr[0];
// console.log(arr);

// Splice method
let arr2 = [0, 1, 2, 3, 4, 5, 6];
arr2.splice(3, 2);
console.log(arr2);

// The concat() method creates a new array by merging (concatenating) existing arrays:
// The concat() method does not change the existing arrays. It always returns a new array.
const arr3 = arr.concat(arr2);
console.log(arr3);

// Three array merge
console.log(arr.concat(arr2, arr3));
