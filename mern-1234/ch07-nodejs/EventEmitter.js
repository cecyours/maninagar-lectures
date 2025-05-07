const EventEmitter = require('events')

const emmiter = new EventEmitter()




// take this as way of function define
emmiter.on('greet', () => {
    console.log("Evening from emmiterd's on event")
})


// take this as a function calling
emmiter.emit('greet')



// -----------------------------



class MyEmitter extends EventEmitter { }
const myObj = new MyEmitter();



myObj.on('event', () => {
    console.log('An event occurred!');
});
myObj.emit('event');
