const path = require('path');
const express = require('express');
// const Multer = require('multer');
const ControladorUsuario = require('../Controllers/Usuario');

const router = express.Router();
// const Upload = Multer({ storage: Multer.memoryStorage() });

//Get
router.get('/', ControladorUsuario.getInicio);

//Post
// router.post('/Agregar', Upload.single('Perfil'), ControladorUsuario.postEditarPerfil);


module.exports = router;