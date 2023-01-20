var express = require('express')
var app = express()

const defaultRoute = require('../routes/default')

app.use(express.json());
app.use('/test', defaultRoute)

app.listen(3000, function () {
  console.log(`CORS-enabled web server listening on port 80`)
})