/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectTodo', {
    TodoID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ProjectTodoID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    }
  }, {
    tableName: 'ProjectTodo'
  });
};
