const Koa = require("koa");
const static = require("koa-static");

const app = new Koa();
const path = require("path");
const staticPath = './views'
const router = require("./router/routers");

app.use(static(path.join(__dirname,staticPath)));
app.use(router.routes())
app.listen(3000);
console.log("啟動成功，端口3000")


