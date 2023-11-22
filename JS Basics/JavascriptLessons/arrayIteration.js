// Array iteration methods operate on every element in an array

// the forEach() method in prototype Array
// forEach method takes a function, that function can have 3 parameters, value, index, array. A for each method calls that function for each element in that array and apply that function for each element

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
}
numbers.forEach(myFunction);
// so for each element in the array myFunction method is called and forEach method passes the current value, the index of the current value and the entire array.
// The forEach method does not return any sesical value just returns undefined

// map method on the other hand returns a new array after applying the called function on each element
// for example
function multiplyValueAndIndex(value, index, array) {
  return value * index;
}

const newArray = numbers.map(multiplyValueAndIndex);
console.log(newArray);
// map function returned a new array after applying the function code, we saved the new array on the newArray variable

// Then we have the filter method which filters the element according to the condition we specified and returns a new array
// takes one function in its parameter and passes value, index and array in the function
// for example
function filterElement(value, index, array) {
  return value > 10;
}

const numbersGreaterThanTen = numbers.filter(filterElement);
console.log(numbersGreaterThanTen);

// the reduce method is an useful method that accumulates the values inside array to a single value
// the reduce method takes one function as its parameter and sends , four parameters
// unlike map, filter and forEach, the redude method takes an extra parameter called total.
// also The reduce function can take a second parameter, where you can define the initial value of the "total" parameter
// if the second parameter is not defined in the reduce function the initial value of the total parameter will be the value of the first index of the array
// Values are added from left -> Right
// Lets see an example

function accumulate(total, value, index, array) {
  return total + value;
}

let accumulatedValue = numbers.reduce(accumulate, 50);
console.log(accumulatedValue, "<==");

// ReduceRight() works the same way but adds the value from right to left
// Lets see an example
accumulate = function (total, value, index, array) {
  console.log(total);
  return total + value;
};
accumulatedValue = numbers.reduceRight(accumulate);
console.log(accumulatedValue);

// One thing to note in both of these methods is that when no initial value is set for the total variable,
// the total variable is set to the first element in the array for reduce, or the last element in the array for reduceRight.
// The value parameter is then set to the second element of the array for reduce, or the second-to-last element for reduceRight.

// Then we have the every() method, which checks if every element in an array meets a specific condition or not, if all the elements in an array passes a test the function returns true, if one of the element fails the test, the array returns false.
// This function also passes value, index and array
// for example
function checkValidity(value, index, array) {
  return !isNaN(value);
}

const newNumArr = [10, 50, 40, 30];

let result = newNumArr.every(checkValidity);
console.log(result);
// If one of the number from this array was not a number, then the whole expression would've been false

// The some method is almost similar to every method, but in this method if even one value passes the test, the expression returns true. for example
function checkNumbers(value, index, array) {
  return value < 15;
}
// In the above array 10 is less then 15 so it returns true

result = newNumArr.some(checkNumbers);
console.log(result);

// You can check which position, an array elemnt is, in an Array by using the indexOf method.

console.log(newNumArr.indexOf(50));
console.log(newNumArr.indexOf(500));
// If an array element is not found it returns -1

// Another useful method is lastIndexOf, which returns the last index of an element, for example, lets say that you have duplicate values in an array, 15 and 15, and you are trying to search the last 15's index, you can use as following
// lets add duplicate numbers in the array first, we can use the splice method we learned from the previous lesson

newNumArr.splice(2, 0, 15);
newNumArr.splice(4, 0, 15);
// added 2, 15s in the array

console.log(newNumArr.lastIndexOf(15));
// returned the last index of 15

// the includes method returns true if a specified item is in the array
console.log(newNumArr.includes(50));

// We have another method called find() which returns the first value that passes a test.
// Takes a function as a parameter and passes value, index and array in that function
// returns the value it self

function findTheValue(value, index, array) {
  return value < 12;
}

let theValue = newNumArr.find(findTheValue);
console.log(theValue);

// you can you the findIndex method to find the index of value, everything is as same as find() method

// you can create an array from any iterable Object by using Array.from, iterable means, you can go through that object value or keys, one by one
// lets create an object, then make an array from that object's keys
const anObj = {
  name: "chilliPlant",
  chillis: 6,
  color: "green",
  numberOfPLants: 5,
};
// By using the Object.keys we are extracting the keys from that Object
// And with Array.from we we are creating an array from those keys
let arrayOfKeys = Array.from(Object.keys(anObj));
console.log(arrayOfKeys);

// you can make a whole string an array since a string is also iterable 
let str = "ABCDEFGHIGKLMNOPQRST";
console.log(Array.from(str));