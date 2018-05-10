/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Todo', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    todo_type: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'chi',
      primaryKey: true
    }
  }, {
    tableName: 'Todo'
  });
};
