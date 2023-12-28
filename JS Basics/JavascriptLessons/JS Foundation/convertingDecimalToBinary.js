let decimal = prompt("Please enter a non-negetive interger number");
const binaryBase = 2;
let binary = "";

while (decimal !== 0) {
  let result = returnQuotient(decimal);
  binary += result[0];
  decimal = result[1];
}

console.log(reverseTheNumbers(binary));

function reverseTheNumbers(numStr) {
  let reverseNums = numStr.split("").reverse();
  return reverseNums.join("");
}

function returnQuotient(num) {
  num = Number.parseInt(num);
  let remainder = num % binaryBase;
  let quotient = Number.parseInt(num / binaryBase);
  return [remainder, quotient];
}
