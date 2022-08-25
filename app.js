require('dotenv').config({path:'env/.env'});

const colors = require('colors');

const express = require('express');
const app = express();

const num_puerto = process.env.PUERTO;

//Directorio publico
app.use(express.static('public'));


app.listen(num_puerto,()=>{
    console.log(`Servidor inicializado en http://localhost:${num_puerto}`.bgGreen);
});
