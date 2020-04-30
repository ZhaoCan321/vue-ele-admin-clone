require('babel-register')({
  presets: ['env']
})

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors({
  origin:['http://localhost:9527','http://127.0.0.1:9527', 'https://postwoman.io'],
  methods:['GET','POST','PUT','DELETE']
}));

const router = require("./router.js")
app.use(router)

app.listen(5001, () => {
  console.log('api server running at http://127.0.0.1:5001')
})