// Get the checkbox
let checkbox = document.getElementById("paymentMethodToggle");
let button = document.getElementById("check-status");
button.addEventListener("click", function () {
  if (checkbox.checked) {
    console.log("card");
  } else {
    console.log("cash");
  }
});
