const path=require('path')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app=express();

//Conectar a mongo
mongoose.connect('mongodb+srv://proto:quacTugxMlEP5ftY@proyectocrud.3mvfq.mongodb.net/game?retryWrites=true&w=majority')
    .then(db=>console.log('Base de datos conectada'))
    .catch(err=>console.log(err))

//Importar Rutas
const indexRoutes = require('./page/routes/index');

//Configuración
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'page'));
app.use(express.static(__dirname + '/page'));


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', indexRoutes);


//Iniciar servidor
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})
