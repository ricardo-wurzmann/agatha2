// controllers/materia.controller.js

const Materia = require('../models/exercicio.model');

exports.getMaterias = async (req, res) => {
  try {
    const materias = await Materia.findAll();
    res.json(materias);
  } catch (error) {
    console.error('Erro ao buscar matérias:', error);
    res.status(500).send('Erro interno do servidor');
  }
};
