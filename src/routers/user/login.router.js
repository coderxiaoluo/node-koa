// 登录的路由逻辑
const KoaRouter = require("@koa/router");
const loginRouter = new KoaRouter({ prefix: "/login" });
const loginController = require("../../controller/login.controller")
const { verifyUserLogin } = require("../../middleware/login.middleware")

/* 
  verifyUserLogin  :查询数据库中的密码和用户输入的密码
  loginController.signToken: 颁发token
*/
loginRouter.post("/", verifyUserLogin, loginController.signToken)
loginRouter.get("/test", loginController.testLogin)


module.exports = loginRouter;


