import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import controller from './controller'
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//设置跨域访问
app.all('*', function (req, res, next) {
  let arr = ["http://192.168.254.174:1234", "http://localhost:1234"]//指定访问ip
  let str = req.headers.origin
  if(arr.indexOf(str) > -1) {
    res.header("Access-Control-Allow-Origin", str); 
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});

//配置服务端口
var server = app.listen(3000, '192.168.254.174', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

app.post('/infoList', controller.infoList);