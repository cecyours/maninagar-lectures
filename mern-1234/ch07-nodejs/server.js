const http = require('http')

const server = http.createServer((req, res) => {  //create a server
    res.statusCode = 200;
    res.setHeader('contensert-type', 'text/plain');
    res.end("hello world i am here")  // send response
})
//host on port 9000
server.listen(9000, () => {
    console.log("Server Is runnig on http://localhost:9000");
})


