const express = require("express")
const router = express.Router()

const ctrl = require('./controller.js')

const bodyParser = require("body-parser")
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', ctrl.testAPI)
router.post('/login', jsonParser, ctrl.getUserToken)
router.get('/getUserInfo', urlencodedParser, ctrl.getUserInfo)
router.post('/logout', jsonParser, ctrl.logout)
router.get('/transaction/list', jsonParser, ctrl.transactionList)

module.exports = router
