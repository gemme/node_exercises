const Stream = require('stream');
const readableStream = new Stream.Readable();
readableStream._read = () => {}


setTimeout(() => {
    readableStream.push(JSON.stringify({
        data: 'hello'
    }));

    readableStream.push(null);
}, 100);


readableStream.on('data', (data) => {
    console.log(data.toString());
});

readableStream.on('end', (data) => {
    console.log('finish');
});