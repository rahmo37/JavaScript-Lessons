const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

// Write code to get array of names from give array of users above

const allUsers = users.map((user) => user.name);
// console.log(allUsers);

// Return users who are active
const activeUsers = users
  .filter((activeUser) => activeUser.isActive)
  .map((user) => user.name);
console.log(activeUsers);

//! Note: When chaining methods like filter and map, the filter method processes the entire array first and returns a new filtered array. Then, the map method operates on this filtered array to produce another new array based on the provided transformation.

// Sort users based on IDs
