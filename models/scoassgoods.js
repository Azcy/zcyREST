/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('scoassgoods', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		PackageName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PackageNo: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		GoodsNo: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		GoodsName: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		Barcode: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		AssGoodsNo: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		AssGoodsName: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		AssBarcode: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		count: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Message: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'scoassgoods',
		timestamps: false,
		freezeTableName: true
	});
};
