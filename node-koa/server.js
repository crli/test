const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors'); // 解决跨域请求
const bodyParser = require('koa-bodyparser'); // 解析post请求request请求体的参数
const controllerMiddleware = require('./controllerMiddleware');
app.use(cors({
    origin: function (ctx) {
        let arr = ["http://192.168.254.174:1234", "http://localhost:1234"]//指定访问ip
        let str = ctx.headers.origin
        if(arr.indexOf(str) > -1) {
            return str
        }
    },
    exposeHeaders: ['Server-Authorization'], // Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma可拿到，如果想拿到其他字段在这里指定
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']}
));
app.use(bodyParser());
app.use(controllerMiddleware());
app.listen(3000, ()=> {
    console.log('服务程序已经启动，监听端口->3000');
});