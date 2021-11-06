// 4 tipos de stream en Node

// Readable
// Writable
// Duplex
// Transform

const fs = require('fs');
const Stream = require('stream');

const readableStream = Stream.Readable();
readableStream._read = () => {}

const writableStream = Stream.Writable();
writableStream._write = (chunk, enconding, next) => {
    // chunk = chunk + ' ernesto'
    console.log(chunk.toString());
    next();
}
const transformStream = Stream.Transform();
transformStream._transform = (chunk, encoding, callback) => {
    transformStream.push(chunk.toString().toUpperCase());
    callback();
  }


readableStream.push('Hello');
readableStream.push('World');
readableStream.push('Whats going on');
setTimeout(() => {
    readableStream.push('too long');
    readableStream.push(null);

}, 5000)
// nuestro Stream hace un emit de data

// readableStream.on('data', data =>{
//     console.log(data.toString());
// });

// readableStream.on('end', () =>{
//     console.log('por fin acabe');
// });

readableStream.pipe(transformStream).pipe(writableStream);

// fs.readFile
//   replace
// fs.writeFile


const readableFileStream = fs.createReadStream(__dirname + '/template.html');

const writableFilestream = fs.createWriteStream(__dirname + '/templateStream.html','utf-8');

const transformFileStream = Stream.Transform();
transformFileStream._transform = (chunk, encoding, callback) => {
    transformFileStream.push(chunk.toString().replace(`{title}`, 'FUNCIONA GENIAAAL'));
    callback();
  }
// programacion funcional rxjs
readableFileStream
    .pipe(transformFileStream)
    .pipe(writableFilestream)

readableFileStream.on('data', (data)=> {
    console.log(data.toString());
});

// Buffer 
// Events
// Streams
const buf = Buffer('Ernesto');

console.log(buf);