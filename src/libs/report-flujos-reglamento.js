const PDFDocument = require('pdfkit-table')
const path = require('path')

async function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ margin: 35, size: 'letter', layout: 'landscape', bufferPages: true })

  doc.on('data', dataCallback)
  doc.on('end', endCallback)

  // -----------------------------------------------------------------------------------------------------
  // Simple Table with Array
  // -----------------------------------------------------------------------------------------------------
  // Añadir la imagen
  const imagePath = path.join(__dirname, '../images/logo-segip.png')
  doc.image(imagePath, 50, 30, { width: 120 })

  // Añadir texto del título
  doc.fontSize(15).font('Helvetica-Bold').fill('#005983').text('REPORTE DE FLUJOS POR REGLAMENTO', 252, 75)

  // Añadir el resto del texto
  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Sistema:', 635, 40)
  doc.fontSize(7).font('Helvetica').fill('#000000').text('Gabinete Juridico Virtual', 667, 40)

  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Usuario:', 636, 50)
  doc.fontSize(7).font('Helvetica').fill('#000000').text('NO USER', 667, 50)

  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Fecha Impr:', 625, 60)
  doc.fontSize(7).font('Helvetica').fill('#000000').text('15/12/18', 667, 60)

  // Añadir una línea vertical
  doc
    .moveTo(620, 35) // Punto de inicio de la línea (x, y)
    .lineTo(620, 70) // Punto final de la línea (x, y)
    .lineWidth(2) // Aumenta el grosor de la línea a 3 puntos
    .strokeColor('orange') // Establecer el color de la línea a anaranjado
    .stroke() // Dibuja la línea

  doc.fontSize(7).fill('#000000').text('', 0, 135)
  doc.fontSize(12).font('Helvetica-Bold').text('DETALLE DE LAS MODIFICACIONES POR REGISTRO', {
    align: 'center'
  })
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
    datas: [
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      },
      {
        numeroTramite: '7-2018',
        nombreTipoTramite: 'SANEAMIENTO DE DATOS',
        numeroCedula: '100092',
        flujo: 'SD POR FLUJO DE ERROR DE TRANSCRIPCION',
        nombreCampoCorregir: 'NOMBRES',
        campoAnterior: 'JENNY',
        campoNuevo: 'JULIA',
        descUbiGeo: 'AIQUILE-CAMPERO-COCHABAMBA-, BOLIVIA',
        fechaSolicitud: '12/12/2018',
        procedencia: 'C'
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
        fechaSolicitud: '12/12/2018',
        procedencia: 'NC'
      }
    ]
  }

  const options = {
    // properties
    padding: 2, // {Number} default: 0
    columnSpacing: 2, // {Number} default: 5
    hideHeader: false,
    minRowHeight: 0,
    // functions
    prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8), // {Function}
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font('Helvetica').fontSize(8) // {Function}
  }
  await doc.table(tableLink, options)

  doc.moveDown(4) // separate tables

  // Texto con sangría y espacio entre párrafos
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

  // Función para agregar números de página
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
