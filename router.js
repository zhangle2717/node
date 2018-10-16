//路由模块
const express = require('express');
const router = express.Router();
const c_user = require('./controllers/c_user');

//各种路由
router
    .get('/signin',c_user.showSignin)
    .post('/signin',c_user.handleSignin)







module.exports=router;