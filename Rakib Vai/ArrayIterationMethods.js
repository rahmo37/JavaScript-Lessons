// Array forEach()
// Purpose: Executes a provided function once for each array element.
const num = [4, 6, 7, 8];
num.forEach((element) => {
  console.log(element);
}); // Sync

// Array map()
// Purpose: Creates a new array with the results of calling a provided function on every element.
let newArray = num.map((element) => {
  return element * 2;
});
// console.log(newArray);

let mapElement = num.map((element) => {
  return [element].concat(0);
});
// console.log(mapElement);

// Array flatMap()
// Purpose: First maps each element using a function, then flattens the result into a new array.
let flatMapElement = num.flatMap((element) => {
  return [element].concat(0);
});
// console.log(flatMapElement);

// Array filter()
// Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
let fileterdArray = num.filter((element) => {
  return element % 2 === 0;
});
console.log(fileterdArray);

// Array reduce()
// Purpose: Executes a reducer function on each element of the array, resulting in a single output value.
let sum = num.reduce((acc, element) => {
  // console.log("Acc: " + acc , "Current Number: " + element);
  return acc - element;
});
// console.log(sum);

// Array reduceRight()
// Purpose: Executes a reducer function on each element of the array (from right to left), resulting in a single output value.
let sum1 = num.reduceRight((acc, element) => {
  console.log("Acc: " + acc, "Current Number: " + element);
  return acc - element;
}, 100);

console.log(sum1);

// Array some()
// Purpose: Tests whether at least one element in the array passes the test implemented by the provided function.

let num1 = [1, 3, 5];
let doesExsists = num1.some((element) => {
  return element % 2 === 0;
});
console.log(doesExsists);

// Array from()
// Purpose: Creates a new array from an array-like or iterable object.
let str = "12456";
let newArrFromString = Array.from(str, Number);
console.log(newArrFromString);

// Array keys()
// Purpose: Returns a new Array Iterator object that contains the keys for each index in the array.
let iterator = num1.keys();

for (let key of iterator) {
  // console.log(key);
}

// Array entries()
// Purpose: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let keyValuePairIterator = num1.entries();

for (let [key, value] of keyValuePairIterator) {
  // console.log(key, value);
}

// Array with()
// Purpose: Creates a new array with a modified element (doesn't mutate the original array).
let newArrayWithModifiedElement = num1.with(1, 6);
console.log(newArrayWithModifiedElement);

// Spread Operator (...)
// Purpose: Expands an array or object into its individual elements.
let newNumbers = [...num1, 7, 9, 10];
console.log(newNumbers);

let obj = { a: 2, b: 3 };
let newObj = {...obj, c: 4};
console.log(newObj);