// this keyword
// this keyword is a reference variable that refers to the current object.
// The JavaScript this keyword refers to the object it belongs to.

// In a method this refers to the owner of the object.
var student = {
    sName : "Niraj Thagunna",
    stream : "CSE",
    address : "Nepal",
    details : function() { // anonymous function - It will call at the time
        return this.sName + " " + this.stream + " " + this.address;
        // this refers to the student object
    }
}

let sDetail = student.details();
console.log(sDetail);

// this keyword is used to represent the global context
// In a JavaScript function, the owner of the function is the default binding for this.
// So, in a function, this refers to the Global object [object Window].
let course = "JavaScript";

function getCourse() {
    return this; // refers to the global object that's why it is returning the undefined
    // So, when used in a function, in strict mode, this is undefined.
} 

// getCourse(); // So, when used in a function, in strict mode, this is undefined.
// if (getCourse() === window)
if (getCourse() === undefined) {
    console.log(true);
}



// this keyword in the event handlers
// in HTML event handlers, this refers to the HTML element that received the event.

/*
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
*/
