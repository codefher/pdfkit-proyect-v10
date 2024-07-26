const path = require('path')

function addHeaderHorizontal(doc) {
  // * Armado de cabecera
  // ? Logo segip
  console.log('__dirname')
  const imagePath = path.join(__dirname, '../images/logo-segip.png')
  doc.image(imagePath, 50, 30, { width: 120 })

  //* Cabecera reporte
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

module.exports = { addHeaderHorizontal }
