const fsPromises = require('fs').promises;


async function asyncFile() {
    try {
        await fsPromises.writeFile("asyncfile.txt", "this is async write")
        console.log("Success");
    } catch (error) {
        console.log("Error", error);

    }
}


asyncFile()