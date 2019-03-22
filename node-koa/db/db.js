import {MongoClient as mongo } from 'mongodb'
let dburl = 'mongodb://localhost:27017'

exports.getInfoList = () => {
  return new Promise((resolve, reject)=> {
    mongo.connect(dburl, (err, client) => {
      if (err) {
        console.log('数据库连接失败')
        return
      } else {
        console.log('数据库连接成功')
        let db = client.db("user")
        db.collection('info').find().toArray((err, result) => {
          if (err) {
            console.log('Error' + err)
            return
          }
          console.log(1)
          resolve(result)
        })
      }
    });
  })
}