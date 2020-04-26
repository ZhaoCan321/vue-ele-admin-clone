const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const router = require("./router.js")
app.use(router)

app.listen(5001, () => {
  console.log('api server running at http://127.0.0.1:5001')
})