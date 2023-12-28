// A common use if JSON is to exchange data to/from a web server.

// When recieving dat from a web server, the data is always string.

// But if we parse the data with JSON.parse(), the data becomes a JavaScript object.

// Now lets say that we have a jsonString
// Note that the JSON string must have to be a valid JSON string
const jsonString = `{
 "user": {
   "name": "Alex",
   "age": 30,
   "email": "alex@example.com",
   "isMember": true
 }
}`;

// With the parse() method now we converted the String above to a valid JS object. as a result we would now be able to print any attributes of it
const myObj = JSON.parse(jsonString);
console.log(myObj.user.email);
// Notice here that the orginal user object is sorrounded with another anonymous object.

// Array as JSON

// When using JSON.parse() on a JSON Array, the method will return a JS Array, instead of JS object

// For example lets say we have a JSON array below, and we are converting it to the JS array

const text = `["Ford","BMW","Audi","Fiat"]`;
const carsArray = JSON.parse(text);
console.log(carsArray);

// Exception
// Parsing Dates
// Date objects are not allowed in JSON text
// If you need to include a date, you need to include it as a String and you can convert it back to a date object later

// Lets add a date in a JSON objact

const jsonString2 = `{"name":"Obaedur Rahman","Age":27, "Hobby":"Full-Stack developer","DateOfBirth":"1996-09-13"}`;

const person = JSON.parse(jsonString2);
person.DateOfBirth = new Date(person.DateOfBirth);
console.log(person.DateOfBirth);

// A similar way to achive this without the parsing of date seperately is to make use of the callback function of the JSON.parse() method
const jsonString3 = `{"name":"Zarin Rafa","Age":21, "Hobby":"Problem Solver","DateOfBirth":"2001-08-04"}`;

// There is a second parameter in the JSON.parse() method where you can pass a callback function, which will go through all the key and value of the passed in object. You can directly modyfy the values in the JSON obajct or just return them as is
const person2 = JSON.parse(jsonString3, function (key, value) {
  if (key === "DateOfBirth") {
    return new Date(value);
  }
  return value;
});
console.log(person2);
