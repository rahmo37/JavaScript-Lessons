// const demo = document.getElementById("demo");

let i = 0;
while (i < 1000000000) {
  i++;
  for (let j = 0; j < 10; j++) {}
}

// Now this is not going to work because external files does not have access to document object. as mentioned in the main file
// demo.innerHTML = i;

// postMessage method is used to sent messeages to the main file

// sending the i variable in the parameter
postMessage(i);
