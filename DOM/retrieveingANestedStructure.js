const form = document.querySelector("#form");
// retriving a nested node structure
console.log(
  form.childNodes[1].childNodes[3].childNodes[1].childNodes[9].childNodes[1]
    .childNodes[3].childNodes[0].nodeValue
);
