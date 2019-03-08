var express = require('express');
var app = express();
var bodyParser = require('body-parser');
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

var questions = [{
  data: 213,
  num: 444,
  age: 12
}, {
  data: 456,
  num: 678,
  age: 13
}];

// 用于快速结束没有任何数据的响应，使用res.end()。 
// 响应中要发送JSON响应，使用res.json()。 
// 响应中要发送数据,使用res.send() ,但要注意header ‘content-type’参数。 
// 如果使用res.end()返回数据非常影响性能。
app.get('/123', function (req, res) {
  res.status(200),
    res.json(questions)
});
app.post('/haha', function (req, res) {
  res.status(200),
    console.log("post请求：参数", req.body);
  res.send('3e3e3e3e3e')
});
//配置服务端口
var server = app.listen(3000, '192.168.254.174', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})