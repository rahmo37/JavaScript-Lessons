const btn = document.getElementById("button");

// Syntax of addEventListener
// Element.addEventListener("name of the event", callback function);
const clicked = function () {
  console.log("the button was clicked");
};
btn.addEventListener("click", clicked);

// you can add multiple event listener to one element
btn.addEventListener("mouseover", function () {
  console.log("the mouse in now on the button");
});

// you can even add eventListener to the window object.
// For example, lets say if the window is resized we want an event to trigger
window.addEventListener("resize", function (e) {
  // when an event is triggered, it returns an event object, we are printing the event
  console.log(e);
});

// Now lets say we have a function and it takes a parameter
function nothing(text) {
  console.log(text);
}
// we want this function to be called when an event is triggered
// We know addEventListener method takes a callback function, recall that providing a callback function is not same as calling a function. when you pass a callback function it's body is passed in the parameter, so that the function can be executed, on the other hand calling a function returns a result, and that result is placed directly in the parameter.

// now lets say when button is clicked we want to execute the function
// if we just pass the function body its calling nothing as a callback function, but we want pass a parameter in it right?

// btn.addEventListener("click", nothing);

// so insted of the above syntax we use an anonymous function and call the function nothing by passing a parameter
btn.addEventListener("click", function () {
  nothing("this function is called");
});

// Bubbling and Capture is another concept, lets say you have a div and it has button. now the container and the button both has the eventListener, now when clicked on the button, you are essentially clicking both the div and the button, but which one do you want to trigger first, to control this flow you use the bubbling or capture, if bubbling mode, button first and then div, if capture mode div first and then button.

// we just add a third parameter to the addEventListener method and pass true or false, false means bubbling, true means capture.

// Now lets say an element of yours has multiple eventListener and you want to remove one event from it, with the click of another button.

const remove = document.getElementById("remove");

remove.addEventListener("click", function () {
  console.log("Hi");
  btn.removeEventListener("click", function () {
    nothing("this function is called");
  });
});
// ! note that the above syntax wont work because, You cannot directly remove an event listener that was added using an anonymous function because removeEventListener requires a reference to the exact function that was added in order to remove it.

// So lets remove the event that was referencing a named function...
remove.addEventListener("click", function () {
  btn.removeEventListener("click", clicked);
});
// Now this is working
// So remeber the event has to be referencing a named function to be able to remove it
