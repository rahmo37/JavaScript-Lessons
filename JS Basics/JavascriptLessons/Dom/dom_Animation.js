// Lets write the function to animate the div in HTML

// this myMove() will be called when a button is clicked
function myMove() {
  // at first grabbing the animate div
  const animate = document.getElementById("animate");
  // pos variable starts with 0
  let pos = 0;
  // setting the interval varible with a setInterval function which calls the frame() inner function every 5 mili sec
  const interval = setInterval(frame, 5);
  function frame() {
    console.log("hi");
    // while the the pos is less than 350 the pos variable continues to  increament
    // Every time the frame() function is called we update the style property of the animate element
    if (pos < 350) {
      pos++;
      animate.style.top = pos + "px";
      animate.style.left = pos + "px";
    } else {
      // finally if the pos is equal to or greater than 350 we clear the setInterval function
      clearInterval(interval);
    }
  }
}

// myMove();
