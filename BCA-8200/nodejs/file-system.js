const fs = require('fs')

// reading a file
fs.readFile('home.txt', 'utf8', (err, data) => {
    if (err) return
    console.log(data);
})

// create a file
fs.writeFile("dummy.txt", "hello sania", (err) => {
    if (err) throw err;
    console.log("file write done");
})


fs.unlink('home.txt', (err) => {
    if (err) throw err;
    console.log("file  deleted successfully");
})


fs.rename('dummy.txt', 'new.txt', (err) => {
    if (err) throw err;
    console.log("file  rename successfully");
})