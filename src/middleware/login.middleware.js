const userService = require("../service/user.service")
const md5Password = require("../utils/md5Password")
const verifyUserLogin = async (ctx, next) => {
  const { username: username, password: password } = ctx.request.body
  // 1. 判断用户名和密码是否为空
  // 保存之前进行判断数据库是否存在用户
  if (!username || !password) {
    ctx.response.status = 404
    ctx.body = {
      code: -1001,
      message: "用户名或密码为空!"
    }
    return
  }

  // 2. 查询用户名是否存在数据库
  const resUsername = await userService.queryUserDB(ctx.request.body)
  const user = resUsername[0]
  if (!user) {
    ctx.body = {
      code: -1002,
      message: "用户名不存在"
    }
    return
  }
  if (user.password !== md5Password(password)) {
    ctx.response.status = 404
    ctx.body = {
      code: -1003,
      message: "用户名或密码错误!"
    }
    return
  }

  // 让下一个中间件可以拿到user的信息
  ctx.user = user
  // 3. 查询数据库中的密码和用户输入的密码进行校验 
  await next()
}

module.exports = {
  verifyUserLogin
}