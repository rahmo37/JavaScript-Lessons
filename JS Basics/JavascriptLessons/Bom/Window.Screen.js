const pList = document.getElementsByTagName("p");
console.log(pList);

// In JavaScript, the screen object contains information about the user's screen, such as its resolution. It's a built-in object that browsers provide as a way to inspect and use details about the screen on which the browser is currently being displayed. The screen object can be particularly useful for adapting the rendering of web pages to different screen sizes and resolutions.

// Here's a rundown of some of the properties of the screen object:

// screen.width

// This property returns the width of the user's screen in pixels.
// screen.height

// This provides the height of the user's screen in pixels.
// screen.availWidth

// This returns the width of the user's screen, in pixels, minus interface features like the Windows Taskbar.
// screen.availHeight

// Similar to availWidth, this returns the height of the screen minus interface features that could be along the top or bottom of the screen.
// screen.colorDepth

// This property reports the number of bits used to represent the color of a single pixel.
// screen.pixelDepth

// Generally equal to colorDepth, it returns the color resolution (in bits per pixel) of the screen.

// these are information about the whole screen
// What is the actual size of you monitor
pList[0].innerHTML = screen.width;
pList[1].innerHTML = screen.height;

// What is the size after the taskbar
pList[2].innerHTML = screen.availWidth;
pList[3].innerHTML = screen.availHeight;

// pixel information
pList[4].innerHTML = screen.colorDepth;
pList[5].innerHTML = screen.pixelDepth;
