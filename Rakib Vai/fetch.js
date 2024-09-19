//! Example 1
// fetch('https://api.github.com/users/rahmo37');

//! Example 2
// fetch('https//google.com/map', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ key: 'value' }),
// });

//! Example 3
// const request = new Request('https://api.example.com/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ key: 'value' }),
//   mode: 'cors',
//   credentials: 'same-origin',
// });

fetch('https://api.github.com/users/rahmo37')
  .then((response) => console.log(response.headers))
  .catch((error) => console.error('Error:', error));


