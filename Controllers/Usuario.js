const Usuario=require("../Models/Usuario");

//Seccion GET
exports.getInicio = (req, res, next) => {
    res.render('Usuario/Inicio', {
        TituloPagina: '',
        Ruta: '/'
    });
};
//Seccion POST