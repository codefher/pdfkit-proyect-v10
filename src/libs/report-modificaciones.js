const PDFDocument = require('pdfkit-table')
const data = require('../data/report-gabinete-modificaciones.json')
const { obtenerDataModificaciones } = require('../util/formatear-data')
const { addHeaderHorizontal } = require('./header')
const { addPageNumbersHorizontal } = require('./pagination')
const { optionsModificaciones } = require('../util/options-table')
const { headersModificaciones } = require('../util/headers-table')

async function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ margin: 35, size: 'letter', layout: 'landscape', bufferPages: true })

  doc.on('data', dataCallback)
  doc.on('end', endCallback)

  // * Add cabecera
  addHeaderHorizontal(doc)

  doc.moveDown() // separate tables

  // * Add de la tabla
  const tableLink = {
    headers: headersModificaciones,
    datas: obtenerDataModificaciones(data)
  }
  const options = optionsModificaciones // options table
  await doc.table(tableLink, options)

  doc.moveDown(4)

  // * Dato Adicionales a medida ===> informativos
  doc.fontSize(9).font('Helvetica-Bold').text('Importante:', { continued: false, paragraphGap: 5 })

  doc
    .fontSize(9)
    .font('Helvetica-Bold')
    .text('     C:   ', { continued: true })
    .font('Helvetica')
    .text('Consolidado', { indent: 80, paragraphGap: 5 })

  doc
    .fontSize(9)
    .font('Helvetica-Bold')
    .text('     NC: ', { continued: true })
    .font('Helvetica')
    .text('No Consolidado', { indent: 20, paragraphGap: 5 })

  addPageNumbersHorizontal(doc)

  doc.end()
}

module.exports = { buildPDF }
