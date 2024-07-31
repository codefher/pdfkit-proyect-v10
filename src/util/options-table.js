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

function optionsReasignaciones(doc) {
  return {
    // properties
    padding: 2,
    columnSpacing: 2,
    hideHeader: false,
    minRowHeight: 0,
    // functions
    prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8),
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
      if (row.actual === 'TOTAL DE REASIGNACIONES') {
        doc.addBackground(rectRow, '#F0F0F0', 0.1) // Color plomo muy claro
        doc.font('Helvetica-Bold') // Texto en negrita
      } else {
        doc.font('Helvetica').fontSize(8)
      }
    }
  }
}

function optionsTramites(doc) {
  return {
    // properties
    padding: 0,
    columnSpacing: 2,
    hideHeader: false,
    minRowHeight: 0,
    // functions
    prepareHeader: () => doc.font('Helvetica-Bold').fontSize(8),
    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
      if (row.fechaSolicitud === 'CANTIDAD') {
        doc.addBackground(rectRow, '#F0F0F0', 0.1) // Color plomo muy claro
        doc.font('Helvetica-Bold') // Texto en negrita
      } else {
        doc.font('Helvetica').fontSize(8)
      }
    }
  }
}

module.exports = { optionsModificaciones, optionsReasignaciones, optionsTramites }
