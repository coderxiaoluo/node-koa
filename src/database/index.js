const mysql2 = require("mysql2")
// 连接数据库业务逻辑
const connectionPool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cms_db",
  connectionLimit: 10,// 最大连接数
  waitForConnections: true, // 超过最大连接时排队
  queueLimit: 0, // 排队最大数量(0 代表不做限制)
})

connectionPool.getConnection((error, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("连接数据库失败")
    } else {
      console.log('数据库连接成功~')
    }
  })
})
 const connection = connectionPool.promise()
module.exports = connection   