function dameArrayDeValores() {

  var textoValores = '{"arrayAyudas":['
    + '   {"ambito":"0"           ,"texto":" PENDIENTE COGER OPCIONES "},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"cirugiaMenor","texto":"_ "},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"cirugiaMenor","texto":" _"},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"cirugiaMenor","texto":"_"},'
    + '   {"ambito":"curas","texto":"Limpieza de la herida con suero Fisiológico+Betadine+apósito"},'
    + '   {"ambito":"curas","texto":"Limpieza y fomentos de  Prontosan."},'
    + '   {"ambito":"curas","texto":"Herida en buen estado, sin signos de infección. Curo con suero fisiológico+Betadine+apósito"},'
    + '   {"ambito":"curas","texto":"Herida en buen estado, sin signos de infección. Curo con suero fisiológico+Betadine y se retira la mitad de los puntos y doy cita para seguimiento y retirar resto de grapas."},'
    + '   {"ambito":"curas","texto":"_"},'
    + '   {"ambito":"curas","texto":"_"},'
    + '   {"ambito":"curas","texto":"_"},'
    + '   {"ambito":"curas","texto":"_"},'
    + '   {"ambito":"curas","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"aplicacionTtos","texto":"_"},'
    + '   {"ambito":"obsCitas","texto":" Toma de Ctes + Peso + GB "},'
    + '   {"ambito":"obsCitas","texto":"Tome de Ctes + Peso + Tapones"},'
    + '   {"ambito":"obsCitas","texto":"Citar Vacunas atrasadas al telefono :XXX XXX XXX"},'
    + '   {"ambito":"obsCitas","texto":"Se realiza extracción de tapón de CERUMEN EN O.I. SIN INCIDENCIAS."},'
	+ '   {"ambito":"obsCitas","texto":"Se realiza extracción de tapón de CERUMEN EN O.D. SIN INCIDENCIAS."},'
	+ '   {"ambito":"obsCitas","texto":"Se realiza extracción de tapón de CERUMEN EN O.D. y O.I. SIN INCIDENCIAS."},'
    + '   {"ambito":"obsCitas","texto":"Hablo telefónicamente con el paciente que me comenta que necesita activar algún medicamento de la receta electrónica. Le explico que para ello es necesario que pida cita NO presencial con el Médico de AP"},'
    + '   {"ambito":"obsCitas","texto":"Hablo telefónicamente con el paciente que necesita cita para ECG solicitado por el Médico de AP. Dada la Cita."},'
    + '   {"ambito":"obsCitas","texto":"Hablo telefónicamente con el paciente que precisa cita para la 3ª dosis de vacuna COVID19. Se le da la cita."},'
    + '   {"ambito":"obsCitas","texto":"Imposible contactar con el paciente. Llamo por teléfono en varias ocasiones, pero no responde. "},'
	+ '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"},'
    + '   {"ambito":"ttoFisio","texto":"_"}'

    + ' ] }';
  var arrValores = jQuery.parseJSON(textoValores);
  return arrValores;
}
