const {Sequelize} = require( 'sequelize');
const {config} = require('../config/config');

const sequelize = new Sequelize(
    config.database, config.user, config.pass, {
    host: config.host,
    dialect:  'mysql'
  });

  module.exports =  sequelize;
