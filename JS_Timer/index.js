console.log("Running JavaScript Code...");

// JavaScript Timer function
// setTimeout()
// setInterval()

// setTimeout() function
function myCode() {
    console.log("I love JavaScript...");
    console.log("I love Java...");
}

let timer;

start = () => {
    // run the code after delay of the seconds
    // It will take the time in milliseconds so, 1 sec = 1000 ms
    // setTimeout(myCode, 3000);

    // run the code in some interval of the time
    timer = setInterval(myCode, 2000); // 1 sec = 1000 ms
}

stop = () => {
    // Stop the excuting code in interval
    console.log("Terminating the code...");
    clearInterval(timer);
}
