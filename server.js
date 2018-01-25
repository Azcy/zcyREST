

const koa  = require('koa');
const path = require("path");

const prepare = require(path.join(__dirname, 'core', 'prepare'));
const RestQL  = require('./lib/RestQL');

const models  = prepare.sequelize.models;

const app = new koa();
const restql = new RestQL(models);

app.use(restql.routes());
app.listen('3000', '0.0.0.0');
