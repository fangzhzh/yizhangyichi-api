/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectTodo', {
    todoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'todo_id'
    },
    projectId: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      field: 'project_id'
    }
  }, {
    tableName: 'ProjectTodo'
  });
};
