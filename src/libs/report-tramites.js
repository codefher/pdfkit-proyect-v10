const PDFDocument = require('pdfkit-table')
const data = require('../data/report-tramites.json')
const { obtenerDataTramite } = require('../util/formatear-data')
const { addHeaderHorizontal } = require('./header')
const { addPageNumbersHorizontal } = require('./pagination')
const { optionsTramites } = require('../util/options-table')
const { headersTramites } = require('../util/headers-table')

async function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({
    margin: 35,
    size: 'letter',
    layout: 'landscape',
    bufferPages: true
  })

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
  doc.fontSize(7).fill('#000000').text('', 0, 120)
  doc.fontSize(10).font('Helvetica-Bold').text('DETALLE DE LAS REASIGNACIONES', { align: 'center' }) // title table
  doc.moveDown() // separate tables
  const tableLink = {
    headers: headersTramites,
    datas: obtenerDataTramite(data)
  }
  // tableLink.datas.push({ numero: '', rol: '', anterior: '', actual: 'TOTAL DE REASIGNACIONES', fecha: `${tableLink.datas.length.toString()}` })

  const options = optionsTramites(doc) // options table
  await doc.table(tableLink, options)

  addPageNumbersHorizontal(doc)

  doc.end()
}

module.exports = { buildPDF }
