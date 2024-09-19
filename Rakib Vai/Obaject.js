const car = {
  name: 'BMW',
  model: 'X series',
  color: 'Blue',
  year: 2022,
  start: () => {
    return 'The car is starting';
  },
  drive: function () {
    return 'I am driving this ' + this.name;
  },
};

car.name = 'Audi';

car = {};

console.log(car);
