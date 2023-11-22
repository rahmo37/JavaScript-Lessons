// Summary:
// Cookies in JavaScript are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. They are designed to be a reliable mechanism for websites to remember stateful information (such as items in a shopping cart) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past). Cookies can also be used to remember pieces of information that the user previously entered into form fields, like names, addresses, passwords, and credit card numbers.

// Key Points:
// Data Storage: Cookies store data locally on the user's device.
// State Management: They help in managing user state and preferences.
// Session Tracking: Useful for tracking user sessions and activity.
// Form Data: Can store form inputs like login details.
// Expiration: Cookies have expiration dates after which they are deleted.

// Example:
// Consider an online shopping site. When you add items to your cart, the site uses cookies to remember your selections. Even if you navigate away from the page, when you return, your items are still in your cart, thanks to the information stored in the cookies.

//  NOw JavaScript can create, read, delete cookies with the document.cookie property. With JS a cookie can be created like this:

document.cookie = "username=John Doe";

// You can also define a time for the cookie, after that the cookie will expire

document.cookie = "username=John Doe; expires= Thu, 16 Nov 2023 12:00:00 UTC";

// With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
// when the value of the path is specified as backslash /, the cookie is made available across the entire domain, not just the page where it was set. This means any request made to any page within that domain will include this cookie, until it expires or is deleted
document.cookie =
  "username=John Doe; expires=Thu, 16 Nov 2023 12:00:00 UTC; path=/";

// An important note is, you can save multiple cookies with same structure

// This format is defined in the Internet standards for HTTP (RFC 7231).
// The components of this date format are:

// Weekday: Three-letter abbreviation of the day of the week (e.g., Sat for Saturday).
// Day: Numeric date of the month.
// Month: Three-letter abbreviation of the month.
// Year: Four-digit year.
// Time: Time in hours, minutes, and seconds.
// Time Zone: Always GMT for cookies.

//* Now lets design a setCookie() method the creates a cookie with a specified name, value and expire days

//! NOTE that Both username and name are just identifiers that you've chosen. They don't have any special meaning to the browser itself; their meaning is entirely up to the application that sets and reads these cookies. For example, one website might use username to store a user's login name, while another might use name to store the user's full name.

function setCookie(cName, cValue, exDays) {
  const d = new Date(); // the current time

  // When you use the setTime() method in JavaScript on a Date object, it overwrites the date and time of that object with the new time specified in the method's argument
  // After this operation, d will no longer represent the current date and time but rather the specific date and time specified in the argument
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  console.log(expires);
  document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

// lets retrive the specific cookie we are looking for
// now note that when you print document.cookie it returns all the cookie set to the cookie object

// but in the below method we only want to retrieve the cookie value with the name "name".

// useing split substring indexof etc to retrive just the name value from the name property
function getNameCookie(cname) {
  let name = cname + "=";
  cookieArr = document.cookie.split("; ");
  console.log(cookieArr);
  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i].indexOf(name) === 0) {
      return cookieArr[i].substring(name.length);
    }
  }
  return "";
}

// This method check if a cookie exist with the given name, if not, the method promts the user if they want to add a cookies or not. if they press okay then they can set a cookie, which will last for 365 days.
function checkCookie(cookieName) {
  let username = getNameCookie(cookieName);
  if (username != "") {
    alert("Cookie Exists!");
  } else {
    alert("No cookie exists by that namme");
    let response = confirm("Do you want to add a new cookie?");
    if (response) {
      username = prompt("Please enter you name: ");
      if (username) {
        setCookie("username", username, 365);
        alert("cookie entered successfully!");
      } else {
        alert("A valid name was not entered. bye!");
      }
    }
  }
}
