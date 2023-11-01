// models/exercicio.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Exercicio = sequelize.define('Exercicio', {
  materia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  submateria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false, // Desativa campos de timestamp se você não precisar deles
});

module.exports = Exercicio;


