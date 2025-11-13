const Event = require('events');

const emitter = new Event();

emitter.on('work', () => {
    console.log("This is created by event in node js");
})

emitter.emit("work");
