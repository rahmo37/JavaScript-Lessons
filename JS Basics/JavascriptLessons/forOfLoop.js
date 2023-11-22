// An iterable is something you can loop through, item by item.
// Now an iterable object is an object that allows you to go through its elements one by one, typically using a loop.
// In many programming languages, examples include arrays, map, nodeLists, lists, and strings.
// !The for of loop iterates through an object that iterable
// syntax is same as for in we just change the in to of

// !note that for of loop retrieves the values of an iterable object, where as the for in loop onlye access the index or properties 
let numArr = [12, 5, 60, 45];
for (let val of numArr) {
  console.log(val);
}

// ! remember that a string is also iterable, so we can use the for of loop in a string

for(let letter of "Bangladesh") {
 console.log(letter);
}
// Printing each letter individually