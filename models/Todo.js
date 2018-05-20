/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let Model = sequelize.define(
    "Todo",
    {
      TodoID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      CreatedTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      UpdatedTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      Status: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0"
      },
      Type: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0"
      },
      TodoType: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: "chi",
        primaryKey: true
      },
      Note: {
        type: DataTypes.STRING(1024),
        allowNull: true
      }
    },
    {
      tableName: "Todo"
    }
  );
  Model.prototype.toWeb = function(pw) {
    let json = this.toJSON();
    return json;
  };
  return Model;
};
