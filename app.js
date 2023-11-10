const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('questoes2 copy.db');

app.use(cors());

app.get('/materias', (req, res) => {
    db.all('SELECT DISTINCT materia FROM questoes', [], (err, rows) => {
      if (err) {
        console.error('Erro ao buscar matérias:', err.message);
        return res.status(500).json({ error: err.message });
      }
      console.log('Matérias enviadas:', rows);
      res.json(rows);
    });
  });
  

app.get('/submaterias/:materia', (req, res) => {
  const { materia } = req.params;
  db.all('SELECT DISTINCT submateria FROM questoes WHERE materia = ?', [materia], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get('/questoes/:materia/:submateria', (req, res) => {
    const { materia, submateria } = req.params;
    db.all('SELECT id, texto_da_questao, opcao_a, opcao_b, opcao_c, opcao_d, opcao_e FROM questoes WHERE materia = ? AND submateria = ?', [materia, submateria], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});

app.get('/submaterias/:materia/:submateria/aleatorias', (req, res) => {
  const { materia, submateria } = req.params;
  db.all('SELECT id, texto_da_questao, opcao_a, opcao_b, opcao_c, opcao_d, opcao_e FROM questoes WHERE materia = ? AND submateria = ? ORDER BY RANDOM() LIMIT 5', [materia, submateria], (err, rows) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(rows);
  });
});

  

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor!');
  });

app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Envia uma resposta vazia com status 204 (No Content)
  });
  
app.listen(3005, () => {
  console.log('Servidor rodando na porta 3005');
});