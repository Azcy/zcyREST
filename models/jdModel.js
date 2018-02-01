/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('jdModel', {
		bookID: {
			type: DataTypes.STRING(45),
			allowNull: false,
			primaryKey: true
		},
		bookName: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		bookPrice: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'jdModel',
		timestamps: false,
		// 这个选项表示，数据库中的表明与程序中的保持一致，否则数据库中的表名会以复数的形式命名
		freezeTableName: true
	});
};
