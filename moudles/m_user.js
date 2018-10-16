//数据模块

//引入文件数据连接文件
const db = require('../tools/db_config');

 function checkEmail(email,callback){
    const sql = "SELECT * FROM `users` WHERE email=?"
    db.query(sql,email,(err,data)=>{
        //判断是不是服务器的错误
        if(err){
          return callback(err,null)
        }
        callback(null,data)
     
    })
  
}
module.exports.checkEmail=checkEmail;