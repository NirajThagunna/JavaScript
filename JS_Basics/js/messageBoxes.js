// Window message boxes

// window: alert - window = Object is globally available

// window.alert("Hi, JavaScript!!!"); // simple js alert box


// window: prompt
// prompt -> It will take the input from the user

// let user = prompt("Hey, What's your name?");
// document.write("Hello, " + user + ", Welcome to JavaScript World!");

// window:  - It will return true or false
let choice = confirm("Are you sure? Do you want to go to index file? ");

if (choice) {
    location.href = "F:/JavaScript/JS_Basics/html/index.html";
}
else {
    console.warn("Not reached the file!");
}
