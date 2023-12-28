//! A map has similarities with an Object, A Map has key value pair just like an object, but the key can be any data type
// And a set has similarities with an Array, in An Array there could be many values with duplicates, On the other hand set can have many values but each value has to be unique

// lets define an object
const person = {
  firstName: "Obaedur",
  lastName: "Rahman",
};

// Here we are accessing the first key and using the typeof operator to judge its value
console.log(typeof Object.keys(person)[1]); // String

// In an object which order you enter a key is not important, they may not maintain or retain the original insertion order, but in a map the way you insert an item matters and will be kept.

// Map has a size property

// How can you create a map?
// There are two ways,

// You can create a map by passing an Array or Arrays(2d Array) to the new Map() constructor

const newMap = new Map([
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
]);

console.log(newMap);

// You can define a blank Set and add elements too it later by using set method

// Blank set
const fruit = new Map();

// Set Map Values
fruit.set("apples", 4);
fruit.set("bananas", 3);
fruit.set("oranges", 2);

//! Note that the first argument is the key and the second one is the value

// Lets demonstrate that a key can be any datatype

const obj = {
  test: "test",
};

const arr = [1, 2, 3, 4];

const myMap = new Map();
myMap.set(obj, "Test Obj");
myMap.set(arr, "Test Arr");
myMap.set(2, "Number Two");
console.log(myMap);
console.log(myMap.get(obj));

// With set method you can even change an existing key's value
fruit.set("oranges", 8);
console.log(fruit);

// get() method simply gets the value of the spcified key

console.log(fruit.get("oranges"));

// Size property returns the size of my map
console.log(fruit.size);

// Delete() method deletes a value
fruit.delete("apples");
console.log(fruit);

// clear method clears a Map
fruit.clear();

console.log(fruit);

// the has() function will see if a value is present in a map or not, if it is it returns true if not it returns false

console.log(myMap.has(2));

// A map is an object
console.log(typeof myMap);

// To see if a variable is an instance of a map or not we use the instanceof method
console.log(myMap instanceof Map); // returns true

// Map is iterable

for (let entries of myMap) {
  console.log(entries);
}

// Map has a forEach method

let anotherMap = new Map();
anotherMap.set(0, "Alhamdulillah");
anotherMap.set(1, "SubhanAllah");
anotherMap.set(2, "Alhamdulillah");

anotherMap.forEach(function (value, key) {
  console.log(value, key, "<--");
});

// Map has a value() method that returns an iterator object with all the values

let myValIterator = anotherMap.values();

for(let val of myValIterator) {
  console.log(val);
}


// Similarly keys method returns all the keys
let myKeyIterator = anotherMap.keys();
for(let key of myKeyIterator) {
  console.log(key);
}


// Entries() method returns key and value pair as an iterable object 
let myKeyValIterator = anotherMap.entries();
for(let key of myKeyValIterator) {
  console.log(key);
}