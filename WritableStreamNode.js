const Stream = require('stream');

const writableStream = Stream.Writable();

writableStream._write = (chunk, enconding, next) => {
    console.log(chunk.toString());
    next();
}


writableStream.write('I am writing ...');
writableStream.write(' Ernesto');
writableStream.write(' Node');
writableStream.end(' Finish');