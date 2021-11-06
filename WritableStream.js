
const Stream = require('stream')
const writableStream = new Stream.Writable();
const readableStream = new Stream.Readable();
const { Transform } = require('stream')
const TransformStream = new Transform();
TransformStream._transform = (chunk, encoding, callback) => {
    TransformStream.push(chunk.toString().toUpperCase());
    callback();
  }

readableStream._read = () => {
};
writableStream._write = (chunk, enconding, next) => {
    console.log(chunk.toString() + ' change by GEMME');
    next();
}


writableStream.write('whats going');
writableStream.write('I dont understand');

readableStream.pipe(TransformStream).pipe(writableStream);


readableStream.push('dont ge it');



readableStream.on('data', (data) => {
    console.log(data.toString());
});