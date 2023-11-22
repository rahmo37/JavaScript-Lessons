function validateForm() {
  // recieving a form named myForm and saving it to form variable
  const form = document.forms["myForm"];
  // retriving the value field from the element inside the form named fname
  const value = form["fname"].value;
  // then validatting the value field, if its blank, the function returns false, otherwise undefined
  if (value === "") {
    alert("Input field cannot be blank");
    return false;
  }
  // even if the function returns undefined the validation is passed
}

function myFunction() {
  const value = document.getElementById("numb").value;
  let updateMsg;
  if (isNaN(value) || value < 0 || value > 100) {
    updateMsg = "Input not valid";
    document.getElementById("update").innerHTML = updateMsg;
  } else {
    document.getElementById("update").innerHTML = value;
  }
}
