// The data variable (API data) is defined in the data.js
// We linked the data.js in the html file

// to access the variables defined in a js File, we have to maintain the order of the links in the HTML. all the variables defined in the top js will be available to hte bottom ones

// milestonesData became an array of all the objects in the data variable
const milestonesData = JSON.parse(data).data;

// load course milestones data
function loadMilestones() {
  const milestones = document.querySelector(".milestones");
  // Session 1
  /*
  // What did we do in first session?

  okay first of all, i can define HTML code as a string value of an elements's innerHTML, and when fetching, the string will be read as HTML code

  secondly in the milsestone.innerHtml i am using a template literal, than calling the milestonesData which is an array vaiable.

  third, i am calling the map function on the milestonesData and passing in another function as a parameter(Callback function), now this another function is called for each object in the milestonesData array.

  fourth, it is mapping each object in milestonesData to a new string (which is HTML code) - but it doesn't modify the original objects in milestonesData.

  now since i have 15 objects, the HTML code provided, is being repeated for 15 times, once for each object and finally displaying actual website with affected HTML code 15 times

  A THING TO NOTE: milestone parameter in the function passed to map still holds a reference to each original object one at a time. This means you can access properties of each object within that function
  thats why in the middle of the string we are using milestone.name and milestone.modules

  Lastly, the join("") call at the end of the map operation is to concatenate all the generated HTML strings into a single string. This is done because the MAP FUNCTION RETURNS AN ARRAY, and we want to set innerHTML to a single string, not an array of strings. The join("") method turns an array of strings into a single string, with each original array element separated by the specified character - in this case, no character, so they're simply concatenated directly

  REMEMBER the map function returns an array of the newly built elements. So it is creating each elements with the HTML code and using the milestone and module parameters to fetch data from the orginal data (milestone.name and modules.name).
  */

  // Session 2
  /*
  what did we do in the second session?

  couple of thing are happening when i am clicking each milestone div,
  
  1st. we identified which div do we click when we want to enlarge the hidden panel.

  2nd. after identifying the div we included an onclick event, which calls the openMilestone() function

  3rd. at the openMilestone function we are passing the div object we just clicked on. why did we do this? so that we can grab the actual hidden panel div which we want to open. so we send the this key word, if we did not do this JS would not know which element do we want to open 

  4th. inside the openMilestone function, we are recieving the div object as milestone element. specifically now we have the actual div element passed in when we click the div.
  
  5th. our goal now is to grab the div who will be enlarged to show the module contents

  6th. we take a const variable whos name is currentHiddenPanel. since we've passed the current div object we clicked on, we can now grab its parent element, and then call the sibling element which is the actual hidden panel div. so we call the milestoneElement.parentNode.nextElementSibling. Only nextSibling may give us line breaks and spaces as the element which we do not want

  7th. next we simply call the classList property and then we call the toggle property which dynamically adds and removes the class called "show" on each click. now the show class in the css increases the height of the hidden pannel div by 400 px.

  thats it!
  */
  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      const milestoneId = milestone._id;
      return `
   <div class="milestone border-b" id="${milestoneId}">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${milestoneId})"/></div>
              <div onclick="openMilestone(this), currentMilestoneImage(${milestoneId})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules
                .map(function (module) {
                  return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`;
                })
                .join("")}
            </div>
          </div>`;
    })
    .join("")}`;
}
// Explanation of the fine tune algorithm
/*
 show class
 * at first we are retriving all the div object that currently have the show class and saving it to the openedPanel variable. if no panel is open the openedPanel variable will have null value.
 * then we are removing the show class from the openedPanel, so that the opened panel closes.
 * However we are using an if statement to check two things before closing openedPanels, 
 * 1st we are checking if the currently selected div has the the show class or not and if the openedPanel variable is null or not, we can only remove the show class (close the openedPanels) if the currently selected class does not have any show class (current panel is closed) and the other openedPanel is not null meaning another panel is open and we need to close that 
 * and same thing is happening for the active class
*/

function openMilestone(milestoneElement) {
  const currentHiddenPanel = milestoneElement.parentNode.nextElementSibling;

  const boldedMilestone = document.querySelector(".active");
  if (!milestoneElement.classList.contains("active") && boldedMilestone) {
    boldedMilestone.classList.remove("active");
  }
  milestoneElement.classList.toggle("active");

  const openedPanel = document.querySelector(".show");
  if (!currentHiddenPanel.classList.contains("show") && openedPanel !== null) {
    openedPanel.classList.remove("show");
    console.log(openedPanel);
  }
  currentHiddenPanel.classList.toggle("show");
}

/* In this method we are doing some more fine tuning. So at the onclick event at the top we are retrieving the id of the object we want to manipulate, and then passing the that id in the argument.

* then in this function first we are saving the milestoneImage, title and the details elements in their corresponding variables.

* then on the next three lines we are retrieving the image, name and the description from the specific object id that was passed in and we are setting those values in their corresponding varibales.

* so mileStoneImage.src = milestonesData[id].image; is changing the specific imagage of that milestone
* milestoneTitle.innerText = milestonesData[id].name; is setting the specific name of that milestone
* milestoneDetails.innerText = milestonesData[id].description; is setting the specific description of that milestone

*/
let currentId = 0;
function currentMilestoneImage(id) {
  const mileStoneImage = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetails = document.querySelector(".details");

  if (currentId !== id) {
    mileStoneImage.style.opacity = "0";
    // Use setTimeout to introduce a delay
    setTimeout(() => {
      mileStoneImage.src = milestonesData[id].image;
      milestoneTitle.innerText = milestonesData[id].name;
      milestoneDetails.innerText = milestonesData[id].description;
    }, 700); // 2000 milliseconds = 2 seconds
    currentId = id;
  }
  
}
// This effect is not showing properly in my browser, because the images loads immidiately in my browser
const mileStoneImage = document.querySelector(".milestoneImage");
mileStoneImage.onload = function () {
  this.style.opacity = "1";
};

/* At first we are loading all the milestoneObject in the milestoneList variable

  Important note: the variable milestoneList inside the markMileStone function and the variable milestones in the loadMilestones function, are reffering to the same object in the memory, so whatever changes you make will affect the same object

  then we are grabbing the doneList element from the HTML

  on top we provided the id element to each div. when the checkBox is clicked for a box we are passing the current checkBox element and the id of the current div.

  then with that id we are retriving the current div container and saving it to the currentMilestoneContainer variable.

  finally in the if statement we are just cheking if the checkbox is clicked or not, if clicked we are removing that div from the actual milestoneList and appending it to the done list, and if the check list is again unchecked the same container will again be added in the milstoneList and removed from the doneList.

  */
function markMileStone(checkBoxElement, id) {
  const milestoneList = document.querySelector(".milestones");
  const doneList = document.querySelector(".doneList");
  const currentMilestoneContainer = document.getElementById(id);

  if (checkBoxElement.checked) {
    // mark as done
    milestoneList.removeChild(currentMilestoneContainer);
    doneList.appendChild(currentMilestoneContainer);
  } else {
    // back to main list
    doneList.removeChild(currentMilestoneContainer);
    milestoneList.appendChild(currentMilestoneContainer);
    sortMilestoneList(milestoneList);
  }
}

// finally we are calling the sortMilestoneList and passing the current unsorted milestoneList.

function sortMilestoneList(list) {
  // Get all elements from the list
  divArr = Array.from(list.children);

  // Sort the divs, a - b asceneding and b - a desending
  divArr.sort((a, b) => a.id - b.id);

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for (let i = 0; i < divArr.length; i++) {
    list.appendChild(divArr[i]);
  }
}

loadMilestones();
