// UTC, or Coordinated Universal Time, is the standard time used all around the world. Think of it as a starting point or reference time.

// Here's a simple way to understand it: Imagine that all the world's clocks have to agree on a certain time. UTC is that agreed-upon time.

// When it's 12:00 noon UTC, different parts of the world will have different local times, depending on their time zones. Some places might be a few hours ahead of UTC, while others might be a few hours behind.

// So, UTC helps keep time consistent across the world, allowing us to know exactly what time it is anywhere on Earth
// -------------------------------------------

// There are generally 3 types date of formats

// ISO date --> "2015-03-25" (The International Standard)
// Short Date --> "03/25/2015"
// Long Date --> "Mar 25 2015" or "25 Mar 2015"

// You can define an ISO format date
// Remember the time always get adjusted to you own local zone. My Zone is 4 hours Behind, so 4 hr is sunstracted from the UTC, to display the local date
let d = new Date("2015-03-25");
console.log(d);

// To define Time with the date
// Follow this syntax
// YYYY-MM-DDTHH:MM:SSZ"
d = new Date("2015-03-25T12:00:00Z");
// Every keyword must be strinctly followed, otherwise it will return invalid date
console.log(d);

// If you want to modify the time relative to UTC, Remove the Z and add +HH:MM or -HH:MM
// For example
d = new Date("2015-03-25T12:00:00+06:00");
console.log(d);

// Short Date Format
// "MM/DD/YYYY"
d = new Date("03/25/2015");
console.log(d);

// Long Date Formats
d = new Date("25 Mar 2015");
console.log(d);

// Month and The Day can be swapped
d = new Date("Mar 25 2015");

// Month can be written in full form as well
d = new Date("January 01 2023");
console.log(d);

// Date.Parse() method will return the number of millisecond passed between the given Date and 1970 jan 01

let msec = Date.parse("March 21, 2012");
console.log(msec, "millisec since 1970");
