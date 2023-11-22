// 1. In the game Ludu we use a dice whoes number is between 1 - 6, how can you print a random number between 1 - 6
// We can use the same function we used in our random tutorial

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(1, 6));

// 2. Lets say in you class you have many students, arrange them by their name Alphabetically
const student = ["Obaedur", "Farhan", "Golam", "Muhammad", "Abdullah"];
const numArr = [5, 10, 2, 1, 56];
console.log(student.sort());
console.log(numArr.sort());
// Notice that the numArr method is not sorted, because,
// sort method, by default, converts the numbers to strings and sorts them lexicographically (like words in a dictionary). Since "10" comes before "2" in lexicographical order, you get this ordering.

// 3. How can we arrange all student's roll number in a class room in ascending order
const rollNumber = [45, 65, 1, 36, 12, 39, 54, 7];
function sortNum(a, b) {
  return a - b;
}
let sortedRollNumber = rollNumber.sort(sortNum);
console.log(sortedRollNumber);

// Write a function to check if an year passed is leap year or not
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is a leap year!`;
  } else {
    return `${year} is not a leap year!`;
  }
}

console.log(isLeapYear(2026));

// 4. How can you determine how many vowels are there in a sentence
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  for (let letter of sentence) {
    console.log(letter);
    if (vowel.includes(letter)) {
      count++;
    }
  }
  return count + " Vowels";
}

console.log(countVowels("I Love Bangladesh"));

// We can achive this same result by converting the string into an array and the using the forEach method to see if the value exists in the array or not.

function counVowels2(sentence) {
  let count = 0;
  const letterArr = Array.from(sentence);
  letterArr.forEach(function (value, index, array) {
    if (vowel.includes(value)) {
      count++;
    }
  });
  return count + " Vowels";
}
console.log(counVowels2("I Love Bangladesh"));

// bring out the duplicate numbers from an array
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 1, 4];

// First way
const arr = [];
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      arr[arr.length] = numbers[i];
    }
  }
}
console.log(arr);

// Second method
const duplicates = numbers.filter(function (value, index, array) {
  let duplicateValIndex = array.indexOf(value);
  let curValIndex = index;
  {
    // This block of code is for understanding the logic
    // The key thing to understand here is indexOf() method returns the first occurance of a number, even if you are searching with another duplicate number.
    // [5 (a) , 5 (b)] even if you are searching with 5 (b) it will return the first index of 5, which is 5 (a)
    console.log(value + ":", duplicateValIndex, curValIndex, "<--");
  }
  return duplicateValIndex !== curValIndex;
});
console.log(duplicates);
