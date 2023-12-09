const display = document.getElementById("display");

// The geolocation is a part of the navigator object, the getCurrentPosition function provides a coordinates object to the call back function specified in the getCurrentPosition()'s function body

// You can also send a second object that will provide an error object, if the user did not allow location permission, or if there are any other issues.

// So its either a GeolocationPosition object or a GeolocationPositionError object

// The getCurrentPosition() method returns an object on success. The latitude, longitude and accuracy properties are always returned. The other properties are returned if available:

// coords.latitude	The latitude as a decimal number (always returned)
// coords.longitude	The longitude as a decimal number (always returned)
// coords.accuracy	The accuracy of position (always returned)
// coords.altitude	The altitude in meters above the mean sea level (returned if available)
// coords.altitudeAccuracy	The altitude accuracy of position (returned if available)
// coords.heading	The heading as degrees clockwise from North (returned if available)
// coords.speed	The speed in meters per second (returned if available)
// timestamp	The date/time of the response (returned if available)

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    display.innerHTML = "Geolocation not available!";
  }
}

// the position object is the actual coordinate object
// The coords object has all the other information, refer above
function showPosition(position) {
  console.log(position);
  display.innerHTML =
    "Latitude : " +
    position.coords.latitude +
    "<br/> Longitude : " +
    position.coords.longitude;
}

// Will start from showErrorFunction()
// Different error contant has different values
// PERMISSION_DENIED = 1
// POSITION_UNAVAILABLE = 2
// TIMEOUT = 3
// UNKNOWN_ERROR = 4
// Based on the error code we will execute the proper block of code
function showError(error) {
  console.log(error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      display.innerHTML = "User denied the request for geolocation";
      break;
    case error.POSITION_UNAVAILABLE:
      display.innerHTML = "Location information is not available";
      break;
    case error.TIMEOUT:
      display.innerHTML = "The request timed out!";
      break;
    case error.UNKNOWN_ERROR:
      display.innerHTML = "An unkwon error occured";
      break;
  }
}

// An interesting method is the watchPosition() method - Returns the current position of the user and continues to return the updated position as the user moves (Just like a GPS in a car).

// On the other hand the clearWatch() stops the watchPosition() method

// Will not be a clear representation in the laptop, smartphone would be a good device to test it

function getDynamicLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, showError);
  } else {
    display.innerHTML = "Geolocation not available!";
  }
}
