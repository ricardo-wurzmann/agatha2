// const express = require('express');
// const cors = require('cors');
// const { Sequelize } = require('sequelize');
// const exerciciosRouter = require('./routes/exercicios.routes');

// const app = express();
// const PORT = 3001;

// // Configuração do Sequelize para conectar ao banco de dados SQLite
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './config/questoes.db'
// });

// // Autenticação com o banco de dados e sincronização dos modelos
// sequelize.authenticate()
//   .then(() => {
//     console.log('Conexão estabelecida com sucesso.');
//     return sequelize.sync({ force: true }); // `force: true` irá dropar as tabelas existentes e recriá-las
//   })
//   .then(() => {
//     console.log('Banco de dados sincronizado com sucesso.');
//   })
//   .catch((error) => {
//     console.error('Erro ao conectar ou sincronizar o banco de dados:', error);
//   });

// // Configurações do Express
// app.use(cors({
//   origin: 'http://localhost:3001' // Substitua pela URL do seu frontend
// }));

// app.use(express.json());
// app.use('/exercicios', exerciciosRouter);

// // Iniciar o servidor
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });


const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('questoes.db');

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
    console.log(materia, submateria);
    db.all('SELECT * FROM questoes WHERE materia = ? AND submateria = ?', [materia, submateria], (err, rows) => {
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


