const KoaRouter = require("@koa/router");
const userRouter = require("./user/user.router")
const router = new KoaRouter()

router
  .use(userRouter.routes())
  .use(userRouter.allowedMethods())


module.exports = router