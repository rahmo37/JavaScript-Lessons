// You can define a function here and then later just call this function in the HTML
function changeText() {
  const h1 = document.getElementById("title");
  h1.innerHTML = "Hello World";
}

// receiving an element from the HTML and then mnipulating that element
function anotherChangeText(element) {
  element.innerHTML = "JS CSS HTML";
}

// change the onclick attribute through the JS
const myBtn = document.getElementById("myBtn");
myBtn.onclick = function () {
  console.log("Button Clicked");
};

// capitalize the letters at onchange event
function capitalize() {
  const input = document.getElementById("name");
  input.value = input.value.toUpperCase();
}
