const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('questoes.db');

function atualizarSubmateria(id, submateria) {
  return new Promise((resolve, reject) => {
    db.run('UPDATE questoes SET submateria = ? WHERE id = ?', [submateria, id], (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

db.serialize(async () => {
  try {
    const rows = await new Promise((resolve, reject) => {
      db.all('SELECT id, submateria FROM questoes', [], (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });

    for (const row of rows) {
      const submateriaAtualizada = row.submateria.replace(/\d+$/, '').trim();
      await atualizarSubmateria(row.id, submateriaAtualizada);
      console.log('Registro atualizado:', row.id, submateriaAtualizada);
    }
  } catch (err) {
    console.error('Erro:', err.message);
  } finally {
    db.close();
  }
});
