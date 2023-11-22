let num1 = 123;
let num2 = 321;

swapNumbers(num1, num2);
function swapNumbers(num1, num2) {
  console.log("Originally num1 was :" + num1, "and num2 was :" + num2);
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  console.log("Right now num1 is :" + num1, "and num2 is : " + num2);
}
