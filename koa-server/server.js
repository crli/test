const Koa = require('koa');
// const router = require('koa-router')();
const app = new Koa();
const cors = require('koa2-cors'); // 解决跨域请求
const bodyParser = require('koa-bodyparser'); // 解析post请求request请求体的参数
const controllerMiddleware = require('./controllerMiddleware');

app.use(cors());
app.use(bodyParser());
app.use(controllerMiddleware());

// add router middleware:
// app.use(router.routes());
app.listen(3000, ()=> {
    console.log('服务程序已经启动，监听端口->3000');
});