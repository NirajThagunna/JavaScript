console.log("Hello JavaScript");

// Creating a new Node dynamically
addNode = () => {
    console.log("Adding nodes...");

    // Creating a node
    let newElement = document.createElement("h5");

    // Creating a node text
    let nodeText = document.createTextNode("I've been added dynamically...");

    // add the text into the div tag
    newElement.appendChild(nodeText);

    newElement.id = "added";

    // console.log(newElement);

    // taking the element object
    let element = document.querySelector('.container');
    // console.log(element);

    // appending the newElement in the div tag
    element.appendChild(newElement);
}

// Removing the node dynamically
removeNode = () => {
    console.log("Removing the node...");

    // element
    let element = document.getElementById('rmv');

    // Inside the div tag
    let ele = document.querySelector(".container");

    // removing the element
    ele.removeChild(element);
}


// Replacing the node
function replaceNode(){
    console.log("Replacing the nodes...");

    let textNode = document.createTextNode("No, I Love Java");

    let element = document.getElementById("rPlc");
    element.replaceWith(textNode);
}


