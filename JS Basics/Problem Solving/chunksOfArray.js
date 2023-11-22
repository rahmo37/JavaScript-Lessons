// Write a function chunkArray(arr, size) that splits an array into chunks of the desired size and returns them as a two-dimensional array.
// Example:
// javascriptCopy code
// chunkArray([1, 2, 3, 4, 5, 6], 3); // Output: [[1, 2, 3], [4, 5, 6]]

// function chunkArray(arr, size) {
//   const twoDChunckedArr = [];
//   let eachChunk = [];
//   for (let i = 0; i < arr.length; i++) {
//     eachChunk.push(arr[i]);
//     if ((i + 1) % size === 0) {
//       twoDChunckedArr.push(eachChunk);
//       eachChunk = [];
//     }
//   }
//   console.log(undefined === null);
//   if (eachChunk[0] !== undefined) {
// or you could use eachChunk.length > 0
//     twoDChunckedArr.push(eachChunk);
//   }
//   return twoDChunckedArr;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));

// Another way
function chunkArray(arr, size) {
  const twoDChunkedArr = [];

  for (let i = 0; i < arr.length; i += size) {
    twoDChunkedArr.push(arr.slice(i, i + size));
    console.log(i);
  }
  return twoDChunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));


// You might ask in the last iteration i = 6 and i am asking it to slice 6 to 9, but i only have till 8;

//! The key thing to understand is that the slice() method won't throw an error if the ending index is beyond the length of the array. Instead, it'll just return all elements starting from the starting index up to the end of the array.