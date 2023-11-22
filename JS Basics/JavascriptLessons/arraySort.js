// We can sort the elements in an array, with the sort method
const alphabetArr = [
  "k",
  "m",
  "a",
  "z",
  "r",
  "q",
  "b",
  "j",
  "w",
  "g",
  "f",
  "n",
  "d",
  "p",
  "x",
  "s",
  "v",
  "h",
  "e",
  "o",
  "i",
  "c",
  "u",
  "t",
  "y",
  "l",
];
console.log(alphabetArr.sort());

// you can also reverese an array
console.log(alphabetArr.reverse());

const numArr = [9, 10, 7, 6, 4, 5, 2, 1, 3];
// To start sorting a number array we first need to learn about the compare function
// Inside the sort function we can pass our compare function, in the parameter we pass two parameter, a and b. if we intend to sort in ascending order we provide return a - b in the function and if we want to sort in descending order we prvide, return  b - a

// Now the compare returns a negetive, zero or posetive value, the syntax is

// ascending
numArr.sort(function (a, b) {
  console.log(a, b);
  return a - b;
});
console.log(numArr);

// descending
numArr.sort(function (a, b) {
  console.log(a, b);
  return b - a;
});
console.log(numArr);
// now a and b in parameter is a set of numbers in the array and they are compared.
// if the comparison result is negetive, a is sorted before b
// if the comparison result is posetive, b is sortd before a
// if the result is 0, no changes are done with the sort order of two values

// You can srot an array randomly my using Math.random();
// lets first see what math.random returns
console.log(Math.random());
// Math.random returns a number between 0.0 to 1

// now in our sort function we can use the Math.random(), when a random number is returned, if we substract that number from 0.5, so the result will be negetive or posetive. Depending on this result, we can sort our array. so the sorting will be random
numArr.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log(numArr, "Random Array");

// Another way to randomize the array elements is by using the fisher yates algorithm

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points, "fisher yates");

// To return a highest or lowest value in an Array we can use the Math.max() and Math.min() methods. for example
console.log(Math.max(...points));
console.log(Math.min(...points));
// Best way to use it is the spread operator inside the parameter of Math.max or Math.min

// But you can do it a little different way using the .apple
// for example
console.log(Math.min.apply(null, points));
console.log(Math.max.apply(null, points));
// first parameter is null and then you pass the array you want to sort

// If your array have many objects in it, and you want to sort the objects, according to one of its property, you can use the sort method again. Lets define three objects in an array.

const objArr = [
  { name: "Rayquaza", catagory: "Legendary", level: 100 },
  { name: "Mew", catagory: "Mythical", level: 65 },
  { name: "Blaziken", catagory: "Regular", level: 85 },
];

// Now first lets sor the array with level
objArr.sort(function (a, b) {
  return a.level - b.level;
});
console.log(objArr); // sorted according to the level ascending

// you can even sort the array of objects with one of the string properties from each object
// we just need to convert each string to lowercase, since JS is case sensetive
// After truning them into lowercase we will save the values in a different variable, so the operation will be easier.
// lets sort by name
// we are going to sort by the unicode value of each string

objArr.sort(function (a, b) {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  // we know if a function returns a value in any point of the function, the lines after that are not read
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(objArr); // sorted by their name
