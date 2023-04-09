const userService = require("../service/user.service")
const md5Password = require("../utils/md5Password")
const verifyUserNamePassWord = async (ctx, next) => {
  const { username: username, password: password } = ctx.request.body
  // 保存之前进行判断数据库是否存在用户
  if (!username || !password) {
    ctx.response.status = 404
    ctx.body = {
      code: -1001,
      message: "用户名或密码为空!"
    }
    return
  }
  // 查询数据
  const resUsername = await userService.queryUserDB(ctx.request.body)
  if (resUsername.length) {
    console.log("用户名已经存在!")
    ctx.response.status = 404
    ctx.body = {
      code: -1002,
      message: "用户名已经存在!"
    }
    return
  }
  await next()
}

const tokenJWTPassword = async (ctx, next) => {
  const { password: password } = ctx.request.body
  ctx.request.body.password = md5Password(password)
  await next()
}

module.exports = {
  verifyUserNamePassWord,
  tokenJWTPassword
}