const path = require('path')

// * Funcion para armar cabecera horizontal
function addHeaderHorizontal(doc, dataCabecera) {
  // ? Logo segip
  const imagePath = path.join(__dirname, '../images/logo-segip.png')
  doc.image(imagePath, 50, 30, { width: 120 })

  doc.fontSize(14).font('Helvetica-Bold').fill('#005983').text(dataCabecera.tituloReport, 252, 75)
  // ? Cabecera derecha
  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Sistema:', 635, 40)
  doc.fontSize(7).font('Helvetica').fill('#000000').text(dataCabecera.sistema, 667, 40)
  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Usuario:', 636, 50)
  doc.fontSize(7).font('Helvetica').fill('#000000').text(dataCabecera.usuario, 667, 50)
  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Fecha Impr:', 625, 60)
  doc.fontSize(7).font('Helvetica').fill('#000000').text(dataCabecera.fechaImpr, 667, 60)

  // ? Línea vertical
  doc
    .moveTo(620, 35) // Punto de inicio de la línea (x, y)
    .lineTo(620, 70) // Punto final de la línea (x, y)
    .lineWidth(2) // Aumenta el grosor de la línea a 3 puntos
    .strokeColor('orange')
    .stroke()
}

// * Funcion para armar cabecera vertical
function addHeaderVertical(doc, dataCabecera) {
  // ? Logo segip
  const imagePath = path.join(__dirname, '../images/logo-segip.png')
  doc.image(imagePath, 50, 30, { width: 100 })

  doc.fontSize(14).font('Helvetica-Bold').fill('#005983').text(dataCabecera.tituloReport, { align: 'center' }, 75)
  // ? Cabecera derecha
  doc.fontSize(6).font('Helvetica-Bold').fill('#000000').text('Sistema:', 465, 40)
  doc.fontSize(6).font('Helvetica').fill('#000000').text(dataCabecera.sistema, 497, 40)
  doc.fontSize(6).font('Helvetica-Bold').fill('#000000').text('Usuario:', 466, 50)
  doc.fontSize(6).font('Helvetica').fill('#000000').text(dataCabecera.usuario, 497, 50)
  doc.fontSize(6).font('Helvetica-Bold').fill('#000000').text('Fecha Impr:', 457, 60)
  doc.fontSize(6).font('Helvetica').fill('#000000').text(dataCabecera.fechaImpr, 497, 60)

  // ? Línea vertical
  doc
    .moveTo(450, 35) // Punto de inicio de la línea (x, y)
    .lineTo(450, 70) // Punto final de la línea (x, y)
    .lineWidth(2) // Aumenta el grosor de la línea a 3 puntos
    .strokeColor('orange')
    .stroke()
}

module.exports = { addHeaderHorizontal, addHeaderVertical }
