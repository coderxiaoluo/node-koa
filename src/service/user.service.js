const connection = require("../database")
class UserService {
  // 添加用户
  async createDB(user) {
    const { username: username, password: password } = user
    const sql = "INSERT INTO user (username,password) VALUES (?,?);"
    // 这是一个异步函数
    const results = await connection.execute(sql, [username, password])
    return results
  }
  // 查询数据
  async queryUserDB(user) {
    const { username: username } = user
    const sql = "SELECT * FROM user WHERE username = ?;"
    const [results] = await connection.execute(sql, [username])
    return results
  }
}

module.exports = new UserService();