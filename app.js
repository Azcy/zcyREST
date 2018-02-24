'use strict'

const path = require("path");
const koa = require('koa');
const convert = require('koa-convert');
const cors = require('koa-cors');
const RestQL =require('./lib/RestQL');
const kjwt = require('koa-jwt');
const config = require(path.join(__dirname, 'config', 'config'));
let app = new koa();
const prepare = require(path.join(__dirname, 'core', 'prepare'));
const models = prepare.sequelize.models;
let restql = new RestQL(models);

//权限控制，必须要加上Bearer Token 以secret加密
/*
app.use(kjwt({
	secret: config.jwtSecret
}));
*/

const qs=require("qs");
let res = qs.stringify({"kk": {$gt: "M",$lt: "N"}})
console.log(res);

app.use(restql.routes());
app.listen('9000', '127.0.0.1');
