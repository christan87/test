var express = require('express')
import {json} from 'express';
const severless = require('serverless-http');
// var app = express()

const defaultRoute = require('../routes/default')

export async function handler(event, context){
  var app = express()
  app.use(json());
  app.use('/test', defaultRoute)
  return severless(app)(event, context)
}

// app.use(express.json());
// app.use('/.netlify/functions/test', defaultRoute)

// module.exports.handler = severless(app)

// app.listen(3000, function () {
//   console.log(`CORS-enabled web server listening on port 80`)
// })