// A web Worker is a JavaScript running in the background, without affecting the performance of the page

// When executing  scripts in an HTML page, the page becomes unresponsive until the script is finished

// A web worker is JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page.

// That means you can continue to do whatever you want; clicking, selecting, etc. While web worker runs in the background

// So to acomplish parallal activity we use web worker

// Lets see some demonstartion

// !First not all browser supprots web worker, so at first you should check if your browser supprots its or not

if (typeof Worker !== "undefined") {
  // Yes web worker support
  console.log("Yes web worker support");
} else {
  console.log("Unfortunately your web worker does not support your browser");
  // Unfortunately your web worker does not support your browser
}

// Lets first know about the Worker Object

// Definition
// In JavaScript, a "Worker" object lets you run tasks in the background, separate from the main program. This is part of the Web Workers API, which lets JavaScript handle multiple tasks at once. With Web Workers, you can run code in the background without making the main page slow or unresponsive. You can send messages back and forth between the background task (the worker) and the main program. This is really helpful for doing big, complex tasks without affecting the user's experience on the page.

// Communication
// The main thread communicates with the worker through a messaging system. Messages are sent to the worker using the postMessage() method, and responses are received using an onmessage event handler.

// Termination
// Workers can be terminated from the main thread using the terminate() method. This immediately stops the operation of the worker.

// Other informations
//  Limitations: Workers operate independently of the main thread, so they cannot directly manipulate the DOM. They also have no access to some of the JavaScript objects and functions, like window or document.

// Use Cases: Web Workers are useful for performing computationally expensive tasks, like image processing, complex calculations, or handling large datasets, without blocking the user interface.

// Types of Workers: There are different types of workers, like dedicated workers (used by a single script), shared workers (shared between multiple scripts), and service workers (for tasks like background synchronization, push notifications).

let workerObj;
function startWorker() {
  // at first we determine if the worker is available or not
  if (typeof Worker !== "undefined") {
    // Worker api is available

    if (typeof workerObj == "undefined") {
      // created a worker called workerObj
      workerObj = new Worker("worker.js");
    }

    // ilstining for worker events/messages
    // onmessage is an event handler in JavaScript. It is specifically used for handling "message" events. an event handler is a function that is called when a specific event occurs. The onmessage event handler is called when a message event is received.
    // onmessage is used to handle messages sent from the main thread to the worker thread. The worker thread can also send messages back to the main thread, which are handled by the same function as well

    // In the below case a message is coming from the worker file, so we are using the onmessage function to recieve the evet and its data
    workerObj.onmessage = function (event) {
      console.log("Hi");
      document.getElementById("demo").innerHTML = event.data;
    };
  } else {
    console.log("Hi");
    alert("Browser does not supprot web worker!");
  }
}

function stopWorker() {
  if (typeof Worker !== "undefined") {
    workerObj.terminate();
    workerObj = undefined;
  } else {
    alert("Browser does not supprot web worker!");
  }
}


// So the main purpose of this lesson is to show that, event if worker thread is busy doing heavy work we can still use the main thread.