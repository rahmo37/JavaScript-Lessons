// key : value pair

let obj = {
  number: 2,
  string: "Hellow world",
  boolean: false,
  func: (a, b) => a + b,
  obj1: {
    number2: 3,
  },
};

console.log(obj.func(6, 5));
