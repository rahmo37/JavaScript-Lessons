// function sumOfMultiples(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfMultiples(15));

// Another solution,

// mathmatical formula for finding sum of multiples is, Sum= x * m(m+1)/2
// Where m = n - 1/x

// Why sumUpto(15) ?
// First, you add up the multiples of 3.
// Then, you add up the multiples of 5.
// However, now you've added multiples of 15 (like 15, 30, 45, etc.) twice. Once when you were adding the multiples of 3 and again when you were adding the multiples of 5.
// So, to correct this, you subtract the sum of the multiples of 15 from the total, ensuring each number is only counted once.

function sumOfMultiples(n) {
  function sumUpto(x) {
    const m = Math.floor((n - 1) / x);
    const res = (x * m * (m + 1)) / 2;
    console.log(res);
    return res;
  }

  return sumUpto(3) + sumUpto(5) - sumUpto(15);
}

console.log(sumOfMultiples(50)); // 23
