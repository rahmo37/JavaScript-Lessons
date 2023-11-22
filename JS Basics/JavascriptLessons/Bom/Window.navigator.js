// The Navigator object is a part of the Window object in web browsers, which represents the state and identity of the user's browser. It contains information such as the browser version, the name, and the operating system it's running on. It's like a name tag for your browser that websites can read to learn more about the software you're using to access the internet

const pCollections = document.getElementsByTagName("p");

// Returns the name of the browser
pCollections[0].innerHTML = navigator.appName;

// The internal code name of the browser
// The internal "code" name of the browser. (Often "Mozilla" for historical reasons)
pCollections[1].innerHTML = navigator.appCodeName;

// The version information of the browser
pCollections[2].innerHTML = navigator.appVersion;

// A string that contains information about the browser version, operating system, and the browser engine
pCollections[3].innerHTML = navigator.userAgent;

//  string that represents the platform the browser is running on
pCollections[3].innerHTML = navigator.platform;

//  The preferred language of the user, usually the language of the browser UI
pCollections[4].innerHTML = navigator.language;

// A Boolean that returns true if the browser is online
pCollections[5].innerHTML = navigator.onLine;

// Indicates whether cookies are enabled in the browser
pCollections[6].innerHTML = navigator.cookieEnabled;

// Provides access to the location of the device
pCollections[7].innerHTML = navigator.geolocation;

// Provides access to the location of the device
pCollections[8].innerHTML = navigator.product;

// Indicates the user's do not track setting (e.g., "1" for tracking disallowed)
// Value "1": If navigator.doNotTrack returns "1", it indicates that the user has opted into the DNT feature in their browser settings, signaling that they do not want to be tracked across websites.

// Value "0": Conversely, if it returns "0", the user has specified that they consent to being tracked.

// Value "null" or "undefined": If the property returns null or undefined, it means that the DNT setting has not been set by the user, or the browser does not support DNT.

pCollections[9].innerHTML = navigator.doNotTrack;

// Wheather Jav is enabled or not
pCollections[10].innerHTML = navigator.javaEnabled();
