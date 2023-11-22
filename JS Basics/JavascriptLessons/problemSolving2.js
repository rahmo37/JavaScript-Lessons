// Find how many times moons is found in the given sentense bellow, and which index has the first occurence of moon

const text =
  "The moon has always fascinated humans. Many songs and stories revolve around the moon. Neil Armstrong walked on the moon in 1969. People often gaze at the moon, wondering about its mysteries. Some believe there are hidden bases on the moon. Even when we explore further into space, the moon remains an iconic symbol of exploration.";
let regex = /moonss/gi;
let result = `Number of times moon occured: ${
  text.match(regex) ? text.match(regex).length : 0
} \nAnd the first index is at: ${text.search(regex)}`;
console.log(result);

// write a function that takes an array, and an input, then search the array for the input given, if found return the index, if not return not found

// first way
function linearSearch1(arr, input) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      return i;
    }
  }
  return "Not found!";
}
console.log(linearSearch1([50, 14, 53, 39], 50));

// second way
function linearSearch2(arr, input) {
  let resultArr = arr.map(function (value, index) {
    if (value === input) {
      return index;
    }
  });
  let result = resultArr.sort()[0];
  return result !== undefined ? result : "Not found!";
}

console.log(linearSearch2([50, 14, 53, 39], 12));

// Find the longest string in an array, and return its index;

let arrOfString = ["Hello", "Hi", "Rayquaza", "World", "Pokemon"];

// First way
function longestString(arr) {
  let j;
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i].length >= arr[j].length) {
        continue;
      } else {
        break;
      }
    }
    if (j === arr.length) {
      return [arr[i], i];
    }
  }
}
console.log(longestString(arrOfString));

// second way
function longestString2(stringArr) {
  let longestString = "";
  for (let str of stringArr) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  }
  return [longestString, stringArr.indexOf(longestString)];
}
console.log(longestString2(arrOfString));

// findout which numbers are divisible by 3 , 5 and 3 and 5, in numbers 1-100

function divisbleNumbers(length) {
  let numArr = [];

  for (let i = 1; i <= length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArr.push(i);
    } else if (i % 3 === 0) {
      numArr.push(i);
    } else if (i % 5 === 0) {
      numArr.push(i);
    }
  }
  return numArr;
}

console.log(divisbleNumbers(200));

// Lets Say you have an array which has falsy and truthy values take out the falsy values from the array
// first way
let arr = [10, false, undefined, "", 6, 1, 4];
function takeOutFalsyValues(arr) {
  return arr.filter((value) => value);
}
let filteredArr = takeOutFalsyValues(arr);
console.log(filteredArr);

// Second Way
console.log(arr.filter(Boolean)); // Values are passed in the Boolean method if true, it taken, if false, its rejected

// Delete Falsy values from an object

let mixedValues = {
  a: "lws",
  b: undefined,
  c: "learn with sumit",
  d: false,
  e: "",
  f: "apple",
};
function deleteFalsyValues(anyObj) {
  for (let key in anyObj) {
    if (!anyObj[key]) {
      delete anyObj[key];
    }
  }
  return anyObj;
}

let obj = deleteFalsyValues(mixedValues);
console.log(obj);
