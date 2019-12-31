const express = require('express');
const app = express();
const asoaif = require('asoiaf-api');

app.use(express.static(__dirname + '/public/')); // poder accerder a la carpeta plucblic

//var valor =asoaif.getCharacterByName('Jon Snow'); error al consumir la libreria se intento de distiantas formas.

app.listen('3000', function() {
    console.log('Servidor web escuchando en el puerto 3000');
});