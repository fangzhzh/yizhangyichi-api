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
      firstName: {
        type: DataTypes.STRING(45),
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
      },
      lastName: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      picture: {
        type: DataTypes.STRING(1000),
        allowNull: true
      },
      name: {
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
    return (
      "Bearer " +
      jwt.sign({ user_id: this.UserID }, CONFIG.jwt_encryption, {
        expiresIn: expiration_time
      })
    );
  };

  Model.prototype.toWeb = function(pw) {
    let json = this.toJSON();
    return json;
  };
  return Model;
};
