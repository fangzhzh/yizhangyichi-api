/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todo', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content'
    },
    createdTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_time'
    },
    updatedTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updated_time'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'status'
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'type'
    },
    todoType: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'chi',
      primaryKey: true,
      field: 'todo_type'
    }
  }, {
    tableName: 'Todo'
  });
};
