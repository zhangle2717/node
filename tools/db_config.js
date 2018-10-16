const mysql = require('mysql');
const db= mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'news'
  });
  

  //导出
  module.exports=db;