// import an event 
const Event = require('events')

// create a instance of imported event 
const emitter = new Event()



// create an event 
emitter.on('work', () => {
    console.log("This is created by event in node js ");
})


// call the event 
emitter.emit("work")


// MVC

// M = Model 

// V = views

// C = controllers