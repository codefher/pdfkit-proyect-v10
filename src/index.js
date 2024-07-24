const express = require('express')
const indexRoutes = require('./routes/index')

const app = express()

app.use(indexRoutes)

app.listen(3000, () => {
  console.log('server on port 3000')
})
