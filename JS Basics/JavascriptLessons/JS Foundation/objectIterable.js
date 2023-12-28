// what is the word iterable means in JS?
// Iterable means you can go through an object's attributes, elements or properties one by one.

// an iterable is something you can loop over, like an array or a string. You can use constructs like for...of loops to iterate through each item in an iterable object.

// We know that arrays are iterable, strings are iterable

// when we use a regular for loop syntax we can loop through an array or string

const str = new String("Hello Bangladesh");

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// or we can loop through an array with a for of loop
const array = [1, 2, 3, 4, 5];

for (let value of array) {
  console.log(value);
}

// But when we try to loop through an object, JS throws an error saying the object is not iterable

const obj = {
  name: "",
  age: 12,
};

try {
  for (let key of obj) {
    console.log(key);
  }
} catch (err) {
  console.log(err.message);
}

// now the real question is how is JS understanding that obj is not iterable

// When we observe an object with console.dir() and go to its prototype, we see that it does not have property called Symbol.iterator. This method is a zero-argument function that returns an object, known as an iterator, which conforms to the iterator protocol.

// But array or string do have this method thus we are able to iterate over thesee object.

console.dir(str);
console.dir(array);

// Lets see the difference between iterable and iterator

// Iterable is an object that can be looped over, it defines a method that returns an iterator. Arrays, Strings, Sets, and Maps in JavaScript are examples of built-in iterables.

// Iterator is an object that is returned, when Iterable object calls its Symbol.iterator method, The iterator object then provides a way to access each element in the collection one at a time, typically through a method called next().

// a quick example
// An iterable (in this case, an array)
const myArray = [1, 2, 3];

// Getting an iterator from the iterable

// The syntax myArray.Symbol.iterator() won't work because Symbol.iterator is a special symbol and should be used as a computed property key. That is, it should be wrapped in square brackets.
const myIterator = myArray[Symbol.iterator]();

// Using the iterator to access elements
console.log(myIterator.next().value); // Output: 1
console.log(myIterator.next().value); // Output: 2
console.log(myIterator.next().value); // Output: 3
console.log(myIterator.next().done); // Output: true (No more items)

// Interrestingly,  When you use a for...of loop to iterate over an iterable object in JavaScript, the loop implicitly calls the Symbol.iterator method on the object to obtain an iterator. The loop then repeatedly calls the iterator's next() method to retrieve values one at a time until there are no more items to iterate over.

// lets look a the Symbol.iterator a bit closly
console.dir(myArray[Symbol.iterator]);
console.dir(myArray[Symbol.iterator]());

// So we saw that the Symbol.Iterator returns an Array iterator which has a next method.
// the next method returns an object with two properties, value and done

// Value: the value returned by the iterator
// Done: true if the ioterator has completed

// Lets say i have an object

// ! Note that: In JavaScript objects, a key-value pair doesn't always have to look like key: value. Methods can also be part of an object, and the function definition itself serves as the value. The key, in this case, would be the method name (print), and the value would be the function definition.

const myNumbers = {};

// And we want to make the object iterable, lets see how we can do that

myNumbers[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n === 100) {
        done = true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};

// to make the an object iterable, you have to define the Symbol.iterator function on that object and follow all the rules that needs to followed for the Symbol.iterable() function, the function needs to return a next function and then the next function needs to return an object with a value property and a done property, the done needs to false at some point
// other wise you will create an infinite loop
for (let num of myNumbers) {
  console.log(num);
}
