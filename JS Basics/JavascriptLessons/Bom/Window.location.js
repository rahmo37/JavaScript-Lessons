const pCollection = document.getElementsByTagName("p");
// The window.location object in JS, is a part of the window object and is used to get the current pages (URL) and to redirect the browser to anew page.

// Lets see some methods and properties of the location object

// location.href: The entire URL. If you assign a new URL to this property, the browser will navigate to the new location.

// Lets print the current url in the window
pCollection[0].innerHTML = location.href;

// The domain name of the web host. such as google.com, open.ai.com, youtube.com
pCollection[1].innerHTML = location.hostname;

// The hostname name the port
pCollection[2].innerHTML = location.host;

// The path and filename of the URL
pCollection[3].innerHTML = location.pathname;

//gives you the protocol you are using, http or https
pCollection[4].innerHTML = location.protocol;

// returns the port number
pCollection[5].innerHTML = location.port;

// we can use location.assign function to go to a different website
// Loads the resource at the URL provided in the argument.
function loadWebsite() {
  location.assign("https://w3schools.com");
}
