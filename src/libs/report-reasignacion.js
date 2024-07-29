const PDFDocument = require('pdfkit-table')
const data = require('../data/report-reasignacion.json')
const { obtenerDataReasignaciones } = require('../util/formatear-data')
const { addHeaderVertical } = require('./header')
const { addPageNumbersVertical } = require('./pagination')
const { optionsModificaciones } = require('../util/options-table')
const { headersReasignacion } = require('../util/headers-table')

async function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ margin: 35, size: 'letter', bufferPages: true })

  doc.on('data', dataCallback)
  doc.on('end', endCallback)

  // * Add cabecera
  addHeaderVertical(doc)

  doc.moveDown() // separate tables

  // * Add de la tabla
  const tableLink = {
    headers: headersReasignacion,
    datas: obtenerDataReasignaciones(data)
  }
  tableLink.datas.push({ numero: '', rol: '', anterior: '', actual: 'TOTAL DE REASIGNACIONES', fecha: `${tableLink.datas.length.toString()}` })

  const options = optionsModificaciones(doc) // options table
  await doc.table(tableLink, options)

  addPageNumbersVertical(doc)

  doc.end()
}

module.exports = { buildPDF }
