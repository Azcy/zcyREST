'use strict'
const Sequelize = require('sequelize');
const path=require('path');

//获取配置文件信息对象
const config = require(path.join(__dirname, '..', 'config',  'config'));
let fs = require('fs');
let files = fs.readdirSync('../models');

//应用sqldb
var sqldb=require('./sqldb');

//同步数据库
sqldb.sequelize.sync({force:false}).then(()=>{
    console.log("Server successed to start");
}).catch(err=>{
    console.log("Server failed to start due to error :",err);
});

//查询
sqldb.User.findAndCount( {raw : true, logging : true, plain : false}).then(result=>{
    console.log(result.count);
    console.log(result.rows);
})

//更新
/*sqldb.User.update({name:'Mr z'},{where:{user_id:'1'}}).then(result=>{
    console.log(result);
    //console.log(result.rows);
})*/

//插入
/*sqldb.User.insertOrUpdate({name:'Mr zcy',email:'112@qq.com',password:'12334'}).then(result=>{
    console.log(result);
    //console.log(result.rows);
});*/
    /*.on('success',msg=>{
    console.log(msg);})
    .on('failure',err=>{
    console.log(err);});*/


//操作数据库

//创建sequelize对象
/*const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    logging: debug,
    underscored: true,
    underscoredAll: true,
    define: {
        timestamps: false,
        freezeTableName: true,
    }
});
var db={};
db.sequelize=sequelize;

db.User=db.sequelize.import('../models/t_user.js');

db.User.sequelize.sync();

db.User.findAll().then(rows=>{
    console.log(rows);
});*/

//原始查询
/*sequelize.query('select * FROM t_user ').then(myTableRows => {
    console.log(myTableRows);
});*/

//模型定义
/*var User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true // Model 对应的表名将与model名相同
});
//模型与数据库表同步
User.sync({force: true}).then(function () {
    // 已创建数据表
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});*/





