console.log("Running the JavaScript!!!");

let mainEle = document.getElementById('container');
console.log(mainEle);

// first child of the container div
let first = mainEle.firstElementChild;
console.log(first.nodeName);

// last child 
let last = mainEle.lastElementChild;
console.log(last.nodeName);

// gettting the parent of the container div
console.log(mainEle.parentNode);

// getting the particular element
let node = document.getElementById("title");

// getting the nextSiblings
console.log(node.nextElementSibling);

// getting the previous siblings
console.log(node.previousElementSibling);
