const { Router } = require('express');
const router = Router();

const form2 = require('../clientes.json');
//console.log(clientes);


router.get('/form2', (req, res) => {
     var html = '<form action="/procesar2" method="POST">'+
     '<input type="hidden" name="oculto" val="campo oculto pero no invisible!">'+
 '<div> <label for="nombre">Nombre Empleado: </label>'+
 '<input type="text" id="nombre" name="nombre"></div>'+
 '<div> <label for="dcto">Documento Empleado: </label>'+
 '<input type="text" id="documento" name="documento"></div>'+

'<div> <label for="sal">Valor Sueldo Mensual: </label>'+
 '<input type="text" id="sueldo" name="sueldo"></div>'+

 '<div> <label for="dias">Dias trabajo en el mes: </label>'+
 '<input type="text" id="dias" name="dias"></div>'+

 '<div> <label for="extras">Numero de Horas Extras Mes: </label>'+
 '<input type="text" id="extras" name="extras"></div>'+

'<div>'+
'<button type="submit">Enviar</button>'+
'</div>'+
'</form>';
    res.send(html);
}
);

router.post('/procesar2', (req, res) => {
    var nemp= req.body.nombre;
    var demp= req.body.documento;
    var sal= req.body.sueldo;
    var dias= req.body.dias;
    var extras= req.body.extras;

    //calculos
    var liqd=(sal/30)*dias;
    var hex=(((sal/30)/8)*0.25)*extras;
    var td=liqd+hex;

    var msghtml='Señor Empleado :' + nemp + '</br>'+
    'Con Identificacion :' + demp + '</br>'+
    'Con Salario Mensual :' + sal + '</br>'+
    '</br> Liquidacion </br>'+
    'Dias Trabajados :' + dias + ' Salario :'+ liqd +' </br>'+
    'Horas extras trabajadas :' + extras + ' Valor :'+ hex +' </br>'+
    'Total devengado :'+ td+ ' </br>'+
    ' <a href="/form2"> Probar de Nuevo </a>';
    res.send(msghtml);  
});


module.exports = router;



