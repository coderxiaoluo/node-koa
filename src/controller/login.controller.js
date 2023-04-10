const jwt = require("jsonwebtoken")
const { PRIVATE_kEY, pPUBLIC_KEY } = require("../keys")
class LoginController {
  signToken(ctx, next) {
    // 4. 成功则颁发令牌
    const { id, username } = ctx.user
    const token = jwt.sign({ id, username }, PRIVATE_kEY, { algorithm: 'RS256' })
    ctx.body = {
      code: 1,
      data: {
        token,
        id,
        username
      }
    }
  }
  testLogin(ctx, next) {
    const authorization = ctx.headers.authorization
    const token = authorization.replace("Bearer ", "")
    try {
      const results = jwt.verify(token, pPUBLIC_KEY, { algorithms: ["RS256"] })
      console.log(results)
    } catch (error) {
      ctx.body = {
        code: -1005,
        message: "未授权!"
      }
    }
  }
}


module.exports = new LoginController()