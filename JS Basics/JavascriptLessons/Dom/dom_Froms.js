// Html from validation can be done by JS

// We can create a function to check if a form field is empty
// If a from field (fname) is empty, it will give you an alert to complete the field

// One thing to note, when you do document.forms["myForm"]["fname"], the browser looks for a child element of the form with the name (or id) "fname" before it looks for a property called "fname" on the HTMLFormElement object.

// It's a convenience feature provided by the DOM API, but it can definitely be confusing if you're not familiar with this behavior. The more explicit document.forms["myForm"].elements["fname"]

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  console.log(x);
  if (x == "") {
    let container = document.getElementById("container");
    container.classList.add("error");
    return false;
  }
}

// we can also validate if an input value is number or not
// Lets define a myFunction() function
// Lets grab the input field in the HTML, and its value

function myFunction() {
  // Get the value of the input field with id num
  let x = document.getElementById("num").value;
  console.dir(x);
  // if x is not a Number or less than one or greater than 10
  let text;

  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
