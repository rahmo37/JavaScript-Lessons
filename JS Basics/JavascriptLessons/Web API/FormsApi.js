// The Forsm API provides us some methods.
// One of them is checkValidity();
// In the input element in the html, if the input the user provides is valid (As in within the boundaries of the condition provided in the input attributes) the checkValidity() function will return true. if not within the boundaries then false.

function validation() {
  const inputObj = document.getElementById("id1");
  // If you check the attributes of the input field in HTML. you will see that we have two conditions, required reflects that the field must be filled out, and min = 100 to max = 300, reflects that the value must be within that range.

  // So based on different wrong input, the HTML sends different messages to the user. To grab and display that message we use the validationMessage property.
  if (!inputObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }

  console.log(inputObj.validity);

  // You can also change the default messages using the setCustomValiodity() property
  // Additionally you can also use the validiy property to chek if a certain condition is met or not, based on that you can provide custom messages.
  // validity property returns a ValidityState object which has all the condition, eather in true or false. if true that means the condition is not met, if false it means the condition is met
  // Here is the list of all conditions
  /**
   * 
valid
valueMissing
typeMismatch
patternMismatch
tooLong
tooShort
rangeUnderflow
rangeOverflow
stepMismatch
badInput
customError
   */

  // Lets set a custom message
  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("range exceeded!");
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }
}
