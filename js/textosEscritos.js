function dameArrayDeValores() {

  var textoValores = '{"arrayAyudas":['
    + '   {"ambito":"0"           ,"texto":" PENDIENTE COGER OPCIONES "},'
    + '   {"ambito":"cirugiaMenor","texto":"Paciente que precisa curas tras intervención quirúrgica en ESPECIALIZADA "},'
    + '   {"ambito":"cirugiaMenor","texto":"Paciente con dolor extremo causado por las migrañas que padece "},'
    + '   {"ambito":"cirugiaMenor","texto":"Se procede a hacer cura de herida producida por accidente de Moto. En estos momentos la recuperación de la herida es muy favorable. "},'
    + '   {"ambito":"cirugiaMenor","texto":"Paciente que acude a Consulta para solicitar agujas para dispositivo de insulina"},'
    + '   {"ambito":"cirugiaMenor","texto":"Se produce durante una situación siopatológica del paciente que no permite demora en la atención y la realización de una valoración exhaustiva.El objetivo es identificar problemas peligrosos para la vida y/o para las necesidades básicas de la persona. Por ejemplo, en un paciente que presenta una parada cardiorrespiratoria, se realiza una valoración urgente del  estado respiratorio, cardiaco y de la circulación, pero no una valoración exhaustiva de su autopercepción"},'
    + '   {"ambito":"cirugiaMenor","texto":" no es sólo enfermera y supervisora en el Hospital La Paz de Madrid. Es una de las muchas trabajadoras que han estado en los dos lados de la pandemia -como paciente y como sanitaria- y fue esta doble experiencia lo que le llevó a escribir el libro"},'
    + '   {"ambito":"cirugiaMenor","texto":"enfermera responsable de la web Enfermera en Apuros, ha recopilado en una publicación algunas de las historias desgarradoras de sus compañeras de profesión durante esta pandemia. “En pleno confinamiento, con todos los compañeros a punto de explotar por la tensión, el sufrimiento y la falta de recursos, y el resto de la población sin com "},'
    + '   {"ambito":"cirugiaMenor","texto":"Un libro que ha sido editado por el Colegio de Enfermería de Tarragona (CODITA). «como colegio profesional nuestra preocupación ha sido, no sólo garantizar la seguridad de las enfermeras en su lugar de trabajo, sino también hacer visible su labor y velar por su bienestar emocional.  "},'
    + '   {"ambito":"cirugiaMenor","texto":"l archiconocido por todos, Enfermera Saturada -Héctor Castiñeira en el DNI- también ha querido rendir homenaje a todas las enfermeras que han trabajado -y siguen haciéndolo- para cuidar a la sociedad en esta pandemia. El libro se se centra en la historia de «una enfermera que luchó contra el coronavirus en "},'
    + '   {"ambito":"cirugiaMenor","texto":"sta obra busca dar visibilidad a todas las vivencias del personal sanitario que trabaja en las UCIs, tanto a nivel profesional como, sobre todo, personal, narradas en primera persona. Cuenta con el prólogo de Albert Cortés Borra, director de HUGES -Humanizando la gestión san "},'
    + '   {"ambito":"curas","texto":"Limpieza de la herida con suero Fisiológico+Betadine+apósito"},'
    + '   {"ambito":"curas","texto":"Limpieza y fomentos de  Prontosan."},'
    + '   {"ambito":"curas","texto":"Herida en buen estado, sin signos de infección. Curo con suero fisiológico+Betadine+apósito"},'
    + '   {"ambito":"curas","texto":"Herida en buen estado, sin signos de infección. Curo con suero fisiológico+Betadine y se retira la mitad de los puntos"},'
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
    + '   {"ambito":"obsCitas","texto":" Toma de Ctes + Peso + GB "},'
    + '   {"ambito":"obsCitas","texto":"Tome de Ctes + Peso + Tapones"},'
    + '   {"ambito":"obsCitas","texto":"Citar Vacunas atrasadas al telefono :XXX XXX XXX"},'
    + '   {"ambito":"obsCitas","texto":"Tapón de CERUMEN ambos oídos."},'
    + '   {"ambito":"obsCitas","texto":"obsCitas---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"obsCitas","texto":"obsCitas---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"obsCitas","texto":"obsCitas---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"obsCitas","texto":"obsCitas---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"obsCitas","texto":"obsCitas---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    + '   {"ambito":"obsCitas","texto":"obsCitas---Paciente con alta en Fisioterapia. Notable mejoría. Se le recomienda con la continuidad de los ejercicios en casa."},'
    
  
  
  
  
  
  
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
