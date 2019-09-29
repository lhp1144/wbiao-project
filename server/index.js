// 后台借口
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const fakeDB = require("./fakeDB");

// lhp导入
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./userDB');
const jwt = require('jsonwebtoken');
const crypto = require('crypto') // 加密
app.use(bodyParser.json());
app.use(cookieParser());
const codeMap = new Map();

// 发送虚拟验证码
app.post('/user/sendCode', function (req, res) {
    // 获取前端传来的phone
    let phone = req.body.phone;
    let code = Math.floor(Math.random() * 900000) + 100000;
    codeMap.set(phone, String(code));
    console.log(phone, code);
    res.send({
        ok: true,
        code: code
    })
});

//用户注册
app.post('/user/createUser',async function(req,res) {
    let resUser = await db.createUser(req.body);
    res.send('ok');  
});

// 根据验证码登录
app.post('/user/loginByCode', async function (req, res) {

    console.log(req.body);

    console.log(codeMap);

    let code = codeMap.get(req.body.phone);
    // 获取数据库的getUserByPhone方法
    let login = await db.getUserByPhone(req.body.phone);

    if (login) {
        if (code === req.body.code) {
            let user = await db.getUserByPhone(req.body.phone);
            console.log(user);
            let token = jwt.sign(user, 'abc');
            res.cookie('token', token);
            res.send({
                ok: true,
                login_name: req.body.phone
            })
        } else {
            res.send({
                ok: false
            })
        }
    }else{
        res.send({
            ok: false
        });
    }
});
// 根据用户名登录
app.post('/user/loginByName',async function(req,res){
    //调用DB里的登录方法
    let login = await db.loginByName(req.body.user_name);
    //打印下前端请求过来的json数据
    //console.log(login);
    console.log(req.body);
    //判断用户名是否存在
    if (login) {
        let password = req.body.password;
        if (password === login.password) {
            let loginUser = await db.loginByName(req.body.user_name);
            console.log(loginUser);
            let token = jwt.sign(loginUser, 'abc');
            res.cookie('token',token);
            res.send({
                ok: true,
                user_name: req.body.user_name
            });
        }else{
            res.send({
                ok: false
            })
        }
    }
    res.send({
        ok: false
    });
});


app.get("/product/msgs",function(req,res){
	res.send([
		{id:'01',name:'综合排序'},
		{id:'02',name:'销量优先'},
		{id:'03',name:'价格排序'},
		{id:'04',name:'筛选'},
	])
});

app.get('/product/list',function(req,res){
	res.send(fakeDB.goods_list[req.query.typeid])
});
app.get("/product/cart",function(req,res){
	res.send(fakeDB.products)
})

app.listen(5000,function(err) {
    if (err) {
        console.log(err);
    }
    console.log('已启动web服务，可以访问了');
});