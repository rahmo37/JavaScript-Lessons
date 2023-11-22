// ! In JavaScript, a Set is a built-in object that lets you store unique values of any type, whether they're primitive values or object references.

// Each value in a set must be unique

// you can store any value type, primitives and references like array or other objects

// arrays dont have any indexes, you cannot access them by a numeric index

// Now sets are iterable, you can loop over their values

// *Set DataStructure has some methods, such as,
// new Set() --> creates a new set
// add() --> adds a new element to the set
// delete() --> removes an element from a set
// has() -- > checks if a value is present in the set and return tru or false
// forEach() --> invokes a callback function for each element in the set
// values() retruns an iterator with all the values in a set

// *Property
// size

//* How can you create a set?
// you can pass an Array to the new Set()
// create a new set and use add() to add values
// create a new set and use add() to add variables

//* new Set(), add(), forEach() method
function printValues(value) {
  console.log(value);
}

const testArr = [10, 20, 30, 40];

const numSet = new Set(testArr);
// lets use the forEach to print each value

numSet.forEach(printValues);

// Now lets create a blank Set and then pass value to it
const blankSet = new Set();
blankSet.add("a");
blankSet.add("b");

//you can pass variables in a set
let c = "c",
  d = "d";
blankSet.add(c);
blankSet.add(d);

// before we print, lets verify something, before we said that, set only takes unique values
// now lets try to add a duplicate value and see what happens
blankSet.add("a");
blankSet.forEach(printValues);

// so it did not gave you an error but it just did not add the duplicate value in the set.


// So now lets check if set is directly iterable or not,
// we are going to use a forOf loop
for(let value of blankSet) {
 console.log(value, "<==");
}
// Yeap set is iterable object.

// has() method
console.log(blankSet.has("a")); // Outputs true
console.log(blankSet.has("z")); // Outputs false

// delete() method
blankSet.delete("a");
console.log(blankSet.has("a"), "Checking if it exists after deletion");