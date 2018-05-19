/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    UserID: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deviceID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deviceType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pushType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pushToken: {
      type: DataTypes.STRING(100),
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
    tableName: 'User'
  });
};
