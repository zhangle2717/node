//程序入口模块

//导包
//框架
const express =require('express');
//获取数据用的
const bodyParser = require('body-parser');
//获取session
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
//引入时间模块
const moment = require('moment');
//引入其他的模块
const router = require('./router');
//配置数据库
const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'news'
};
//????????
const sessionStore = new MySQLStore(options);


//实例对象
const app = express();
//配置session文件
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
//   }))
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));


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