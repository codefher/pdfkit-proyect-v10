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
  let counter = 1
  data.reasignaciones.forEach((item, index) => {
    item.nro = counter++
  })
  console.log(data.reasignaciones)
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
        fechaSolicitud: formatDate(flujo.fechaSolicitud),
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

function formatDate(dateString) {
  const date = new Date(dateString)
  const day = ('0' + date.getDate()).slice(-2) // Añade un cero al inicio y toma los últimos dos dígitos
  const month = ('0' + (date.getMonth() + 1)).slice(-2) // Los meses en JS son 0-indexados
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

module.exports = { obtenerDataModificaciones, obtenerDataReasignaciones, obtenerDataTramite }
