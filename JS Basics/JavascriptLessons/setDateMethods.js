// You can set different properties of a date, with it's set methods

// with set full year you can set the year to specified one, although other properties will stay the same
let d = new Date();
d.setFullYear(2020);
console.log(d);

// Optionally you can set the mont and day too
d.setFullYear(2020, 11, 3);
console.log(d);

// setMonth() changes the month to the specified one
d.setMonth(2);
console.log(d);

// setDate() changes the date to the specified one
d.setDate(15);
console.log(d);

// Another way to do this is
// The current date is returned and 50 more days is added to the current date
d.setDate(d.getDate() + 50);
console.log(d);

// You set the hours to a custom one if you want
d.setHours(15);
console.log(d);

// similarly we have , setMinutes, setSeconds etc

// You can compare 2 dates, to see which one is before and which one is after

// Lets first take two individual date
const today = new Date();
const anotherDate = new Date("January 31 2024");

if (today > anotherDate) {
  console.log(
    `milliseconds passed since ${anotherDate.getFullYear()}: ${
      today - anotherDate
    }`
  );
} else {
  console.log(
    `milliseconds will pass when its ${anotherDate.getFullYear()}: ${
      anotherDate - today
    }`
  );
}
