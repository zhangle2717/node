//路由模块
const express = require('express');
const router = express.Router();
const c_user = require('./controllers/c_user');
const c_topic =require('./controllers/c_topic');

//各种路由
router
    .get('/signin',c_user.showSignin)
    .post('/signin',c_user.handleSignin)
    .get('/',c_topic.showIndex)
    .get('/topic/create',c_topic.showTopic)
    .post('/topic/create',c_topic.creatTitle)
    .get('/topic/:updataId',c_topic.updataId)
    .get('/signout',c_user.clearSj)
    //删除
    .get('/topic/detail/delete/:deId',c_topic.deleteSj)
    //编辑
    .get('/topic/detail/edit/:upId',c_topic.xiuGai)
    .post('/topic/up',c_topic.xiu)
    
module.exports=router;