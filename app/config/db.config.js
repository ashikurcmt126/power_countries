const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.countries = require('../model/population/countries.model.js')(sequelize, Sequelize);
db.populations = require('../model/population/population.model.js')(sequelize, Sequelize);
db.population_year = require('../model/population/population_year.model.js')(sequelize, Sequelize);
db.categories = require('../model/population/category.model.js')(sequelize, Sequelize);

module.exports = db;