'use strict'

var config = require('../config/config');
var Sequelize = require('sequelize');
const debug = require('debug')('sequelize')
var sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
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

db.User = db.sequelize.import('../models/t_user.js');

module.exports=db;