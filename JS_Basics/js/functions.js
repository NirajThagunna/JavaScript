// function - block of code
// code reuse - reusability
// less code

function myFunction() {
    console.log("Hey, I am a function with no-arg.");
}

myFunction();

// function with arguments 
function doSum(a, b) {
    let sum = a + b;
    return sum;
}

// Calling or invoking the function
let result = doSum(5, 10);
console.log("Sum = " + result);


// Arrow function
let sum = (a, b) => { // sum - function
    let sum = a + b;
    return sum;
}

let result1 = sum(50, 50);
console.log(result1);
console.log(typeof sum);

