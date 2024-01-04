// ! Just a bit lesson about Response
// Response
// A Response is an object that represents the response to a request made using fetch. Once the fetch operation is complete and the Promise is resolved, you get this Response object.

// The Response object contains all the information about the response, including:

// The payload of the response (e.g., the data retrieved from a server).
// The status of the response (like 200 for success, 404 for not found, etc.).
// Headers and other meta-information about the response.
// You can use different methods of the Response object to extract the data in various formats:

// .json() to convert the response body to a JavaScript object (assuming the response is in JSON format).
// .text() to get the response body as plain text.
// .blob() for binary data, and so on.



//! NOTE: 
// Successful Request (Promise Fulfilled): If the fetch request is successful (meaning the request was made and a response was received, regardless of the HTTP status code), the Promise is resolved, and you receive a Response object. This object can then be used to check the status of the response and process the data.

// Network Error or Request Failure (Promise Rejected): If the fetch request fails due to reasons like network errors (e.g., server not reachable, no internet connection), the Promise is rejected. In this case, you do not get a Response object because the request did not complete successfully. Instead, you typically receive an error object that you can catch and handle.








// In the demo.txt file we have some JSON string. which we will try to fetch in this JS file

async function fetchData() {
  const response = await fetch("demo.txt");
  console.log(response);

  // The .json() function converts the response to a valid JSON object
  // const data = await response.json();
  

  // on the otherhand if you wwant to recive it as a JSON string then you use response.text() method
  const jsonText = await response.text();

  console.log(jsonText);
}

fetchData();
