/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Project', {
    ProjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    UpdatedTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    UserID: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'Project'
  });
};
