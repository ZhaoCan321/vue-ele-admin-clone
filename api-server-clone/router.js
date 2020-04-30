const express = require("express")
const router = express.Router()

const bodyParser = require("body-parser")
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const ctrl = require('./controller.js')

router.get('/', ctrl.testAPI)
router.post('/login', jsonParser, ctrl.getUserToken)
router.get('/getUserInfo', urlencodedParser, ctrl.getUserInfo)
router.post('/logout', jsonParser, ctrl.logout)
router.get('/transaction/list', jsonParser, ctrl.transactionList)
router.get('/article/list', jsonParser, ctrl.fetchList)

router.get('/routes', jsonParser, ctrl.routes)
router.get('/roles', jsonParser, ctrl.roles)
router.post('/role', jsonParser, ctrl.role)
router.put('/role/:id', urlencodedParser, ctrl.role)
router.delete('/role/:id', urlencodedParser, ctrl.role)

module.exports = router
