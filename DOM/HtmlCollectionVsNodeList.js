// Basically when we do the document.getElementsByTagName it returns a HTMLcollection of the specified element, p elements in the following case.
// note: HTMLCollection is not an array, though it may look like one
// meaning you cannot access the methods of the array
const pCollections = document.getElementsByTagName("p");
console.log(pCollections[0].childNodes[0].nodeValue);

// On the other Hand when we use the querrySelectorAll, it returns all element of the specified class or you can also call it nodeList.
const pList = document.querySelectorAll(".nodeList");
// you can grab the items same way as the HTMLCollection
// But again its not an array, and you will not have the access their methods aswell
console.log(pList[0].childNodes[0].nodeValue);

// Anyway the main difference between HTMLCollection and the NodeList is
// You can only access the elements in a node list with indexes, but in the HTMLCollection you can access them with id, name and index number
console.log(pCollections["p1"], pCollections[1]);
console.log(pList[0], pList["p1"]);
// pList['p1'] is not going to work and will only return undefined
