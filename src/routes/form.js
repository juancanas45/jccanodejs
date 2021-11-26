const { Router } = require('express');
const router = Router();

const form = require('../clientes.json');
//console.log(clientes);


router.get('/form', (req, res) => {
     var html = '<form action="/procesar" method="POST">'+
     '<input type="hidden" name="oculto" val="campo oculto pero no invisible!">'+
 '<div> <label for="campofruta">Su fruta preferida: </label>'+
 '<input type="text" id="campofruta" name="fruta">'+
'</div>'+
'<div>'+
'<button type="submit">Enviar</button>'+
'</div>'+
'</form>';
    res.send(html);
}
);

router.post('/procesar', (req, res) => {
    var dato= req.body.fruta;
    var msghtml='Su fruta favorita es :  ' + dato + '</br> <a href="/form"> Probar de Nuevo </a>';
    res.send(msghtml);  
});


module.exports = router;



