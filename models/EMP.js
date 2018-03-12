/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EMP', {
		EMPNO: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		ENAME: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		JOB: {
			type: DataTypes.STRING(9),
			allowNull: true
		},
		MGR: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		HIREDATE: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		SAL: {
			type: "DOUBLE",
			allowNull: true
		},
		COMM: {
			type: "DOUBLE",
			allowNull: true
		},
		DEPTNO: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'DEPT',
				key: 'DEPTNO'
			}
		}
	}, {
		tableName: 'EMP',
		timestamps: false,
		freezeTableName: true
	});
};
