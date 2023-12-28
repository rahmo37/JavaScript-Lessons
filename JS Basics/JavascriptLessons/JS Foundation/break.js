//! The break statement jumps out of a loop immediatly, any code after the break statement is not read
// Another definition is , break statement stops and exits the current loop or switch statement immediately.
// for example
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Notice the for statement was suppose to loop for 5 times, but if you look at the condition closely, I stated that if i is equal to 3, then break out of the loop. That is why it just printed until 0 to 2

// *continue statement on the other hand just jumps out of the current iteration, meaning, it will continue the rest of the loop, but current iteration will be canceled

// another difnition is, the continue statement skips the current iteration of a loop and moves to the next one.

// lets see an example
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// when i's value was 3, it skipped the rest of the code and moved on to the next iteration

// In JavaScript, a label is a way to give a name to a specific loop or block of code, so you can refer to it when using break or continue statements.
// To Label JavaScript statements you precede the statements with a label name and a colon:
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 0) {
      continue outerLoop;
    }
    console.log(`i = ${i}, j=${j}`);
  }
}
// In the above example, i gave a label to the outer loop, and inside the inner for loop i specified that if i equals 1 and j = 0, continue outer loop, so it skipped executing the the whole iteration, when i = 1,as a result it did not execute the inner loop as well

// The real benifit is, Without the label, the continue statement would only affect the inner loop, and you wouldn't be able to control the outer loop with it. Similarly, break can be used with labels in a similar manner.