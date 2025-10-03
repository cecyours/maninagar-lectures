// const os = require('os')
const fs = require('fs')

const SA = require('lodash')

// console.log(os.platform());
// console.log(os.totalmem());

// ------------------
fs.readFile('home.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Sorry , here is some error");
        return
    }
    console.log("file content", data);
})


console.log(SA.capitalize("hello world"));





