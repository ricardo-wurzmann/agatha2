const Sequelize = require('sequelize');
const config = require('../config/config.json').development;
const sequelize = new Sequelize(config);

const Exercicio = require('./exercicio.model')(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Exercicio
};
