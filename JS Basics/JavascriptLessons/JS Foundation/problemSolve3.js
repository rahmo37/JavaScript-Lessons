// Given an input, printout all the combionation of number possible with that number

const input = 324;

function sorting(num, order) {
  numArr = num.toString().split("");

  if (order === "a") {
    ascOrder = numArr.sort(function (a, b) {
      return a - b;
    });
    return Number(ascOrder.join(""));
  } else if (order === "d") {
    dscOrder = numArr.sort(function (a, b) {
      return b - a;
    });
    return Number(dscOrder.join(""));
  }
}

ascendingOrder = sorting(input, "a");
descndingOrder = sorting(input, "d");

function retrievingCombinations() {
  for (let i = ascendingOrder; i <= descndingOrder; i++) {
    if (isValidCombination(i)) {
      console.log(i);
    }
  }
}

retrievingCombinations();

function isValidCombination(value) {
  let num = sorting(value, "a");
  if (num === ascendingOrder) {
    return true;
  } else {
    return false;
  }
}
