const path = require('path')

// * Funcion para armar cabecera horizontal
function addHeaderHorizontal(doc) {
  // ? Logo segip
  const imagePath = path.join(__dirname, '../images/logo-segip.png')
  doc.image(imagePath, 50, 30, { width: 120 })

  doc.fontSize(15).font('Helvetica-Bold').fill('#005983').text('REPORTE DE FLUJOS POR REGLAMENTO', 252, 75)
  // ? Cabecera derecha
  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Sistema:', 635, 40)
  doc.fontSize(7).font('Helvetica').fill('#000000').text('Gabinete Juridico Virtual', 667, 40)
  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Usuario:', 636, 50)
  doc.fontSize(7).font('Helvetica').fill('#000000').text('NO USER', 667, 50)
  doc.fontSize(7).font('Helvetica-Bold').fill('#000000').text('Fecha Impr:', 625, 60)
  doc.fontSize(7).font('Helvetica').fill('#000000').text('15/12/18', 667, 60)

  // ? Línea vertical
  doc
    .moveTo(620, 35) // Punto de inicio de la línea (x, y)
    .lineTo(620, 70) // Punto final de la línea (x, y)
    .lineWidth(2) // Aumenta el grosor de la línea a 3 puntos
    .strokeColor('orange')
    .stroke()
  doc.fontSize(7).fill('#000000').text('', 0, 135)
  doc.fontSize(12).font('Helvetica-Bold').text('DETALLE DE LAS MODIFICACIONES POR REGISTRO', {
    align: 'center'
  })
}

// * Funcion para armar cabecera vertical
function addHeaderVertical(doc) {
  // ? Logo segip
  const imagePath = path.join(__dirname, '../images/logo-segip.png')
  doc.image(imagePath, 50, 30, { width: 100 })

  doc.fontSize(10).font('Helvetica-Bold').fill('#005983').text('REPORTE DE REASIGNACIONES', { align: 'center' }, 75)
  // ? Cabecera derecha
  doc.fontSize(6).font('Helvetica-Bold').fill('#000000').text('Sistema:', 455, 40)
  doc.fontSize(6).font('Helvetica').fill('#000000').text('Gabinete Juridico Virtual', 487, 40)
  doc.fontSize(6).font('Helvetica-Bold').fill('#000000').text('Usuario:', 456, 50)
  doc.fontSize(6).font('Helvetica').fill('#000000').text('NO USER', 487, 50)
  doc.fontSize(6).font('Helvetica-Bold').fill('#000000').text('Fecha Impr:', 445, 60)
  doc.fontSize(6).font('Helvetica').fill('#000000').text('15/12/18', 487, 60)

  // ? Línea vertical
  doc
    .moveTo(440, 35) // Punto de inicio de la línea (x, y)
    .lineTo(440, 70) // Punto final de la línea (x, y)
    .lineWidth(2) // Aumenta el grosor de la línea a 3 puntos
    .strokeColor('orange')
    .stroke()
  doc.fontSize(7).fill('#000000').text('', 0, 135)
  doc.fontSize(9).font('Helvetica-Bold').text('DETALLE DE LAS REASIGNACIONES', {
    align: 'center'
  })
}

module.exports = { addHeaderHorizontal, addHeaderVertical }
