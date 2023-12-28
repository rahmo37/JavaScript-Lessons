// An iterable object is an object that allows you to go through its elements one by one, typically using a loop. In many programming languages, examples include arrays, lists, and strings.
// what objects in JS are iterable ?
// Previously we saw that array and strings are iterable.

// At the same time you can loop over a set,
const letter = new Set(["a", "b", "c"]);

for (const x of letter) {
  console.log(x);
}

// You can also iterate over a map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["orange", 200],
]);
for (const x of fruits) {
  console.log(x);
}
