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
  const dataCabecera = {
    tituloReport: 'REPORTE DE TRAMITES POR ESTADO',
    sistema: 'Gabinete Juridico Virtual',
    usuario: 'Josue Oscar Espejo Quenta',
    fechaImpr: '22/10/2018 AL 25/12/2018'
  }
  addHeaderHorizontal(doc, dataCabecera)

  // * Add de la tabla
  doc.fontSize(7).fill('#000000').text('', 0, 125)
  doc.fontSize(10).font('Helvetica-Bold').text('DETALLE DE LAS MODIFICACIONES POR REGISTRO', { align: 'center' }) // title table
  doc.moveDown() // separate tables
  const tableLink = {
    headers: headersModificaciones,
    datas: obtenerDataModificaciones(data)
  }
  const options = optionsModificaciones(doc) // options table
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
