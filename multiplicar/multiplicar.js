// requires
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./archivo');

let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(``);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }



}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es númerico.`.red);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err.red)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}