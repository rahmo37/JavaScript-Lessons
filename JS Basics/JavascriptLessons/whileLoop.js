// In JavaScript, a while loop repeatedly executes a block of code as long as a specified condition is true. Once the condition becomes false, the loop stops.

// we know that a for loop has parts but while loop only has one part, the condition part, as long as the condition is true, the body of the while statement continues to loop.

// for example

let i = 0;
let text = "";

while (i < 10) {
  text += "The number is " + i + "\n";
  // at the end, we are increamenting the i's value.
  // so as soon as i hits 10, the loop breaks
  i++;
}
console.log(text);

// in a do-while loop the first block will execute regardless of the condition, if the condotion was never true, still the loop will go through the code block at least once

// In JavaScript, a do...while loop executes a block of code once and then repeats it as long as a specified condition is true.

// In the code below the variable i is 50 to begin with, but notice the while loop condition. the code block was no suppose to execute, but still it executed the block once, but when it realized that the condition is false, it did not execute the code block any more.
i = 50;
do {
  console.log("The number is " + i);
  i++;
} while (i < 10);


// One thing to note that, you need to write some code inside the code block that will eventually break the loop, otherwise the loop will result in an infinite loop