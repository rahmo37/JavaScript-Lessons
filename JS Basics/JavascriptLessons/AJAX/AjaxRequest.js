// To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

// xhttp.open("GET", "URL", true);
// xhttp.send();

// open(method,url,async)
// send()
// send(String) used for post

// Lets see some demonstartion

// Load data file will be called when button is pressed
function loadData() {
  const xhr = new XMLHttpRequest();

  // You are defining what should happen when the onload event is triggered, which is typically after the request completes successfully. Before this assignment, xhr.onload doesn't hold a reference to any function you've defined, so it doesn't perform any additional actions beyond the default behavior of the XMLHttpRequest object
  xhr.onload = function () {
    const container = document.getElementById("demo");
    console.log("Line 19");
    container.innerHTML = this.responseText;
  };

  // Then after, we prepare our request with open method.

  // The Third Parameter decides wheather the open methodis going to be async or sync
  // Currently its set to false so all the request will be sent synchronously meaning all the code below will execute after the request is made successfully
  xhr.open("GET", "./data.txt", false);

  // Then we send the request with the send method
  xhr.send();

  console.log("Line 31");
}


// !Some note, GET is Simpler and faster than POST
// However, always use POST when,
// A cached file is not an option, Update a file or database on the server
// Sending a large amount of data to the server, POST has not size limitation
// Sending user input (Which can contain unknown characters), POST is more robust and secure than GET