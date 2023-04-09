const Koa = require("koa");
const KoaBody = require("koa-bodyparser")
const router = require("../routers")

const app = new Koa();

app
  .use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods());


module.exports = app