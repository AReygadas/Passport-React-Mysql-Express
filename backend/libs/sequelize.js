const {Sequelize} = require( 'sequelize');
const {config} = require('../config/config');
const setupModels = require('../models/index');

const sequelize = new Sequelize(
    config.database, config.user, config.pass, {
    host: config.host,
    dialect:  'mysql'
  });

  setupModels(sequelize);

  sequelize.sync();
  
  module.exports =  sequelize;
