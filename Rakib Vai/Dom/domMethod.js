const form1 = document.forms["frm1"];

console.dir(form1);

let text = "";

for (let i = 0; i < form1.length; i++) {
  text += form1.elements[i].value + "<br>";
}


const p = document.getElementById("demo");

p.innerHTML = text;