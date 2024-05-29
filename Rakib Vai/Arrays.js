const e = [];
const a = [3, 4];
const b = [5, 7];
const o = {
  v1: 4,
  v2: 3,
};



let func = function () {
  return o.v1 + o.v2;
};

const arr = [[3, 4], [5, 7], "v", o, func];
arr[arr.length] = e;

console.log(arr[arr.length - 2]());
