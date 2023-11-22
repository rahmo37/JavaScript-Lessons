// There could be many forms in an HTML page, i am retriving the form with the id frm1
// I am saving the whole form object in the x variable
// The form with the id frm1 / x has 3 elements in it. First name, Last Name and the submit button
// My goal is to retrieve the value from each element

// document.forms with the specific id will give me the specific form i am looking for
const x = document.forms["frm1"];
let text = "";

// x.elements will retrun an array.
console.log(x.elements);
// so I am retriving the element's value from each element in the array
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
// concatanating the text value
// Then i am sending the value of text to the innerHTML of the p object
document.getElementById("demo").innerHTML = text;

console.dir(x);

// just like document.forms there is method for every element
// One example is document.images
const imgs = document.images;
console.log(imgs);
