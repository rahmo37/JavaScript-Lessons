let numbers = [0, 14, 2, 8, 9, 11, 4, 5, 13, 1, 3, 7, 6, 12, 10];

console.log(
  numbers
    .map(function (value) {
      return value + 5;
    })
    .join("---"),
  numbers.join("___")
);

// numbers.sort((a, b) => {
//   console.log(`Comparing ${a} and ${b}`);
//   return a - b;
// });

// console.log(data);
