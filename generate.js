const path = require("path")
const config = require(path.join(__dirname, 'config', 'config'))
// 引入生成器
const SequelizeAuto = require('sequelize-auto')
const auto = new SequelizeAuto(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    additional: {
        timestamps: false,
        freezeTableName: true
    }
})
auto.run(function (err) {
    if (err) throw err
    console.log(auto.tables)
    console.log(auto.foreignKeys)
})