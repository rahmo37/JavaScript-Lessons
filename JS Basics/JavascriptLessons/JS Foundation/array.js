// Arrays are caontainers that holds multiple values, in JS an array can hold different type of values
// Lets define and Array
const car = ["Honda", "BMW", "Acura"];
// Arrays are index based, starting from index 0

// Array can be multilined
const numArr = [5, 6, 3];

// You can create a blank array and provide the elements later
const ninja = [];
ninja[0] = "Orochimaru";
ninja[1] = "Jiraya";
ninja[2] = "Naruto";

// you can also define an array with new keword
const pokemon = new Array("Rayquaza", "Lugia", "MewTwo");

// You can access an Array Element by referencing the index number
let x = pokemon[0];
console.log(x);

// you can change an existing element
pokemon[1] = "Ho-Oh";

//you can access the contents the whole array by just calling the array with its given name
console.log(pokemon);

// In array you can place anything as its element, for example you can put, objects, arrays its self, number, string etc. for example
const rainbowArr = [
  5,
  {
    name: "any name",
    age: 60,
  },
  ["orange", "grape", "watermelone"],
  "multi variable array",
  true,
  undefined,
  null,
];
console.log(rainbowArr);

// length property
console.log(rainbowArr.length);

// you can call the sort method
console.log(numArr.sort());

// to access the last element of an array dynamically
console.log(rainbowArr[rainbowArr.length - 1]);

// you can loop through every array element. lets place each element in an HTML element
let ninjaLen = ninja.length;

// lets declare a text string variable, and include all the ninja element in the li element
let text = "<ul>";
for (let i = 0; i < ninjaLen; i++) {
  text += `<li> ${ninja[i]} </li>`;
}
text += "</ul>";

// now i will add the value of text inside my p tag
document.getElementById("demo").innerHTML = text;

// we can also achive this action with forEach loop which is a method of array
// in this easy and magical function we just pass a function that will be applied for each element in the array
// whatever the function we declared takes a parameter of value and each element in the array(the array we called the forEach function from) is passed each time the function is called
function myFunction(value) {
  text += `<li>${value}</li>`;
}
text = "<ul>";
numArr.forEach(myFunction);
text += "</ul>";

document.getElementById("demo").innerHTML += text;

// you can add a new element in an array, by using the push() method for example
ninja.push("Kakashi");

// another way to dynamically add an element always in the back of the array is, using the length property.
// for example
ninja[ninja.length] = "Obito";
ninja[ninja.length] = "Suske";
console.log(ninja);
// why is this working?
// because the lenght property always returns the last index of the array plus 1, which becomes the new position for the new value

// Important note: adding elements with high indexes will create undefined holes inside the array, lets see an example
numArr[10] = 10;
console.log(numArr);
console.log(numArr[5]); // outputs undefined

// you can add values in array like an object but they will still have numbered index
person = [];
person[0] = "Obaedur";
person[1] = "Rahman";
person[2] = 46;

console.log(person);

// Differences between object and array
// The first difference is, object uses the String or Named index (Called keys) and arrays uses the number indexes, lets prove it
let arr = [1, 2, 3, 4, 5, 6];
let obj = {
  name: "Obaedur",
  age: 23,
};

for (let value of arr) {
  console.log(typeof arr.indexOf(value));
} // outputs number for each index

// now lets see object
for (let value of Object.keys(obj)) {
  console.log(typeof value);
} // outputs strings for each property

// When you call a typeof operator in a array, it returns object.
// So how would you realize if a variable is actually an array or not
// you can use the Array.isArray() method of the prototype Array
// for example
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

// Another way is to use the instanceof operator
console.log(arr instanceof Array);
console.log(obj instanceof Array);
