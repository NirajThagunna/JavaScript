console.log("JS is ready...");

// Custom method
getTime = () => {

    let date = new Date();

    let hours = date.getHours();

    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours == 0 ? 12 : hours;

    hours = hours > 9 ? hours : '0' + hours;

    let minutes = date.getMinutes();

    minutes = minutes > 9 ? minutes : '0' + minutes;

    let seconds = date.getSeconds();

    seconds = seconds > 9 ? seconds : '0' + seconds;

    return `${hours} : ${minutes} : ${seconds} ${amPm}`;
}

// In-built method to get the time 
builtInTime = () => {

    let date = new Date();

    return date.toLocaleTimeString();
}


setInterval(() => {

    let clock = document.querySelector("#clock");
    clock.innerHTML = builtInTime();

}, 1000);


