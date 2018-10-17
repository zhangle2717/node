//我要干什么，这个用不用引包，我觉得现在不需要吧
//导入时间的包
const moment = require('moment');
//导入SQL语句文件
const m_topic = require('../moudles/m_topic');


const showIndex=(req,res)=>{
    m_topic.fun(function(err,data){
        if(err){
            return res.send({
                code:500,
                massage:'服务器错误'
            })
        }
        console.log(data);
        
        res.render('index.html',{
            items:data,
            user:req.session.user,
        })
    })
}

const showTopic=(req,res)=>{
    res.render('topic/edit.html',{user:req.session.user})
}

const creatTitle=(req,res)=>{
   const info = req.body;
   info.createdAt=moment().format();
   info.userId=req.session.user.id;
   m_topic.addTitle(info,function(err,data){
        if(err){
            return res.send({
                code:500,
                massage:'服务器错误'
            })
        }
        res.send({
            code:200,
            massage:'添加成功了'
        })
   })   
}

const updataId=(req,res)=>{
  const updataId =  req.params.updataId;
  m_topic.showData(updataId,function(err,data){
    if(err){
        return res.send({
            code:500,
            massage:'服务器错误'
        })
    }
    //获取当前登录的id
   const sId=req.session.user.id;
    res.render('topic/show.html',{user:data[0],s:sId})
  })    
}  

const deleteSj =(req,res)=>{
  const id =  req.params.deId;
  m_topic.deleteData(id,function(err,data){
    if(err){
        return res.send({
            code:500,
            massage:'服务器错误'
        })
    }
    if(data){
        res.redirect('/');
    }
  })
  
} 

const xiuGai = (req,res)=>{
    const id = req.params.upId;
    //将数据发送给数据库
    m_topic.showData(id,function(err,data){
        if(err){
            return res.send({
                code:500,
                massage:'服务器错误',
            })
        }
        
            res.render('topic/create.html', data[0])
    })
}

const xiu = (req,res)=>{
    const info = req.body;
    m_topic.xiuGa(info,info.id,function(err,data){
        if(err){
           return res.send({
                code:500,
                massage:'服务器错误',
            })
        }
        res.send({
            code:200,
            massage:'修改成功',
        })
    })

}


module.exports={
    showIndex,
    showTopic,
    creatTitle,
    updataId,
    deleteSj,
    xiuGai,
    xiu,
}