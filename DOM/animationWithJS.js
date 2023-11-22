let containerWidth = window.getComputedStyle(
  document.getElementById("container")
).width;
let animatedWidth = window.getComputedStyle(
  document.getElementById("animate")
).width;
function extractTheWidth(actualWidth) {
  let number = 0;
  for (let eachLetter of actualWidth) {
    if (!isNaN(eachLetter)) {
      number += eachLetter;
    }
  }
  return Number(number);
}

function myMove() {
  const animate = document.getElementById("animate");
  let pos = 0;
  // setInterval function will call the given function in the argument after every 5 mili second
  let interval = setInterval(frame, 5);
  function frame() {
    if (extractTheWidth(containerWidth) - pos > extractTheWidth(animatedWidth)) {
      pos++;
      animate.style.top = pos + "px";
      animate.style.left = pos + "px";
    } else {
     clearInterval(interval);
    }
  }
}
