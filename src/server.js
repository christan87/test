var express = require('express')
const severless = require('serverless-http');
var app = express()

const defaultRoute = require('../routes/default')

app.use(express.json());
app.use('/test', defaultRoute)

module.exports.handler = severless(app)

// app.listen(3000, function () {
//   console.log(`CORS-enabled web server listening on port 80`)
// })