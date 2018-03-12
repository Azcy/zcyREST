/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SALGRADE', {
		GRADE: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		LOSAL: {
			type: "DOUBLE",
			allowNull: true
		},
		HISAL: {
			type: "DOUBLE",
			allowNull: true
		}
	}, {
		tableName: 'SALGRADE',
		timestamps: false,
		freezeTableName: true
	});
};
