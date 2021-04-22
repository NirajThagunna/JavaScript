// DOM Selectors

// let main = document.documentElement;
// let body = document.body;
// let head = document.head;

// console.log(head);

// changeMe = () => {
//     let selecter = document.getElementById("main");

//     // console.log(selecter);
//     // console.log(typeof selecter);

//     selecter.innerHTML = "Hello JavaScript World";
//     selecter.style.color = 'red';
// };

// Arrow function
calculate = () => {
    let heading = document.getElementById("heading");
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("op").value;

    heading.style.color = 'white';
    heading.style.border = '1px solid black';
    heading.style.background = "blue";
    heading.style.fontSize = "30px";
    heading.style.margin = "20px";
    heading.style.padding = "20px";
    heading.style.textAlign = "center";

    let calculator;

    switch (op) {
        case '+' :
            calculator = num1 + num2;
            break;

        case '-' :
            if (num1 > num2) {
                calculator = num1 - num2;
            }
            else {
                calculator = "num1 < num2";
            }
            break;

        case '*' :
            calculator = num1 * num2;
            break;

        case '/' :
            if (num2 > 0) {
                calculator = num1 / num2;
            }
            else {
                calculator = "num2 < 0";
            }
            break;
    }


    let result = document.getElementById("result");
    result.innerHTML = "Result : " + calculator;
};

// let para = document.getElementsByClassName("para");

// // console.log(para);
// // console.log(typeof para);

// for (let i of para) {
//     i.innerHTML = "I Love JavaScript";
//     i.style.color = 'red';
//     i.style.border = "1px solid red";
//     i.style.padding = "10px";
// }

// querySelector()
// select only the first element from all the classes in the html document
// let sel = document.querySelector('.para');

// console.log(sel);
// console.log(typeof sel);
// sel.style.color = 'red';


// querySelectorAll() - Returns all the matched classes in the form of an object.
// let sel = document.querySelectorAll('.para');

// console.log(sel);
// console.log(typeof sel);

// for (let i of sel) {
//     i.style.color = "red";
// }


