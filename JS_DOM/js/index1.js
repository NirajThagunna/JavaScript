console.log("JavaScript");

// Creating an element
let element = document.createElement('li');
let text = document.createTextNode("MySql");
element.appendChild(text);

// Add some attributes to the element class
element.className = "item";
element.id = "main";
element.setAttribute('name', "list");
// element.innerHTML = "<b>MongoDB</b>";

let ul = document.getElementById("list");
ul.appendChild(element);

console.log(ul);
console.log(element);

// Replacing an element
let newElement = document.createElement("h3");
newElement.id = "new";
text = document.createTextNode("Niraj Thagunna");
newElement.appendChild(text);

let newOne = element.replaceWith(newElement);
console.log(newOne);

// JavaScript Events
document.getElementById('txt').addEventListener(
    "mouseout", (event) => { // event - click, mouseOver
        console.log("You had clicked!!!");
        // target attribute means that the element
        let ele = event.target;
        console.log(ele);
    }
)


let btn = document.getElementById("btn");

btn.addEventListener("mouseleave", eventFun);

function eventFun(e) {
    console.log(e);
    e.preventDefault();
}
