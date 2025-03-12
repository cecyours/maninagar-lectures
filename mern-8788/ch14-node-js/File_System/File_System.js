const fsPromises = require('fs').promises;



//For reading
fs.readFile("first.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error Reading File", err);
        return
    }
    console.log("File data", data);

})


//For writing
fs.writeFile("first.txt", "Hello , I am changes", (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log("File updated ");

})

//For open file 

fs.open('first.txt', 'r', (err, fd) => {
    if (err) {
        console.error('Error opening file:', err);
        return;
    }
    console.log('File opened successfully, descriptor:', fd);
    fs.close(fd, () => console.log('File closed'));
})


//deleting file 

fs.unlink("first.txt", (err) => {
    if (err) {
        console.log("Error while deleting file", err);
        return;
    }

    console.log("File deleted succesfully ");

})