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
		freezeTableName: true
	});
};
