const fruits = ["Banana", "Orange", "Apple", "Mango"];
// The sort() method sorts an array alphabetically by default.
// fruits.sort();

// console.log(fruits);

// The reverse() method reverses the elements in an array.
// fruits.reverse();

// console.log(fruits);

// toSorted(), which sorts an array without altering the original array.
const newFruits1 = fruits.toSorted();
// console.log(fruits);
// console.log(newFruits1);

// toReversed(), which reverses an array without altering the original array.
const newFruits2 = fruits.toReversed();
// console.log(fruits);
// console.log(newFruits2);

const numArr = [5, 2, 10, 100, 78];
numArr.sort((a, b) => a - b);
// console.log(numArr);
numArr.sort((a, b) => b - a);
// console.log(numArr);

// Use a sort function to shuffle an array randomly.
numArr.sort(() => Math.random() - 0.5);
// console.log(numArr);

// Math.min
// console.log(Math.min.apply(null, numArr));

// Math.max
// console.log(Math.max.apply(null, numArr));

// Home made min function
function deriveMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

// console.log(deriveMin(numArr));

// Home made max function
function deriveMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

console.log(deriveMax(numArr));

// Sort object
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort((a, b) => a.year - b.year);
// console.log(cars);

// Sort the cars by type
cars.sort((a, b) => {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();

  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log(cars);
