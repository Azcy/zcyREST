/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('t_user', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 't_user',
		timestamps: false,
		freezeTableName: true
	});
};
