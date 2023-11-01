// routes/exercicios.routes.js

const express = require('express');
const router = express.Router();
const { getMaterias } = require('../controllers/exercicios.controller');

router.get('/materias', getMaterias);

module.exports = router;
