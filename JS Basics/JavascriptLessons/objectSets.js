// We went through set before, but lets dive a bit deeper

// A JS set is a collection of unique values.
// Each value can occure once in a set.
// A set can hold any value of any data type

// Ways of creating a set,
// Passing an Array to a new set, all the duplicate value will be removed
// Creating a new Set and use add() to add values
// Create a new set and use add() to add variables

// Create a set by passing array

const Arr = ["a", "b", "c", "c"];

const letterSet = new Set(Arr);
console.log(letterSet);

// By using add method and passing value
const valueSet = new Set();
valueSet.add(1);
valueSet.add(3);
valueSet.add(6);
console.log(valueSet);

// By using add method and passing value

let var1 = "var1";
let var2 = "var2";
let var3 = "var3";

const variableSet = new Set();
variableSet.add(var1);
variableSet.add(var2);
variableSet.add(var3);
console.log(variableSet);

//! Note that all duplicate values will be removed

// forEach() method same as array

let count = 0;
function print(value) {
  console.log(value, count);
  count++;
}

letterSet.forEach(print);

// The values() method returns an Iterator object containing all the values in a Set.

//! Note that a set is already iterable

let myIterator = letterSet.values();

for (let val of myIterator) {
  console.log(val);
}

// Since a set does not have keys, keys() method will return values, same as values method() returns an iterator object

console.log(letterSet.keys());

// Entries method usually returns a key value pair

const obj = {
  name: "Obaedur Rahman",
  age: 21,
};

console.log(Object.entries(obj)); // [ [ 'name', 'Obaedur Rahman' ], [ 'age', 21 ] ]

// but since set does not have any keys, it just returns an iterator object with values in the set, twice

for (let val of letterSet.entries()) {
  console.log(val);
}

// To determine if a variable is set or not, we can use the instace of method to determine, we do have typeof keyword but it returns object since sets are considered as objects

// To see if variable is really aset or not we can use the instance of keyword

console.log(letterSet instanceof Set); // true
