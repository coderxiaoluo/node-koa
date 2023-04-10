const userService = require("../service/user.service")
class UserController {
  async create(ctx, next) {
    // 获取用户信息
    const user = ctx.request.body
    // 将用户存储起来
    const results = await userService.createDB(user)
    ctx.body = {
      message: "创建成功",
      data: results
    }
  }

}

module.exports = new UserController()