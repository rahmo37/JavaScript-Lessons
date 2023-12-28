// it is recommended that array should be assigned with const keyword. becasue you dont want to chagne the memory address it is currently pointing to
// const is indtroduced in ES6
// when defining an array with const, that array cannot be reassigned with another address in the memory. more clearly a const array cannot be reassigned with another array
// However, the elements inside an array can be reassigned
// lets see an example
const carArr = ["Volvo", "BMW", "Acura"];
// you cannot assign this carArr with another array
// carArr = ["Toyota","Honda","Hyundai"]; this gives an error

// But the individual elements can change inside the array
// Not only this you can also srinnk or scale the Array as well
carArr[0] = "Buggati";
carArr.push("Audi");
console.log(carArr);

// You need to assign values to an array in the same line when declared with const
const goodSynonem = ["Excellent", "Fine", "Wonderful", "Splendid"];

// but with var you can assign values to an array before it is even declared
badSynonem = ["Poor", "Inferior", "Deficient", "Faulty"];
var badSynonem;
// but we are not going to use var
console.log(badSynonem);

// An array declared with const is block scope
// you can declare many arrays with same name if they exist in different blocks
{
  const haven = ["sanctuary", "Retreat", "Shelter"];
  console.log(haven);
}
{
  const haven = ["sanctuary", "Retreat", "Shelter"];
  console.log(haven);
}
{
  const haven = ["sanctuary", "Retreat", "Shelter"];
  console.log(haven);
}
