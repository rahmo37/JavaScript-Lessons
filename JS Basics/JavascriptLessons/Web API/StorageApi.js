// A web broswer has its own small memory, where you can store texts, but its not recommended for professional use

// Web browsers have 2 kinds of storage, one is localStorage and one is sessionStorage

// What is local storage?
// LocalStorage means my resouces will be stored in the LocalBrowser, meaning, for every user of the website their resourses will be stored in their local storage.

// Remember the text will be stored in that specific PC's web-browse not any other web-broser

// Do not expect to save some thing in you PC's web-browser and have access to in you phone's browser

// Session Storage on the other hand will store only for the current session, when you close the browser, the resources will be removed

// in storage we store values with a [name <-> value] pair format

// Lets list out some methods and properties of the sessionStorage and localStorage first, then we will see the implementation

// key(n) returns the name of the nth key in the storage

// length, returns the number ofdata items stored in the Storage object

// getItem(keyname) returns the value of the specified key name

// setItem(keyname, value) add that key to the storage, or update that key's value if it already exists

// removeItem(keyName) removes that key from the storage

// clear() Empty all key out of the storage

function setLocalStorage(name, value) {
  localStorage.setItem(name, value);
}

function getLocalStorage(name) {
  alert(localStorage.getItem(name));
}

function removeItemFromLocalStorage(name) {
  localStorage.removeItem(name);
}

function clearLocalStorage() {
  localStorage.clear();
}

// These two methods proves that the session storage is temporary and session specific. if you close the browser(not refresh), the content will be erased
function setSessionStorage(name, value) {
  sessionStorage.setItem(name, value);
}

function getSessionStorage(name) {
  alert(sessionStorage.getItem(name));
}
