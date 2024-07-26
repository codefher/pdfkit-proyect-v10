// * Formateo de la data Reporte Modificaciones
const formatearDataModificaciones = data => {
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

module.exports = { formatearDataModificaciones }
