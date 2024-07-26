const PDFDocument = require('pdfkit-table')
const path = require('path')
const data = require('../data/report-gabinete-modificaciones.json')
const { formatearDataModificaciones } = require('./formatear-data')
const { addHeaderHorizontal } = require('./header')

async function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ margin: 35, size: 'letter', layout: 'landscape', bufferPages: true })

  doc.on('data', dataCallback)
  doc.on('end', endCallback)

  addHeaderHorizontal(doc) // Usar la función importada para agregar la cabecera

  doc.moveDown() // separate tables

  const tableLink = {
    headers: [
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
    ],
    datas: formatearDataModificaciones(data)
  }

  const options = {
    // properties
    padding: 2,
    columnSpacing: 2,
    hideHeader: false,
    minRowHeight: 0,
    // functions
    prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8),
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font('Helvetica').fontSize(8)
  }
  await doc.table(tableLink, options)

  doc.moveDown(4)

  // * Dato informativo en reporte
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

  // * Función para agregar números de página
  function addPageNumbers(doc) {
    const pageCount = doc.bufferedPageRange().count

    for (let i = 0; i < pageCount; i++) {
      doc.switchToPage(i)
      doc
        .fontSize(10)
        .fillColor('#888888')
        .text(`Página ${i + 1} de ${pageCount}`, 350, 565)
    }
  }
  // Llamar a la función para agregar números de página
  addPageNumbers(doc)

  doc.end()
}

module.exports = { buildPDF }
