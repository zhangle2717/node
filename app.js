//程序入口模块

//导包
//框架
const express =require('express');
//获取数据用的
const bodyParser = require('body-parser');
//引入其他的模块
const router = require('./router');

//实例对象
const app = express();

// 配置body-parser包
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', require('express-art-template'));


//统一处理静态资源
app.use('/node_modules',express.static('./node_modules'))
app.use('/public',express.static('./public'))


//3返回并处理数据
app.use(router);

//4.设置端口
app.listen(12345,()=>{
    console.log('监听成功');
    
})