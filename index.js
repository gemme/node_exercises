// console.log(global);

// console.log(__dirname);
// console.log(__filename);

// console.log(process);

// module exports require

// commonjs 
const printName = require('./my_module');

 printName('Ernesto... printing');

// import { printName } from "./my_module.mjs";

//printName('Ernesto... printing');


// Modules

// fs file system 
// path manejar rutas
// child_process 
// http - interaccion de red a nivel SO

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
// console.log(lodash);

// err
// data
fs.readFile(path.join(__dirname, 'template.html'), 'utf-8' , function (err, file){
    if(err) {
        console.log('no existe el archivo callback hell');
        return ;
    }
    // console.log(file);
    let newTemplate = new String(file);
    const data = {
        title: 'Hello world Node',
        name: 'Ernesto Manuel '
    };

    // for(const [key, value] of Object.entries(data)){
    //     console.log(key, value);// {title}
    //     newTemplate = newTemplate.replace(`{${key}}`, value)
    // }
    _.forIn(data, function(value, key){
        newTemplate = newTemplate.replace(`{${key}}`, value);
    })
    // console.log(newTemplate);
    // callback hell
    fs.writeFile(path.join(__dirname, 'newTemplate.html'), newTemplate, function(err, data) {
        console.log('file built successfully');
    });
}) ;