var express = require('express');
var app=express();
var router = express.Router();
const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// auth
app.get('/',function(req,res) {
    var url = req.query.url;
    var name = req.query.name;
    console.log(url, name);
});


var secret='zcy'


//设置不受权限控制的地址
app.use(jwt({secret:secret}).unless({
    path:[/^\/public/]
}))

router.post('/api/createToken', function(req, res, next) {

    const user = req.body
   //console.log(req)
    console.log(req.body);
    let userToken = {
        name: req.body.name
    }
        if(user && user.name) {
            let userToken = {
                name: user.name
            }
            const token = jwt.sign(userToken, secret, {expiresIn: '1h'})  //token签名 有效期为1小时
            console.log('token:',token)
            let result = {
                message: '获取token成功',
                code: 1,
                token
            }
            res.json(result);
        } else {
            let result = {
                message: '参数错误',
                code: -1
            }
            res.json(result);
        }

});
app.use(router)
app.listen(3000, () => {
    console.log('app listening 3000...')
})

