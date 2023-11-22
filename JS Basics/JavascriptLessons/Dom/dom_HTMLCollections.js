// HTMLCollection is an Array-like object, which provides a collection HTML elements

// for example when we use getElmentsByTagName we get an HTMLCollection of all elements we are looking for

const collectionOfPElements = document.getElementsByTagName("p");
console.log(collectionOfPElements);

// Note that HTMLCollection is not an Array, Its an Array-Like Object

console.log(typeof collectionOfPElements); // Object

// You can acccess an element inside this collection just like an array
console.log(collectionOfPElements[1]);

// You can use the lengthProperty of the HTMLCollection to access its length
console.log(collectionOfPElements.length);

// You can even loop through it
for (let elem of collectionOfPElements) {
  console.log(elem);
}

// Finally

/**
 * An HTMLCollection may look like an array but its not
 * You can loop through the list
 * But why its not an array is because you cannot use valueOf(), pop() or join() in it
 */
