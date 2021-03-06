"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var db = {};

const blackLsit = ["user", "company"];
const sequelize = new Sequelize(
  CONFIG.db_name,
  CONFIG.db_user,
  CONFIG.db_password,
  {
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    port: CONFIG.db_port,
    operatorsAliases: false,
    define: {
      timestamps: false
    }
  }
);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      !blackLsit.includes(file.slice(0, -3))
    );
  })
  .forEach(file => {
    console.log(file);
    var model = sequelize["import"](path.join(__dirname, file));
    model.prototype.toWeb = function(pw) {
      let json = this.toJSON();
      return json;
    };
    db[model.name] = model;
  });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
