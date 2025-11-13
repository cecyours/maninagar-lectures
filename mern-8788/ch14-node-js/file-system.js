const fs = require('fs');

fs.readFile('home.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err);
    console.log(data);
})


fs.writeFile('dummy.txt', 'Hey, I`m Aryan', (err) => {
    if(err) throw (err);
    console.log("File written successfully");
})

fs.unlink('home.txt', (err) => {
    if(err) throw (err);
    console.log("File delete successfully");
})

fs.rename('dummy.txt', 'example.txt', (err) => {
    if(err) throw (err);
    console.log("File rename successfully");
})