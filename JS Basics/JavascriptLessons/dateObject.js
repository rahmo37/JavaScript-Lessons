// you can define a date object with new keyword and save it in a variable
let d = new Date();
console.log(d);

// you can create a date object in 4 ways
// new Date();
// new Date(year, month, day, hours, minute, seconds, milliseconds);
// new Date(milliseconds);
// new Date(date string);

// The first syntax we've seen

// Second syntax
// You can define your own specified date
d = new Date(1996, 8, 13, 6, 0, 0);
console.log(d);
// Month starts from 0
// You can ommit all the parameters until month, year and month must be present, in order to create a custom date

// you can specify the date and time by passing a dated string
// But you do need to follow this specific syntax
console.log(new Date("September 13, 1996 6:00:00"));

// JS stores dates as number of milliseconds since Jan 01, 1970, 00:00:00 UTC

// you can pass a number of milliseconds and it will calculate the time from 1970 and add that millisecond with 1970

console.log(new Date(94670000000), "Mili"); // this returns Sun Dec 31 1972 12:13:20 GMT-0500 (Eastern Standard Time), two years from 1970

// can provide a negetive value to go before 1970
console.log(new Date(-94670000000));

// One day is apx. 84600000
// you can provide this to go forward one day
console.log(new Date(84600000));

// Date methods
// To chnage the date format to UTC and show the standard time you can use the toUTCString();
console.log(new Date().toUTCString(), "<-- UTC format, Standard Time");

// chnage the format to ISO format
console.log(new Date().toISOString(), "<-- ISO fromat, Standard Time");

// toLocaleDateString returns Local Date
console.log(new Date().toLocaleDateString(), "<-- Only returns date");

// toLocaleTimeString returns Local Time
console.log(new Date().toLocaleTimeString(), "<-- Only returns time");
