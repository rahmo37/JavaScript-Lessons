// Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// javascriptCopy code
// fibonacci(5); // Output: 5 (because the sequence starts as: 0, 1, 1, 2, 3, 5...)

// My solution
// function fibonacci(nthNum) {
//   let firstNum = 0;
//   let secondNum = 1;
//   let result = 0;
//   let counter = 2;
//   let febSequence = [firstNum, secondNum];
//   while (counter <= nthNum) {
//     result = firstNum + secondNum;
//      febSequence.push(result);
//     firstNum = secondNum;
//     secondNum = result;
//     counter++;
//   }
//   return result;
// }

// console.log(fibonacci(73));

// chatGPT solution
// function fibonacci(nthNum) {
//   if (nthNum <= 1) {
//     return nthNum;
//   } // if nthNum is 0 or 1 simply return the nthNum

//   let firstNum = 0;
//   let secondNum = 1;
//   let result = 0;

//   for (let i = 2; i <= nthNum; i++) {
//     result = firstNum + secondNum;
//     firstNum = secondNum;
//     secondNum = result;
//   }

//   return result;
// }
// console.log(fibonacci(50));

// This uses recurssion, but this method is very time consuming, better use the above ones.
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  console.log(n);
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(5);
