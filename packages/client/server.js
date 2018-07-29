const proxy = require('http-proxy-middleware')
const Bundler = require('parcel-bundler')
const express = require('express')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const bundler = new Bundler('src/index.html', {
  cache: false,
})

const app = express()

app.use(
  proxy('/.netlify/functions', {
    target: 'http://localhost:9000',
    pathRewrite: {
      '^/\\.netlify/functions': '',
    },
  })
)

app.use(bundler.middleware())

app.listen(Number(process.env.PORT || 1234))
