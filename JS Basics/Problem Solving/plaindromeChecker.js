// 6. Palindrome Check
// Write a function isPalindrome(str) that checks if the given string is a palindrome (ignoring spaces, punctuation, and capitalization).
// Example:
// isPalindrome("A man a plan a canal Panama"); // Output: true

const str = "A man a plan a canal Panama";

function isPalindrome(str) {
  // inside nutral string we same the string with all the spaces and capital words removed
  const nutralStr = str
    .split(" ")
    .map((value) => value)
    .join("")
    .toLowerCase();

  // saving the last index
  lastIndex = nutralStr.length - 1;

  for (let i = 0; i < nutralStr.length; i++) {
    // if the first index matches the last, the second matches the second last and so on ...
    // if all of them matches we return true
    console.log(nutralStr[i], nutralStr[lastIndex - i]);
    if (nutralStr[i] === nutralStr[lastIndex - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(str));

// Another Soltion
// With this we can even check if any passed in number is palindrome or not
// function isPalindrome(str) {
// Remove non-alphanumeric characters and convert to lowercase
//  const nutralStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

// Only loop halfway through the string
//  for (let i = 0; i < nutralStr.length / 2; i++) {
//      if (nutralStr[i] !== nutralStr[nutralStr.length - 1 - i]) {
//          return false;
//      }
//  }
//  return true;
// }

// const str = "A man, a plan, a canal, Panama!";
// console.log(isPalindrome(str));  // Output: true
