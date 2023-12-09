const apiKey = "eedbe108c9321236f1c01d83f7567020";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = "New York";
const url = apiUrl + city + `&appid=${apiKey}`;

// Ajax, short for Asynchronous JavaScript and XML, is a SET of web development techniques that allows web applications to communicate with a server asynchronously, without requiring a page reload. This means that parts of a web page can be updated without having to refresh the whole page, leading to a smoother and more interactive user experience.

// Ajax works through a combination of HTML, CSS, JavaScript, and the XMLHttpRequest object, enabling web applications to send and retrieve data from a server in the background. It's commonly used in dynamic web applications to improve responsiveness and user interaction

function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what will we do after a successful HTTP request has been made and when the response arrives

  // The onload function of an XMLHttpRequest object is an event handler that is executed when the request completes. It's also used to handle the data returned by the request after it has been successfully retrieved from the server.

  // ! Note that: The onload event is triggered when an XHR request completes, regardless of whether the response is successful or not. This means the onload event will fire even if the server returns an error status code (like 404 or 500).

  xhr.onload = function () {
    const placeholder = document.getElementById("demo");

    console.log(xhr);

    // Now lets say if the code is successfull we console log something, and if not we print something else

    if (xhr.status === 200) {
      console.log(xhr.status);
      console.log("request successful");
    } else {
      console.log("request was not successful");
    }

    // The responseText property of an XMLHttpRequest object returns the response data as a string. This property is typically used when the data returned from the server is in text format, such as plain text or a JSON string

    // ! NOTE That, The xhr.responseText property of an XMLHttpRequest (XHR) object will contain the response body returned by the server, regardless of whether the response is successful or unsuccessful. Essentially, xhr.responseText is the raw text of whatever the server sends back to the client

    placeholder.innerHTML = xhr.responseText;
  };

  {
    // xhr.open() is a method of the XMLHttpRequest (XHR) object in JavaScript, used to initialize a new request. It's one of the first steps in configuring and sending an HTTP request via XHR. Here's a breakdown of how it works and its parameters:

    // Purpose: The open() method sets up the request by specifying the HTTP method to use, the URL to send the request to, and other optional attributes. It does not actually send the request; that's done with the send() method.

    // Syntax: The method is typically called with at least two arguments, and up to five:

    // xhr.open(method, url, async, user, password);

    // method: The HTTP method to use for the request (e.g., "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS").

    // url: The URL to which the request is sent.

    // async: An optional boolean parameter indicating whether the request should be made asynchronously (default is true). If this is set to false, the request is synchronous, meaning the JavaScript will stop executing until a response is received, which can freeze the browser.

    // user: An optional parameter for username, in case the request needs authentication.

    // password: An optional parameter for password, used with the username for authentication.
    xhr.open("GET", url);
  }

  {
    // setting a custom header
    // xhr.setRequestHeader("Language", "JavaScript");
  }

  {
    // The send() method of the XMLHttpRequest (XHR) object is used to actually send the request to the server. This method is called after the request has been initialized with the open() method and any necessary request headers have been set. Here’s how it works and its key aspects:

    // Purpose: The send() method executes the request that was set up using the open() method. It can send a request without a body (for GET requests, for example) or with data (common in POST requests).

    // Syntax: The method can be used in different ways depending on whether you need to send data with the request:

    // For a request without data (like a GET request): xhr.send();
    // For sending data with the request (like a POST request): xhr.send(data);
    // data: The data to be sent with the request. This can be in various forms such as a string, FormData object, Blob, ArrayBuffer, etc.

    xhr.send();
  }
}

// ! Important NOTE: If the response code from an XMLHttpRequest is not 200, it generally indicates that the request was not successful. Different status codes represent different types of responses:
// ! Codes in the 400 range (like 404) indicate client errors, such as a request for a resource that doesn’t exist.
// ! Codes in the 500 range indicate server errors, where the server failed to fulfill a valid request.
// ! You can handle these scenarios using the onerror event for network errors or by checking the status code in the onreadystatechange event handler.

//  Some more methods and properties of XMLHttpRequest

// ! Method
// * xhr.abort()
// The abort() method called from the XMLHttpRequest object will aborth the request when placed after the send method of the xhr object. meaning that if the abort() method is called before the send method successfully finishes its request, the request sending will be cancelled.

// * xhr.getAllResponseHeaders()
//  some Header information is sent when we make an HTTP request, similarly some Header information comes back from the server as well.The information that comes back from the server is called the responseHeaders and the information that goes to the server from our request is called the requestHeaders. Remember the values are set in a key value pair style.
// Now the getAllResponseHeaders() will return all the header infromation

// Similarly the getResponseHeader() will returns a specific header information, you'd have to pass the key in the parameter

// * open(method, url, async, user, psw);
// We talked about this method before but lets define it more clearly
// method: attribute defines what the request type will be GET or POST etc
// url: the addreass of the file location
// async, do you want the request to be sent asynchronously or synchronously
// user: any relevent user name
// psw: any relevent password

// * send("data")
// When with a send() method you want to send any data to be posted in the server you place a string data in the method argument

// * setReqyestHeader()
// when sending a request you can also post your own header in the server.

// ! Property

// * status
// status is a property that returns the status number of a property
// 200: "OK"
// 403: "Forbidden"
// 404: "Not found"

// Next start from onreadystatechange and readyState
