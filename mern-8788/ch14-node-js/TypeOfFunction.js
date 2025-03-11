const { NOTIMP } = require("dns");

//Normal Functions
function greet(name) {
    return `Hello ! ${name}`
}
greet("Anil")
console.log(greet("Anil"));


//Arrow Functions
const arrowFunction = () => {
    console.log("this is a arrow function");
}
arrowFunction();



//IIFE (Immidiatyly invoked funtion expression)
(function () {
    console.log("this is IIFE");
})()



