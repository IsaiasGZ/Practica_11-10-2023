const http = require('http');

const express=require('express');
const app=express();

app.set('view engine', 'ejs');
app.set('views', 'Views');

const RutasUsuario = require('./Routes/Usuario');
app.use(RutasUsuario);

const servidor = http.createServer(app);

servidor.listen(3000);