// JavaScript Document
function cargaPrimerosValores(opcion, arrValores) {
  arrValores = arrValores.arrayAyudas;
  var texto = "";
  var colorFondo = '';
  var contador = 0;
  var linea = "";
  $("#div_tabla").append("<table id='idTablaTextos' class='table table-hover'>");
  linea = "<tr><td>--" + contador + "--</td><td><p id='texto_" + contador + "' class='lead ' >" + texto + "</p></td>"
    + "<td><button class='py-1' id='btn_" + contador + "' >Reset</button></td></tr>";
  contador++;
  $("#idTablaTextos").append(linea);
  var hayFilas = arrValores.length;
  for (var i = 0; i < hayFilas; i++) {
    var ambito = arrValores[i].ambito;
    var texto = arrValores[i].texto;


    linea = "<tr><td>---" + contador + "---</td><td><p id='texto_" + contador + "' class='lead " + colorFondo + "' >" + texto + "</p></td>"
      + "<td><button class='py-1' id='btn_" + contador + "' >Copiar</button></td></tr>";
    if (ambito == opcion) {
      $("#idTablaTextos").append(linea);
      contador++;
    }
  }
  $("#div_tabla").append("</table>");
  //$("#idTablaTextos").append("</table>");
}
//////////////////////////////////////////////////////////////////////////
function ModificaTextos(opcion, arrValores) {
  arrValores = arrValores.arrayAyudas;
  var hayFilas = arrValores.length;
  var contador = 1;
  for (var i = 0; i < hayFilas; i++) {
    var ambito = arrValores[i].ambito;
    var texto = arrValores[i].texto;
    if (ambito == opcion) {
      var objeto = "#texto_" + contador
      $(objeto).html(texto);
      contador++;
    }

  }
}

function dameArrayDeValores() {

  var textoValores = '{"arrayAyudas":['
    + '   {"ambito":"0"           ,"texto":" PENDIENTE COGER OPCIONES "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"cirugiaMenor","texto":"cirugiaMenor--Paciente que acude porque necesita cita para control de CTEs. e inyectables. Se le da cita "},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--En el día de hoy se intenta contactar con el paciente, pero éste no responde"},'
    + '   {"ambito":"curas","texto":"Curas--Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":" AplicacionTTos--AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"aplicacionTtos","texto":"AplicacionTTos---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"ttoFisio","texto":"Fisio---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."}'

    + ' ] }';
  var arrValores = jQuery.parseJSON(textoValores);
  return arrValores;
}

function copiaTexto(objetoBtn) {
  var objetoTexto = "#texto" + objetoBtn.substr(3, 2);
  var textoCopiado = $(objetoTexto).text();
  $("#textoCopiado").val(textoCopiado);
  var $bridge = $("<input>")
  $("body").append($bridge);
  $bridge.val($(objetoTexto).text()).select();
  document.execCommand("copy");
  $bridge.remove();

  return textoCopiado;
}
//////////////////////////////////////////////////////////// I N I C I O 
$(document).ready(function () {
  //alert( "ready!" );

  var arrValores = dameArrayDeValores();
  cargaPrimerosValores('aplicacionTtos', arrValores);
  $("#idEntorno").change(function (e) {
    var valor = $("#idEntorno").val();
    ModificaTextos(valor, arrValores);
  });

  $("button[id^='btn_']").click(function () {
    var textoCopiado = copiaTexto(this.id);

  });


});
