import db from './db'
// 用于快速结束没有任何数据的响应，使用res.end()。 
// 响应中要发送JSON响应，使用res.json()。 
// 响应中要发送数据,使用res.send() ,但要注意header ‘content-type’参数。 
// 如果使用res.end()返回数据非常影响性能。
exports.infoList = (req, res) =>{
  db.getInfoList((list) => {
    res.send(list)
  })
}