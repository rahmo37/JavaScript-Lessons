//! Conditional statements are used to perform different actions based on different conditions

// There are 4 different conditional statements,
/*
 * if
 * else
 * else-if
 * switch
 */

// *if
// To execute a code block according to a condition, we use the if statement
// if the condition is true we execute the code block, else we dont
let day = "Wednesday";
if (day.toLowerCase() === "wednesday") {
  console.log("I dont have work on wendesday!");
}

//* else

// What if we want to do more things if its not wednesday
// We simply use else statement to specify if it was not Wednesday, then we do something else
day = "monday".toLowerCase();
if (day.toLowerCase() === "wednesday") {
  console.log("I dont have work today");
} else {
  console.log("Its not wednesday!");
}

// else-if checks for more condition
// We can simply add else-if condition in between if and else

if (day === "wednesday") {
  console.log("Its wednesday i dont have work");
} else if (day === "tuesday") {
  console.log("Its tuesday i dont have work");
} else if (day === "monday") {
  console.log("Its monday i dont have work");
} else {
  console.log("Looks like i have work today");
}

//* Then we have the switch statement
// This always confuses me
// so lets write the syntax itself

/*
! switch(conditional expression) {
! case x:
!  // code block
!  break;
! case y:
!  // code block
!  break;
! default:
!  // code block
! }

*/

//! Important note: Switch statement uses string comparison

// Lets see an example
let today = "";

switch (new Date().getDay()) {
  case 0:
    today = "Sunday";
    break;
  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thursday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
    break;
  default:
    console.log("Invalid Input");
}

console.log(today);
