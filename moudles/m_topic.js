//服务列表数据库
//导入文件msqyl 文件
const db = require('../tools/db_config');

exports.fun = function(callback){
    const sql = 'SELECT * FROM `topics` ORDER BY createdAt desc';
    db.query(sql,(err,data)=>{
        if(err){
            return callback(err,null);
        }
        callback(null,data);
    })
}

exports.addTitle=function(info,callback){
    const sql ='INSERT INTO `topics` SET ?';
    
    db.query(sql,info,(err,data)=>{
        if(err){
            return callback(err,null)
        }
        callback(null,data);
    })
}

exports.showData=function(info,callback){
    const sql = 'SELECT * FROM `topics` WHERE id= ?';
    db.query(sql,info,(err,data)=>{
        if(err){
            return callback(err,null)
        }
        callback(null,data)
    })
}

exports.deleteData=function(info,callback){
    const sql = 'DELETE FROM `topics` WHERE id=?';
    db.query(sql,info,(err,data)=>{
        if(err){
            return callback(err,null);
        }
        callback(null,data);

    })
}
exports.xiuGa=function(data,dataId,callback){
    const sql = 'UPDATE `topics` SET ? WHERE id='+dataId;
    
    
    db.query(sql,data,(err,data)=>{
       
        if(err){
            console.log(sql);
            return callback(err,null)
        }
        callback(null,data)
    })
}


