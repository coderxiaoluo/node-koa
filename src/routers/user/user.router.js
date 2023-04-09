const KoaRouter = require("@koa/router");
const userController = require("../../controller/user.controller")
const { verifyUserNamePassWord, tokenJWTPassword } = require("../../middleware/user.middleware")
const userRouter = new KoaRouter({ prefix: "/user" });

// 创建新用户
// verifyUserNamePassWord -> 判断用户是否存在
// tokenJWTPassword 将密码进行加密
// userController.create  -> controller 控制器   分层架构思想
userRouter.post("/", verifyUserNamePassWord, tokenJWTPassword, userController.create)


module.exports = userRouter