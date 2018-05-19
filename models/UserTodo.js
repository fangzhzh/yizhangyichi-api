/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserTodo', {
    UserTodoID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TodoID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'UserTodo'
  });
};
