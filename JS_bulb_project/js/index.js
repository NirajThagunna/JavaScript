// JavaScript
bulbOn = () => {
    let link = document.getElementById("link");
    link.setAttribute("src", "F:/JavaScript/JS_bulb_project/images/ONBulb.jpg");
}

bulbOff = () => {
    let link = document.getElementById("link");
    link.setAttribute("src", "F:/JavaScript/JS_bulb_project/images/OFFBulb.jpg")
}

toggleBtn = () => {
    let img = document.getElementById("link");
    // console.log(img);

    // getAttributes
    let link1 = img.getAttribute("src");
    // console.log(link1);
    let link2 = "F:/JavaScript/JS_bulb_project/images/OFFBulb.jpg";
    // console.log(link2);
    console.log(link1 === link2);

    if (link1 === link2) {
        bulbOn();
        document.getElementById("toggleBtn").innerHTML = "OFF";
    }
    else {
        bulbOff();
        document.getElementById("toggleBtn").innerHTML = "ON";
    }
}

changeImg = () => {

    let imgLink = document.getElementById("link");

    // get the value of src
    let link1 = imgLink.getAttribute("src");
    let link2 = "F:/JavaScript/JS_bulb_project/images/OFFBulb.jpg";

    if (link1 == link2) {
        bulbOn();
    }
    else {
        bulbOff();
    }
}