// * Función para agregar números de página Horizontal
function addPageNumbersHorizontal(doc) {
  const pageCount = doc.bufferedPageRange().count

  for (let i = 0; i < pageCount; i++) {
    doc.switchToPage(i)
    doc
      .fontSize(10)
      .fillColor('#888888')
      .text(`Página ${i + 1} de ${pageCount}`, 350, 564)
  }
}

function addPageNumbersVertical(doc) {
  const pageCount = doc.bufferedPageRange().count

  for (let i = 0; i < pageCount; i++) {
    doc.switchToPage(i)
    doc
      .fontSize(10)
      .fillColor('#888888')
      .text(`Página ${i + 1} de ${pageCount}`, { align: 'center' }, 745)
  }
}

module.exports = { addPageNumbersHorizontal, addPageNumbersVertical }
