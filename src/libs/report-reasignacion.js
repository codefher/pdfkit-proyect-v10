const PDFDocument = require('pdfkit-table')
const data = require('../data/report-reasignacion.json')
const { obtenerDataReasignaciones } = require('../util/formatear-data')
const { addHeaderVertical } = require('./header')
const { addPageNumbersVertical } = require('./pagination')
const { optionsReasignaciones } = require('../util/options-table')
const { headersReasignacion } = require('../util/headers-table')

async function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ margin: 35, size: 'letter', bufferPages: true })

  doc.on('data', dataCallback)
  doc.on('end', endCallback)

  // * Add cabecera
  const dataCabecera = {
    tituloReport: 'REPORTE DE REASIGNACIONES',
    sistema: 'Gabinete Juridico Virtual',
    usuario: 'Josue Oscar Espejo Quenta',
    fechaImpr: '22/10/2018 AL 25/12/2018'
  }
  addHeaderVertical(doc, dataCabecera)

  // * Add de la tabla
  doc.fontSize(7).fill('#000000').text('', 0, 110)
  doc.fontSize(10).font('Helvetica-Bold').text('DETALLE DE LAS REASIGNACIONES', { align: 'center' }) // title table
  doc.moveDown() // separate tables
  const tableLink = {
    headers: headersReasignacion,
    datas: obtenerDataReasignaciones(data)
  }
  tableLink.datas.push({ numero: '', rol: '', anterior: '', actual: 'TOTAL DE REASIGNACIONES', fecha: `${tableLink.datas.length.toString()}` })

  const options = optionsReasignaciones(doc) // options table
  await doc.table(tableLink, options)

  addPageNumbersVertical(doc)

  doc.end()
}

module.exports = { buildPDF }
