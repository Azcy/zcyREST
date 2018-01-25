const fs = require("fs")
const path = require("path")
const Sequelize = require('sequelize')
const config = require(path.join(__dirname, '..', 'config', 'config'))
const debug = require('debug')('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, {
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
})

var db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

fs.readdirSync(path.join(__dirname, '..', 'models'))
// 过滤不包含.的文件名
    .filter(function (file) {
        return (file.indexOf(".") !== 0)
    })
    // 遍历Models下面所有实体模型，并导入db对象中
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, '..', 'models', file))
        db[model.name] = model
    })
// 绑定模型关系（1对1，1对多，多对多）
Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db)
    }
})

db.sequelize.sync()

module.exports = {
    sequelize,
}
