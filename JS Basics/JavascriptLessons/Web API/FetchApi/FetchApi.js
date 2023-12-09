// The fetch API allows web browser to make HTTP requests to web servers

// No nee for XMLHttpRequest anymore

// fetch API can be used in two ways, either by using async await or promis

const display = document.getElementById("display");

function getDataWithPromise() {
  // The fetch method sends a request to the URL provided in the function
  // The fetch method process is an asynchronous process, so while its running the normal flow of the synchornous code will run on its track
  // fetch function returns a promis, we handle promis with then method
  fetch(
    "http://127.0.0.1:5500/JS%20Basics/JavascriptLessons/Web%20API/FetchApi/someData.txt"
  )
    .then((res) => res.text())
    .then((data) => {
      console.log("I will run later");
      display.innerText = data;
    });
  console.log("I will run first");
}

// First .then(): Processing the Response

// The first .then() is used to handle the initial response from the fetch call. The fetch API returns a promise that resolves to a Response object when the request completes. This Response object contains various details about the response, including headers, status code, and methods to process the body of the response.
// In your code, the response is processed by calling res.text(). This is necessary because the response body doesn't automatically come in a readable format; it's a stream. The text() method reads the entire stream to completion and converts it to a text string. This method itself returns a promise because this reading and conversion process is asynchronous.
// Second .then(): Handling the Data

// The second .then() deals with the data that has been processed by the first .then(). Once the response is successfully converted to text, this data is then passed to the second .then().
// In your code, this is where the actual content of the text file (now in the data variable) is used. Here, you're updating the inner text of an HTML element (display.innerText = data) to display the fetched text on the webpage.

// Same example with await keyword 
// await keyword makes the code wait for a Promise to resolve before continuing to the next line. 
async function getDataWithAsync() {
  const response = await fetch(
    "http://127.0.0.1:5500/JS%20Basics/JavascriptLessons/Web%20API/FetchApi/someData.txt"
  );

  const data = await response.text();
  display.innerHTML = data;
}
