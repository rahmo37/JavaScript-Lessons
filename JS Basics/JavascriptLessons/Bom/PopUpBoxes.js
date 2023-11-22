// JS has 3 kinds of popup boxes: Alert box, Confirm box, Prompt box.

// Alert Box
// An alert box in web development is a small window that appears on a web page to provide information to the user, and pauses everything until a response is recieved
// We use alert box to achive couple of things
/**
 * Attention Grabbing
 * Simple MSG display
 * Not Customizable
 * Block Interaction
 */

// Show alert function is calling the alert function of the window object
function showAlert() {
  window.alert("Alert!");
}

// A confirm box is often used if you want the user to verify or accept something.
// When a Confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
// If the user clicks "OK", the box return true, If the user clicks cancel the box return false

function showConfirm() {
  let status = window.confirm("Ok/Cancel?");

  document.getElementById("confirm").innerHTML = status
    ? "You pressed ok"
    : "You pressed cancel";
}

// window.prompt function prompts the user to input a value, then the user can enter the value
// First parameter is for the prompt message, and in the second a text can be given to fill the input box
function showPrompt() {
  let txt;
  let answer = window.prompt("Please Enter your name: ", "Obead for example!");
  if (answer === null || answer === "") {
    txt = "User did not input any value";
  } else {
    txt = "User entered: " + answer;
  }
  document.getElementById("prompt").innerHTML = txt;
}
