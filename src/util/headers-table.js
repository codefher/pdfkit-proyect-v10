// * Configuracion headers tabla Modificaciones
const headersModificaciones = [
  { label: 'NRO CI', property: 'numeroCedula', align: 'center', width: 38 },
  { label: 'SOLICITUD', property: 'numeroTramite', align: 'center', width: 50 },
  { label: 'TRAMITE', property: 'nombreTipoTramite', align: 'center', width: 85 },
  { label: 'FLUJO', property: 'flujo', align: 'center', width: 130 },
  { label: 'MODIFICADO EN', property: 'nombreCampoCorregir', align: 'center', width: 75 },
  { label: 'VALOR ANTERIOR', property: 'campoAnterior', align: 'center', width: 65 },
  { label: 'VALOR ACTUAL', property: 'campoNuevo', align: 'center', width: 60 },
  { label: 'UBICACION GEOGRAFICA ', property: 'descUbiGeo', align: 'center', width: 130 },
  { label: 'FECHA', property: 'fechaSolicitud', align: 'center', width: 55 },
  { label: 'PROC', property: 'procedencia', align: 'center', width: 35 }
]

const headersReasignacion = [
  { label: 'SOLICITUD', property: 'numero', align: 'center', width: 80 },
  { label: 'ROL', property: 'rol', align: 'center', width: 100 },
  { label: 'USUARIO ANTERIOR', property: 'anterior', align: 'center', width: 130 },
  { label: 'USUARIO ACTUAL', property: 'actual', align: 'center', width: 130 },
  { label: 'FECHA', property: 'fecha', align: 'center', width: 90 }
]

const headersTramites = [
  { label: 'SOLICITUD', property: 'numeroTramite', align: 'center', width: 50 },
  { label: 'TRAMITE', property: 'nombreTipoTramite', align: 'center', width: 130 },
  { label: 'FLUJO', property: 'flujo', align: 'center', width: 150 },
  { label: 'SOLICITANTE', property: 'solicitante', align: 'center', width: 100 },
  { label: 'CEDULA DE IDENTIDAD', property: 'numeroCedula', align: 'center', width: 55 },
  { label: 'USUAIRO ACTUAL', property: 'usuarioActual', align: 'center', width: 130 },
  { label: 'FECHA', property: 'fechaSolicitud', align: 'center', width: 55 },
  { label: 'ESTADO', property: 'estado', align: 'center', width: 55 }
]
module.exports = { headersModificaciones, headersReasignacion, headersTramites }
