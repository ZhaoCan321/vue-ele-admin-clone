// 路由模块  本质：就是 URL 地址到 处理函数之间的对应关系
const express = require('express')
const router = express.Router()

// 导入自己的 业务逻辑处理模块
const ctrl = require('./controller.js')

// 只要有人请求 后台的 / 根路径地址，就提示他，请求API服务器成功了！
router.get('/', ctrl.testAPI)

// 对外暴露 getAllHero 接口
router.get('/getallhero', ctrl.getAllHero)

// 对外暴露添加英雄的API接口
router.post('/addhero', ctrl.addHero)

// 对外暴露 获取英雄信息的 API 接口
router.get('/gethero/:id', ctrl.getHeroById)

// 对外暴露 根据Id更新英雄数据的API接口
router.post('/updatehero/:id', ctrl.updateHeroById)

// 对外暴露 根据Id软删除英雄数据的API接口
router.get('/deletehero/:id', ctrl.deleteHeroById)

module.exports = router
