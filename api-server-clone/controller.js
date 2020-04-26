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
    const { toeken } = req.body;
    res.send({
      code: 200, 
      data: "success"
    })
  }
}