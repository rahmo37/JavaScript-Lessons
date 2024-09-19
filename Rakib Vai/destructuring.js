// Destructuring in JavaScript is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

// In a destructuring assignment, the value on the righthand side of the equal sign is an array or object. (a structured value)

// And the lefthand side specifies one or more variable names using a syntax that mimics array and object literal syntax.

// When destructuring assignment occurs one or more values are extracted from the values on the right and stored into the variables declared on the left.

// Destructuring assignment is often used to initialize variables within a const, let, or var declaration. However, it can also be applied in regular assignment expressions to variables that are already declared.

// Destructuring can also be used when defining the parameters to a function in JavaScript

const user =
  {
    name: 'John',
    age: 27,
  };

function displayUser({
  name: n,
  age: a,
}) {
  console.log(
    `Name: ${n}, age ${a}`
  );
}

displayUser(
  user
);
