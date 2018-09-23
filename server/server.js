import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import config from '../webpack.config.js'

import api from './api'
import dbConfig from './config'

const compiler = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

compiler.plugin('done', () => {
  Object.keys(require.cache).forEach((id) => {
    if (!/[\/\\]node_modules[\/\\]/.test(id)) {
      delete require.cache[id]
    }
  })
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(dbConfig.getDBConnection())
mongoose.set('debug', true)

api(app)

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
  }
  console.log('The src is listening on port 3000')
})
