const Mock = require('mockjs')

// 数据
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}
const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
const transactionList = Mock.mock({
  total:20,
  'items|20' : [{
    order_no: '@guid()',
    timestamp: +Mock.Random.date('T'),
    username: '@name()',
    price: '@float(1000, 15000, 0, 2)',
    'status|1' : ['success', 'pending']
  }]
})

//接口函数
module.exports = {
  testAPI: (req, res) => {
    res.send("请求后台API成功")
  },
  getUserToken: (req, res) => {
    const { username } = req.body;
    res.send({
      code: 200, 
      data: tokens[username]
    })
  },
  getUserInfo: (req, res) => {
    const { token } = req.query;
    res.send({
      code: 200, 
      data: users[token]
    })
  },
  logout: (req, res) => {
    res.send({
      code: 200, 
      data: "success"
    })
  },
  transactionList: (req, res) => {
    res.send({
      code: 200,
      data: transactionList
    })
  }
}