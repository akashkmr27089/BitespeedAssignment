const { Sequelize } = require('sequelize');
require('dotenv').config();


// Create a new instance of Sequelize

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_PASSWORD, process.env.PG_USER, {
  host: process.env.PG_HOST,
  dialect: 'postgres',
  port: process.env.PG_PORT || 5432,
  logging: process.env.ENV == "development" ? true : false
});

module.exports = sequelize;
