const PDFDocument = require('pdfkit-table')
const path = require('path')

async function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })

  doc.on('data', dataCallback)
  doc.on('end', endCallback)

  // -----------------------------------------------------------------------------------------------------
  // Simple Table with Array
  // -----------------------------------------------------------------------------------------------------
  // Añadir la imagen

  const imagePath = path.join(__dirname, '../images/logo-segip.png')
  doc.image(imagePath, 50, 50, { width: 120 })

  // Dibujar rectángulos de fondo
  doc.rect(200, 50, 300, 25).fill('#507690').stroke()
  doc.rect(200, 75, 100, 25).fill('#507690').stroke()
  doc.rect(200, 100, 100, 25).fill('#507690').stroke()
  doc.rect(200, 125, 100, 25).fill('#507690').stroke()

  // Añadir texto del título
  doc.fill('#FFFFFF')
  doc.fontSize(12).text('REPORTE DE FLUJOS POR REGLAMENTO', 50, 55)

  // Añadir el resto del texto
  doc.fontSize(10).fill('#FFFFFF').text('Sistema:', 0, 80)
  doc.fill('#000000').text('GABINETE JURIDICO VIRTUAL', 0, 80)

  doc.fontSize(10).fill('#FFFFFF').text('Fecha Impresión:', 0, 105)
  doc.fill('#000000').text('15/12/18', 0, 105)

  doc.fontSize(10).fill('#FFFFFF').text('Usuario:', 0, 130)
  doc.fill('#000000').text('NO USER', 0, 130)

  doc.moveDown() // separate tables

  const tableLink = {
    title: 'Table with link',
    subtitle: 'NO CONSOLIDADO',
    headers: [
      { label: 'NRO CI', property: 'numeroCedula', align: 'center' },
      { label: 'SOLICITUD', property: 'numeroTramite', align: 'center' },
      { label: 'TRAMITE', property: 'nombreTipoTramite', align: 'center' },
      { label: 'FLUJO', property: 'flujo', align: 'center' },
      { label: 'MODIFICADO EN', property: 'nombreCampoCorregir', align: 'center' },
      { label: 'VALOR ANTERIOR', property: 'campoAnterior', align: 'center' },
      { label: 'VALOR ACTUAL', property: 'campoNuevo', align: 'center' },
      { label: 'UBICACION GEOGRAFICA ', property: 'descUbiGeo', align: 'center' },
      { label: 'FECHA', property: 'fechaSolicitud', align: 'center' }
    ],
    datas: [
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '1-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100100',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'LUIS',
        campoNuevo: 'LUSIO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2019'
      }
    ]
  }

  const tableLink2 = {
    subtitle: 'CONSOLIDADO',
    headers: [
      { label: 'NRO CI', property: 'numeroCedula', renderer: null },
      { label: 'SOLICITUD', property: 'numeroTramite', renderer: null },
      { label: 'TRAMITE', property: 'nombreTipoTramite', renderer: null },
      { label: 'FLUJO', property: 'flujo', renderer: null },
      { label: 'MODIFICADO EN', property: 'nombreCampoCorregir', renderer: null },
      { label: 'VALOR ANTERIOR', property: 'campoAnterior', renderer: null },
      { label: 'VALOR ACTUAL', property: 'campoNuevo', renderer: null },
      { label: 'UBICACION GEOGRAFICA ', property: 'descUbiGeo', renderer: null },
      { label: 'FECHA', property: 'fechaSolicitud', renderer: null }
    ],
    datas: [
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'APELLIDO PATERNO',
        campoAnterior: 'BARRIOS',
        campoNuevo: 'PATERNO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      },
      {
        numeroTramite: '1-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100100',
        flujo: 'SD POR ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'LUIS',
        campoNuevo: 'LUSIO',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018'
      }
    ]
  }

  const options = {
    // properties
    padding: 5, // {Number} default: 0
    columnSpacing: 5, // {Number} default: 5
    hideHeader: false,
    minRowHeight: 0,
    // functions
    prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8), // {Function}
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font('Helvetica').fontSize(8) // {Function}
  }
  doc.table(tableLink, options)
  doc.table(tableLink2)

  // if your run express.js server:
  // HTTP response only to show pdf
  // doc.pipe(res);

  // done
  doc.end()
}

module.exports = { buildPDF }
