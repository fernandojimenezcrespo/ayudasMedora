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
    + '   {"ambito":"curas","texto":"Un paciente varón de 68 años que padece una isquemia crónica en miembros inferiores, habiendo sido intervenido anteriormente de un bypass femoro-poplíteo en la extremidad inferior derecha, sufre una reagudización."},'
    + '   {"ambito":"curas","texto":"Plan de cuidados enfermeros a una paciente con antecedentes de enfermedad pulmonar obstructiva crónica que acude a urgencias derivada por médico de atención primaria, tras empeoramiento de disnea y nerviosismo..."},'
    + '   {"ambito":"curas","texto":"El objetivo ha sido realizar un plan de cuidados para una paciente con obstrucción intestinal seleccionando los diagnósticos de enfermería, los resultados esperados y las intervenciones de enfermería..."},'
    + '   {"ambito":"curas","texto":"La presente investigación trata de responder a través del análisis de un caso clínico, cómo la implantación de una medida tan simple como la asignación enfermera-paciente es útil para la provisión de un plan de cuidados en un paciente etiquetado como “difícil”, por su mala adherencia al tratamiento. Y cómo el consenso entre el profesional, el paciente y el cuidador de referencia, con el establecimiento de metas alcanzables, no sólo logra una respuesta positiva de éstos últimos, sino la deconstrucción de ese etiquetado previo por parte de los profesionales que le atendían. Destacar también en estos casos la importancia de las sesiones de enfermería, en la que se validó el plan de cuidados aplicable al paciente con la participación del resto de profesionales de la Unidad."},'
    + '   {"ambito":"curas","texto":"es un paciente varón de 28 años con Insuficiencia Renal Crónica Terminal (IRCT) en programa de hemodiálisis desde septiembre de 1997. Padece ceguera bilateral y se le ha realizado la enucleación del ojo izquierdo por glaucoma, padece una diabetes tipo I que se le diagnosticó a los nueve años. En la actualidad está casado y tiene un hijo de cuatro años."},'
    + '   {"ambito":"curas","texto":"Promoción de la salud. Refiere encontrarse bien y conocer como ha llegado a su estado actual, aunque presenta un déficit de conocimientos en el abordaje de sus cuidados."},'
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
