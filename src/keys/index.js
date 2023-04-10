const fs = require("fs")
const path = require("path")

const PRIVATE_kEY = fs.readFileSync(path.resolve(__dirname, "./private.key"))
const pPUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, "./public.key"))

module.exports = {
  PRIVATE_kEY,
  pPUBLIC_KEY
}