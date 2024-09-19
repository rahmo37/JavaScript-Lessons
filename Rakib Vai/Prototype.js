const vehicle = {
  move() {
    console.log(`${this.type} is moving`);
  },
};

const car = {
  type: 'Car',
};

// car.__proto__ = vehicle;
console.log(car.__proto__);
// function Human(name) {
//   this.name = name;
// }

// console.log(Human.prototype);
