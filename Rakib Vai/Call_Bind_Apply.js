function fullName(homeTown, age) {
  console.log(
    this.firstName + ' ' + this.lastName + ' ' + homeTown + ' ' + age
  );
}

let name = {
  firstName: 'Obaedur',
  lastName: 'Rahman',
};

let name2 = {
  firstName: 'Zarin',
  lastName: 'Rafa',
};


let newFunc = fullName.bind(name, 'comilla', 29);
newFunc();



// fullName.call(name, 'comilla', 29);
// fullName.call(name2, 'comilla', 21);

// fullName.apply(name, ['comilla', 29]);
// fullName.apply(name2, ['comilla', 29]);

// let arr = [1, 2, 3, 4];

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum.apply(null, arr));
// console.log(sum.call(null,  arr[0], arr[1], arr[2]));


