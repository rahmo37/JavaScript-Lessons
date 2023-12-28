// Server Response Properties
// responseText we use this property to get the response data as a String

// responseXML get the response data as XML data

// getResponseHeader() returns SPECIFIC header information from the server resourse

// getAllResponseheader() returns all the header information from the server resource

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const container = document.getElementById("demo");
    console.log("Line 19");
    container.innerHTML = this.responseText;

    // Provide all the response header that was recived with the response
    console.log(this.getAllResponseHeaders());
    // This retrives a specific header
    console.log(this.getResponseHeader("etag"));
  };
  xhr.open("GET", "./data.txt", true);
  xhr.send();

  console.log("Line 31");
}
