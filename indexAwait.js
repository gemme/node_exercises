
// fs file system 
// path manejar rutas
// child_process 
// http - interaccion de red a nivel SO

// const fs = require('fs');
// const path = require('path');
import { readFile, writeFile } from 'fs/promises';

try {
    console.log(import.meta.url);
    const file = await readFile(new URL('./template.html',import.meta.url ), 'utf-8');
    
    let newTemplate = new String(file);
    
    const data = {
                title: 'Hello world Node',
                name: 'Ernesto Manuel '
            };
        
    for(const [key, value] of Object.entries(data)){
        console.log(key, value);// {title}
        newTemplate = newTemplate.replace(`{${key}}`, value)
    }
    
    await writeFile(new URL('./awaitTemplate.html',import.meta.url ), newTemplate);
    
} catch(error) {
    console.log('no existe el archivo');
}
