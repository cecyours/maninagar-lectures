function myFunc(name) {
    console.log("this is normal function", name)
}

myFunc("Rosewin", "hello", "hi")

const myFunction = (greet) => {
    console.log("Hello", greet)
}

myFunction("How are you!")

const square = function (X) {
    return X * X;
}

console.log(square(12));

console.log("----------callback----------");

function myCall(callback) {
    const name = "call"
    console.log(callback(name));
}

myCall(myFunc)