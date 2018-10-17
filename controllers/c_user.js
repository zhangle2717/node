//控制器

//这个只要结果
const m_user = require('../moudles/m_user');
//用户模块

//引入mysql文件


const showSignin = (req,res)=>{
    res.render('signin.html');
}
const handleSignin = (req,res)=>{
   const body = req.body;
//    console.log(body);
   m_user.checkEmail(body.email,function(err,data){
        if(err){
           return res.send({
                code:1,
                message:'服务器错误',

            })
        }
        //而后判断是不是邮箱的错误，在这我们只查询了一条数据，只要data[0]，里面有数据说明就是正确的，没有数据就是错误
        if(!data[0]){
            return res.send({
                code:2,
                message:'邮箱错误',

            })
        }
        if(data[0].password != body.password){
            return res.send({
                code:3,
                message:'密码错误',

            })
        }
        req.session.user=data[0];
        
        // res.render('index.html',{user:req.session.user});

        res.send({
                code:4,
                message:'登录成功',
            }
        )
    

   })
    // const sql = "SELECT * FROM `users` WHERE email=?"
    // connection.query(sql,body.email,(err,data)=>{
    //     //判断是不是服务器的错误
        
        
    //     if(err){
    //        return res.send({
    //             code:1,
    //             message:'服务器错误',

    //         })
    //     }
    //     //而后判断是不是邮箱的错误，在这我们只查询了一条数据，只要data[0]，里面有数据说明就是正确的，没有数据就是错误
    //     if(!data[0]){
    //         return res.send({
    //             code:2,
    //             message:'邮箱错误',

    //         })
    //     }
    //     if(data[0].password != body.password){
    //         return res.send({
    //             code:3,
    //             message:'密码错误',

    //         })
    //     }
    //     res.send({
    //             code:4,
    //             message:'登录成功',
    //         }
    //     )
    // })
   
   
};

const clearSj=(req,res)=>{
    //清除session，并跳转页面
    delete req.session.user;
    res.redirect('/signin');
}
module.exports={
    showSignin,
    handleSignin,
    clearSj,
};
