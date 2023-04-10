const KoaRouter = require("@koa/router");
const userRouter = require("./user/user.router")
const loginRouter = require("./user/login.router")
const router = new KoaRouter()

router
  .use(userRouter.routes())
  .use(userRouter.allowedMethods())
  .use(loginRouter.routes())
  .use(loginRouter.allowedMethods())


module.exports = router