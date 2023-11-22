// windows history object provides similar function as the go back and go forwar arrow icons in the top left corner of a browser

// if we've navigated to a page from the current window, then we can use the history.forward to go forward

function goForward() {
  history.forward();
}

// if we've navigated to the current page from a different window the backward button of the current page can take us back to that previous page
function goBackward() {
  history.back();
}
