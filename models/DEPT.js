/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DEPT', {
		DEPTNO: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
            references: {
                model: 'DEPT',
                key: 'DEPTNO'
            }
		},
		DNAME: {
			type: DataTypes.STRING(14),
			allowNull: true
		},
		LOC: {
			type: DataTypes.STRING(13),
			allowNull: true
		}
	}, {
		tableName: 'DEPT',
		timestamps: false,
		freezeTableName: true
	});
};
