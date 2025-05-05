const fs = require('fs')

// writing file 
fs.writeFile('output.txt', "Hello this is newly created", (err, data) => {
    if (err) throw err;
    console.log("File written Succesfully");
})

// // Read file data 
// fs.readFile('output.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


// open a file 
fs.open('output.txt', 'r', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log("File Open Succesfully");
})


// unlink file 
// fs.unlink('hello.txt', (err, data) => {
//     if (err) throw err
//     console.log("File deleted successfully");
// })



// read directory
fs.readdir('.', (err, data) => {
    if (err) throw err;
    console.log(data);
})



// What is the Event Loop in JavaScript and Why is it Essential to Understand?
// https://medium.com/@burak.bburuk/what-is-the-event-loop-in-javascript-and-why-is-it-essential-to-understand-b11af520a28b

