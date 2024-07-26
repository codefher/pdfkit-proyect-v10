// * Estilo de la tabla para reporte Modificaciones
function optionsModificaciones(doc) {
  return {
    // properties
    padding: 2,
    columnSpacing: 2,
    hideHeader: false,
    minRowHeight: 0,
    // functions
    prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8),
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font('Helvetica').fontSize(8)
  }
}

module.exports = { optionsModificaciones }
