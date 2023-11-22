// If we need to convert an array to a string we can use the toString method on the array variable
// for example
const fruits = ["Banana", "Orange", "Apple"];
// this is one way
// just calling the join method on an array returns  string
console.log(fruits.join(""));
// another way is
console.log(fruits.toString());

// the pop() method pops the last element in an Array and returns it
// for Example
let popedElement = fruits.pop();
console.log(fruits, popedElement);

// Push method pushes an element at the end of the array and returns the new length of the array
// for Example
let newLength = fruits.push("Grapes");
console.log(newLength);

// The shift() method removes the first elelemt and returns the removed element, also changes the elements position accordingly
let removedElement = fruits.shift();
console.log(removedElement, fruits);

// similarly unshift method adds a new element in the beggining of the array, returns the new length, and fixes the indexs accordingly
newLength = fruits.unshift("Strawberry");
console.log(fruits, newLength);

// There is an operator called delete, which can be used to delete an element from an array
delete fruits[0];
console.log(fruits);
// There is a problem using this delete operator though, it creates undefined holes in the array

// Splice method gives you a comprehensive functionalities.
// It takes multiple parameter
// frist parameter is for us to specify at/from which index are we going to add our element(s).
// second parameter is for us to specify how many element do we want to remove while we are adding an/other element(s)
// and then we just specify the element(s) we want to add
// lets see an example
fruits.splice(0, 1, "Blackberry", "Raspberry", "Drgonfruit");
console.log(fruits);
// The empty undefined value is removed and the new values are added

// You  can use the splice method little smartly and use it to just delete item(s) from an array. The splice method will also return the element that it removed
// the returned value of the splice method is an array,because incase there are multiple items removed
removedElement = fruits.splice(2, 2);
console.log(removedElement);
console.log(fruits);

// We can use the concat() method to join multiple arrays
// For Example
const arr1 = [1, 2, 3],
  arr2 = [4, 5, 6],
  arr3 = [7, 8, 9],
  arr4 = [10, 11, 12];

let numbers = arr1.concat(arr2, arr3, arr4);
// a new array is returned with all the arrays concatinated
console.log(numbers);

// you can also add multiple elements in the end of the array with concat method as well, but it will return a new array and the original array will be unchanged
let newNumbers = numbers.concat(13, 14);
console.log(newNumbers);

// Now we have the slice method, which slices the original array and returns a new array, but the original array is not changed
// first parameter is where you want to start slicing (including);
// second parameter is wehre do you want to end (excluding)
// For example
let slciedElement = newNumbers.slice(8, 10);
console.log(slciedElement);
//if you ommit the second parameter, it will take the remaining array
console.log(fruits.slice(1));

// all JS object have a toSting() method
