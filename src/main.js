const app = require("./app")
const { SELECT_PORT } = require("./config/server.config");

app.listen(SELECT_PORT, () => {
  console.log(`服务器启动成功: http://localhost:${SELECT_PORT}`)
})