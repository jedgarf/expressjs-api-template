const settings = require("../config/settings.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(settings.mysql_db, settings.mysql_user, settings.mysql_password, {
  host: settings.mysql_host,
  dialect: settings.mysql_dialect,
  define: {
    timestamps: false
  },
//   operatorsAliases: false,

  pool: {
    max: settings.mysql_pool.max,
    min: settings.mysql_pool.min,
    acquire: settings.mysql_pool.acquire,
    idle: settings.mysql_pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// List of models
db.menusModel = require("./menusModel").default(sequelize, Sequelize);
db.subMenusModel = require("./subMenusModel").default(sequelize, Sequelize);
db.authModel = require("./authModel").default(sequelize, Sequelize);

module.exports = db;