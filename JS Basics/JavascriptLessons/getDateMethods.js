// In this tutorial we will talk about different get methods in Date

// Get time method returns the milliseconds passed since 1970, Jan 1
const d = new Date();
console.log(d.getTime());

// Returns the full current year
console.log(d.getFullYear());

// Returns the full month. Month always starts from 0 in JS, So we are going to add 1 to the returned month
console.log(d.getMonth() + 1);

// To get the month as string you can create an array of months first and access that Array, lets see an example

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[d.getMonth()]);

// getDate() method returns the date
console.log(d.getDate());

// getMinutes() method returns the minute
console.log(d.getMinutes());

// getSeconds() returns the current second
console.log(d.getSeconds());

// getMilliseconds() method returns the current milliseconds
// 1000 milliseconds = 1 sec
console.log(d.getMilliseconds());

// getDay() returns a day from 0 to 6, 0 being sunday and so on
console.log(d.getDay());

// You can create an array of 7 days an access the array
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days[d.getDay()]);


// Date.now() returns the number of milliseconds since January 1, 1970.
let ms = Date.now();
console.log(ms);



// Calculate the number of years since 1970/01/01: 
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
// Calculating how many milliseconds in one year then dividing that with total number of milliseconds passed uptill now, to get the total years have passed from 1970

let years = Math.round(Date.now() / day);
console.log(years);