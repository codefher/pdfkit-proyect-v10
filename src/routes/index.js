const { Router } = require('express')
// const { buildPDF } = require('../libs/report-modificaciones')
// const { buildPDF } = require('../libs/report-reasignacion')
const { buildPDF } = require('../libs/report-tramites')
// const { buildPDF } = require('../libs/pdfkit')

const router = Router()

router.get('/invoice', (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=invoice.pdf'
  })

  buildPDF(
    data => stream.write(data),
    () => stream.end()
  )
})

router.get('/invoiceTest', async (req, res) => {
  try {
    const pdfBase64 = await buildPDF()
    res.status(200).json({ data: pdfBase64 })
  } catch (error) {
    console.error('Error generating PDF:', error)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
