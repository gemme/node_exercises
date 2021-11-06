const EventEmmiter = require('events');


const myevent = new EventEmmiter();


// listener
myevent.on('hello', (name) => {
    console.log('I am an event' + name);
});


myevent.emit('hello', ' Ernesto');

