// Implementing a prctical that based on all the lessons we've learned so far
const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);

function sendRequest(method, url, data) {
  // Using a promis to handle any API request. if the request is successful, then in the resolve function we save the xhr.response object and finally we return the promise
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // !Important notes about error handling
    //  onerror Method: The onerror event handler in an XMLHttpRequest (XHR) is used to handle errors that occur during the request's operation, such as network errors. These are typically errors that prevent the request from completing successfully, such as a failure to establish a connection to the server (like due to network issues or the server being unreachable).

    // onload Method: The onload event handler, on the other hand, is triggered when the request completes successfully. "Successfully" in this context means that the request was able to complete without any network or low-level errors, regardless of the HTTP status code returned. Within the onload handler, you should check the status code of the response (e.g., xhr.status) to determine if the request was successful in a higher-level sense (like receiving a 200 OK response) or if there was a server-side error (like a 404 Not Found or 500 Internal Server Error).

    // Status Code Handling: HTTP status codes, which are part of the server's response, are indeed handled in the onload method. Here, you can differentiate between different types of responses - such as successful responses (status in the 200-299 range), client errors (400-499), server errors (500-599), and so on.

    xhr.onload = function () {
      if (this.status >= 400) {
        reject(
          "the request completed successfully, but application error occured!"
        );
        console.log(this.status);
      }

      // Since the responseType is JSON, We have a JS object in the response property
      resolve(this.response);
    };

    xhr.onerror = function () {
      reject("There was an error :( ");
    };

    xhr.open(method, url);

    // provided you've set the responseType to "json" in your XMLHttpRequest, the server sends JSON text, and the browser does the work of converting this text into a JavaScript object. This JavaScript object is then accessible through the response property of the XMLHttpRequest object.
    xhr.responseType = "json";
    xhr.send();
  });
  return promise;
}

// We just send a get request with this method and it returns the request data
function getData() {
  // a fake api from JSONPlaceholder website for educational purpose
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/test")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => console.log(err));
}

// In this method we are going to POST some data the JSONPlaceHolder website, Therefore we change the method to POST, and then in the third parameter we send a JS object

// After posting the Data we recieve a response, which we are loggin below
function sendData() {
  // Intentionally missing a dot here to demonstrate the error
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicodecom/posts",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  )
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}
