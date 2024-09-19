"use strict";

// function print(gender, age) {
//   return (
//     this.firstName +
//     " " +
//     this.lastName +
//     " " +
//     " Gender is " +
//     gender +
//     " age is " +
//     age
//   );
// }

// const obj = {
//   firstName: "Obaedur",
//   lastName: "Rahman",
// };

// console.log(print.bind(obj, "Male", 29)());
console.log(this);
let a = function() {
  console.log(this);
  // let b = () => {
  //   console.log(this);
  // };
  // return b;
};
a();
