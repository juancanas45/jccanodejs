
const { Router } = require('express');
const router = Router();

const dias = require('../clientes.json');
//console.log(clientes);

var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;


router.get('/dias', (req, res) => {
     var html = '<form action="/diasv" method="POST">'+
     '<input type="hidden" name="oculto" val="campo oculto pero no invisible!">'+
 '<div> <label for="nombre">Nombre Completo: </label>'+
 '<input type="text" id="nombre" name="nombre"></div>'+
 '<div> <label for="dcto">Dia Nacimiento: </label>'+
 '<input type="text" id="dian" name="dian"></div>'+

'<div> <label for="sal">Mes Nacimiento: </label>'+
 '<input type="text" id="mesn" name="mesn"></div>'+

 '<div> <label for="dias">Año Nacimiento: </label>'+
 '<input type="text" id="anon" name="anon"></div>'+
 
  '</br><label>Dia Actual:'+ day +'</label>'+       
  '<label>Mes Actual:'+ month +'</label>'+ 
  '<label>Mes Actual:'+ year +'</label>'+ 


'<div>'+
'<button type="submit">Enviar</button>'+
'</div>'+
'</form>';
    res.send(html);
}
);

router.post('/diasv', (req, res) => {
    var nemp= req.body.nombre;
    var ndia= req.body.dian;
    var nmes= req.body.mesn;
    var nano= req.body.anon;
    

    //calculos
   if (nano>year){
   res.send("Error el Año de nacimiento no puede ser mayor al año actual"); 
      }else {
     
  var tano=year-nano;         
  var tmes=year-nano;          
     

    var msghtml='usted Señor :' + nemp + ' hoy tiene </br>'+
    '</br>' + tano + ' Años '++' Meses '++' dias</br>'+
    ' <a href="/dias"> Probar de Nuevo </a>';
    res.send(msghtml);  
     });

    }

module.exports = router;
