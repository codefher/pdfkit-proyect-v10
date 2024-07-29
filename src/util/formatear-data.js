// * Formateo de la data Reporte Modificaciones
const obtenerDataModificaciones = data => {
  let flujosFormateados = []

  data.registros.forEach(registro => {
    registro.flujos.forEach(flujo => {
      flujosFormateados.push({
        numeroTramite: flujo.numeroTramite,
        nombreTipoTramite: flujo.nombreTipoTramite,
        numeroCedula: flujo.numeroCedula,
        flujo: flujo.flujo,
        nombreCampoCorregir: flujo.nombreCampoCorregir,
        campoAnterior: flujo.campoAnterior,
        campoNuevo: flujo.campoNuevo,
        descUbiGeo: flujo.descUbiGeo,
        fechaSolicitud: flujo.fechaSolicitud,
        procedencia: registro.procedencia === 'CONSOLIDADO' ? 'C' : 'NC'
      })
    })
  })

  return flujosFormateados
}

const obtenerDataReasignaciones = data => {
  return data.reasignaciones
}

const obtenerDataTramite = data => {
  let flujosFormateados = []

  data.estados.forEach(estado => {
    estado.flujos.forEach(flujo => {
      flujosFormateados.push({
        numeroTramite: flujo.numeroTramite,
        nombreTipoTramite: flujo.nombreTipoTramite,
        flujo: flujo.flujo,
        solicitante: flujo.solicitante,
        numeroCedula: flujo.numeroCedula,
        usuarioActual: flujo.usuarioActual,
        fechaSolicitud: flujo.fechaSolicitud,
        estado: estado.estado
      })
    })
    flujosFormateados.push({
      numeroTramite: '',
      nombreTipoTramite: '',
      flujo: '',
      solicitante: '',
      numeroCedula: '',
      usuarioActual: '',
      fechaSolicitud: 'CANTIDAD',
      estado: estado.flujos.length.toString()
    })
  })
  return flujosFormateados
}

module.exports = { obtenerDataModificaciones, obtenerDataReasignaciones, obtenerDataTramite }
