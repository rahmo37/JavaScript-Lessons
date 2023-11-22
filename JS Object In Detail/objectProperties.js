// Properties are the most important componenets in an object
// The properties in an object are not important.
// They can stay in any order they want
// Propperties can usually be changed, added, and deleted, but some are read only

// Lets say that you have an object

let country = {
  name: "Australia",
  continent: "Ocenia",
};

// Change
country.name = "Bangladesh";
country.continent = "Asia";
console.log(country);

// Add
country.population = 173211470;
country.area = "57,320 square miles";
console.log(country);

// Delete
delete country.area;
console.log(country);

// To loop throught the properties of an object we use the for-in loop
for (let key in country) {
  console.log(key, ":", country[key]);
}

// Nested Object, you can place one object inside another object,

// lets see an example

let container = {
  name: "Writing Utensil holder",
  color1: "White",
  color2: "Black",
  color3: "Grey",
  itemsInside: {
    item1: "Green pen",
    item2: "Green Marker",
    item3: "Orange Pencil",
    item4: "Orange Marker",
    item5: "Black Marker",
  },
};

// Lets see different example of accessing the nested properties

let placeHolder = "itemsInside";

console.log(container.itemsInside.item1);
console.log(container["itemsInside"].item2);
console.log(container.itemsInside["item3"]);
console.log(container["itemsInside"]["item4"]);
console.log(container[placeHolder]["item5"]);

// Values in arrays can be object, and values in arrays can be objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

// You can use nested for in to access them.
for (let i in myObj.cars) {
  for (let j in myObj.cars[i].models) {
    console.log(myObj.cars[i].models[j]);
  }
}

// ! Very Important concept, all properties have 4 attributes,
/**
 * Value --> the actual value of a property
 * Enumerable --> Determines if the property shows up in a for...in loop or Object.keys() method.
 * Configurable --> Specifies whether the property can be deleted or have its attributes changed
 * Writable --> Indicates if the property value can be changed
 */
// *You use the Object.defineProperty method to change its attribute status