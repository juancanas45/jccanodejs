const { Router } = require('express');
const router = Router();

const cedad = require('../clientes.json');
//console.log(clientes);

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;

router.get('/cedad', (req, res) => {
     var html = '<form action="/cedadc" method="POST">'+
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

router.post('/cedadc', (req, res) => {
    
     var nemp= req.body.nombre;
    var ndia= req.body.dian;
    var nmes= req.body.mesn;
    var nano= req.body.anon;

    if (nmes < 10) nmes = "0" + nmes;
if (ndia < 10) ndia = "0" + ndia;

     if (nano>year ){
   res.send("Error la fecha no puede ser mayor al año actual"); 
      } else if (nmes>month ) {res.send("Error la fecha no puede ser mayor al año actual");}
      else if(ndia>day){res.send("Error la fecha no puede ser mayor al año actual");}

        var dia = ndia
        var mes = nmes
        var ano = nano

        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();

        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if (ahora_mes < mes) {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }

        // calculamos los meses
        var meses = 0;

        if (ahora_mes > mes && dia > ahora_dia)
            meses = ahora_mes - mes - 1;
        else if (ahora_mes > mes)
            meses = ahora_mes - mes
        if (ahora_mes < mes && dia < ahora_dia)
            meses = 12 - (mes - ahora_mes);
        else if (ahora_mes < mes)
            meses = 12 - (mes - ahora_mes + 1);
        if (ahora_mes == mes && dia > ahora_dia)
            meses = 11;

        // calculamos los dias
        var dias = 0;
        if (ahora_dia > dia)
            dias = ahora_dia - dia;
        if (ahora_dia < dia) {
            ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
            dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
        }

        //return edad + " años, " + meses + " meses y " + dias + " días";



     var msghtml='usted Señor :' + nemp + ' hoy tiene </br>'+
    '</br>' + edad + ' Años  Meses:'+ meses + ' dias '+ dias+'</br>'+
    ' <a href="/cedad"> Probar de Nuevo </a>';
    res.send(msghtml);  
});


module.exports = router;



