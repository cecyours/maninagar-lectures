const { NOTIMP } = require("dns");

//Normal Functions
function greet(name) {
    return `Hello ! ${name}`
}
greet("Anil chavan")
console.log(greet("Anil chavan"));


//Arrow Functions
const arrowFunction = () => {
    console.log("this is a arrow function");
}
arrowFunction();



//IIFE (Immidiatyly invoked funtion expression)
(function () {
    console.log("this is IIFE");
})()

const bf2 = Buffer.from([67,23,33])
console.log(bf2.toString());
