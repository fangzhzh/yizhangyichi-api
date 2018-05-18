/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectTodo', {
    Todo_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Project_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ProjectTodoID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'ProjectTodo'
  });
};
