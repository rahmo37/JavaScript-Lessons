// The history object keeps track of all the pages you've visited in that browser tab.

// The back() function takes you back to the last page you were on, just like when you press the "Back" button in your browser.
function back() {
  history.back();
}

// The history.go(n) method moves the current page to the nth page in the browser's history, relative to the current page.
// If n is negative, it goes back. For example, n = -1 is the same as history.back().
// If n is positive, it goes forward.
// If n is 0, it reloads the current page.
function backTo(n) {
  history.go(n);
}

// The history.forward(); command tells the browser to go one step forward in the history. The history object keeps a record of the pages you have visited in the current browser tab.
function forward() {
  history.forward();
}

// The history.length property holds the number of pages in the history stack for the tab you're currently using. The alert() function then displays this number in a popup alert box.
function getHistory() {
  alert(history.length);
}
