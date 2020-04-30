const Mock = require('mockjs')
const { deepClone } = require('./utils/utils.js');
const { asyncRoutes, constantRoutes } = require('./utils/routes.js')

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
  total: 20,
  'items|20': [{
    order_no: '@guid()',
    timestamp: +Mock.Random.date('T'),
    username: '@name()',
    price: '@float(1000, 15000, 0, 2)',
    'status|1': ['success', 'pending']
  }]
})

const List = []
const count = 100
const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.',
    routes: routes
  },
  {
    key: 'editor',
    name: 'editor',
    description: 'Normal Editor. Can see all pages except permission page',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'visitor',
    name: 'visitor',
    description: 'Just a visitor. Can only see the home page and the document page',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]

//接口函数
module.exports = {
  testAPI: (req, res) => {
    console.log(req);
    
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
  },
  fetchList: (req, res) => {
    const { importance, type, title, page = 1, limit = 20, sort } = req.query

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    
    res.send({
      code: 200,
      data: {
        total: mockList.length,
        items: pageList
      }
    })
  },
  routes: (req, res) => {
    res.send({
      code: 200,
      data: routes
    })
  },
  roles: (req, res) => {
    res.send({
      code: 200,
      data: roles
    })
  },
  role: (req, res) => {
    if(req.method === "POST") {
      res.send({
        code: 200,
        data: {
          mag: "add success"
        }
      })
    } else if(req.method === "PUT") {
      res.send({
        code: 200,
        data: {
          mag: "update success"
        }
      })
    } else if(req.method === "DELETE") {
      res.send({
        code: 200,
        data: {
          mag: "delete success"
        }
      })
    }
  }
}