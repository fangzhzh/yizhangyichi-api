/* jshint indent: 2 */
"use strict";
const jwt = require("jsonwebtoken");

module.exports = function(sequelize, DataTypes) {
  const Model = sequelize.define(
    "User",
    {
      UserID: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      FirstName: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      Type: {
        type: DataTypes.STRING(64),
        allowNull: false,
        defaultValue: "google"
      },
      Email: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      DeviceID: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      DeviceType: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PushType: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PushToken: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      CreatedTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      UpdatedTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      LastName: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      Picture: {
        type: DataTypes.STRING(1000),
        allowNull: true
      },
      Name: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },
    {
      tableName: "User"
    }
  );

  Model.prototype.getJWT = function() {
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return jwt.sign({ user_id: this.UserID }, CONFIG.jwt_encryption, {
      expiresIn: expiration_time
    });
  };

  return Model;
};
