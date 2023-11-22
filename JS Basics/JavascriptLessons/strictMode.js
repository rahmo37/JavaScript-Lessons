// Strict mode in JavaScript makes the language stricter by catching common coding bugs and preventing the use of potentially problematic features.
// Strict mode in JavaScript is like a strict teacher: it catches and stops bad coding habits to keep your code safer and cleaner
"use strict";
x = 5;
// cannot declare the variable without a keyword anymore



myFunction();
function myFunction() {
  y = 3.14;
}
// This will cause an error because y is not declared

// another amazing this is you can apple the strict mode to only  function scope, not the the global scope, it like have strict rule to one county and not others

myFunction1();
function myFunction1() {
 "use strict"
  y = 3.14;
}

// There is a complete list of what are not allowed in strict mode in the below link,
// ! https://www.w3schools.com/js/js_strict.asp