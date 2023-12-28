// ! A map holds a key value pairs where the keys can be anydata type, it distinguishes it self from regular object in JS, because the keys in a JS object is string
// A map remembers the original insertion order of the keys
// Map DS is directly iterable using for..of loop

//* some methods of Map
// new Map() --> creates a map object
// set() --> sets the value for a key in a Map
// get() --> gets the value for a key in a Map
// delete() --> you can specify the key and the corresponding value will be deleted()
// has() Returns true if a key exists in Map()
// forEach() Calls a function for each key/value pair in a Map
// entries() Returns an iterator with the [key, value] pair in a Map

// *Properties
// Size

//* Create a Map
// You can pass a nested Array of key and value to new Map()
// also you can create an blank map and use Map.set()

//* Lets create a Map() by passing a nested array in it
const quotesMap = new Map([
  [
    0,
    "To have something you never had, you need to do something you never did!",
  ],
  [1, "Genius is 99% hardwork, 1% talent"],
  [
    2,
    "You are a true failure, when you give up you dream!, other failures are just driving towards success",
  ],
]);

// So we have 3 key value pairs in this map
console.log(quotesMap);

// you can create a blank map() and then add key and values to it later by using the set method
const fruits = new Map();
fruits.set(0, "apples");
fruits.set(1, "oranges");
fruits.set(2, "bananas");
console.log(fruits);

//* Lets create a map who has different key types
const personMap = new Map();
personMap.set("fname", "Obaedur");
personMap.set("lname", "Rahman");
console.log(personMap);

//* get() method
// you can retrive a value from map using get()
console.log(personMap.get("fname"));

//* the size property just returns the size of the map
console.log(fruits.size);

//* the delete() method with the key passed deletes a value corresponding to that key
// passing 1 on the delete() method should delete orange from the map
fruits.delete(1);
console.log(fruits);

// The has() method returns true if the specified key is present in the map, false otherwise.
console.log(fruits.has(1)); // returns false, since we deleted orange earlier
console.log(fruits.has(0));

// clear() method clears the map
fruits.clear();
console.log(fruits); // all values are deleted

// Map object also have a forEach method but, instead of passing just value like other DS's forEach, this forEach also returns a key aswell, lets explore an example

quotesMap.forEach(function (value, key) {
  console.log(value, "--> Key", key);
});

// Now lets check if Map is iterable or not
for (let eachPair of quotesMap) {
  console.log(eachPair);
}
// Yeap its iterable, and in each loop it returns an array of key and value

// The entries() method just returns an iterable object which we can iterate through with for..of
for (let eachPair of quotesMap.entries()) {
  console.log(eachPair);
}
