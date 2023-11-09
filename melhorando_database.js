
//Remover Parenteses com numero de cada materia
// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('questoes2 copy.db');

// function atualizarSubmateria(id, submateria) {
//   return new Promise((resolve, reject) => {
//     db.run('UPDATE questoes SET submateria = ? WHERE id = ?', [submateria, id], (err) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve();
//     });
//   });
// }

// db.serialize(async () => {
//   try {
//     const rows = await new Promise((resolve, reject) => {
//       db.all('SELECT id, submateria FROM questoes', [], (err, rows) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(rows);
//       });
//     });

//     for (const row of rows) {
//       // Remove apenas os números no final da string
//       const submateriaAtualizada = row.submateria.replace(/\s*\d+$/, '').trim();
//       await atualizarSubmateria(row.id, submateriaAtualizada);
//       console.log('Registro atualizado:', row.id, submateriaAtualizada);
//     }
//   } catch (err) {
//     console.error('Erro:', err.message);
//   } finally {
//     db.close();
//   }
// });



//Remover número antes do texto da questão
// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('questoes2 copy.db');

// function atualizarTextoDaQuestao(id, textoDaQuestao) {
//   return new Promise((resolve, reject) => {
//     db.run('UPDATE questoes SET texto_da_questao = ? WHERE id = ?', [textoDaQuestao, id], (err) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve();
//     });
//   });
// }

// db.serialize(async () => {
//   try {
//     const rows = await new Promise((resolve, reject) => {
//       db.all('SELECT id, texto_da_questao FROM questoes', [], (err, rows) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(rows);
//       });
//     });

//     for (const row of rows) {
//       const textoAtualizado = row.texto_da_questao.replace(/\d+\.\s*\(/, '(').trim();
//       await atualizarTextoDaQuestao(row.id, textoAtualizado);
//       console.log('Registro atualizado:', row.id, textoAtualizado);
//     }
//   } catch (err) {
//     console.error('Erro:', err.message);
//   } finally {
//     db.close();
//   }
// });

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('questoes2 copy.db'); // Certifique-se de que o caminho do banco de dados está correto


function atualizarNomeDaMateria(id, nomeDaMateria) {
  return new Promise((resolve, reject) => {
    db.run('UPDATE questoes SET materia = ? WHERE id = ?', [nomeDaMateria, id], (err) => {
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
      db.all('SELECT id, materia FROM questoes', [], (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });

    for (const row of rows) {
      const nomeAtualizado = row.materia.replace(/\n/g, ' ').trim(); // Substitui quebras de linha por espaço
      await atualizarNomeDaMateria(row.id, nomeAtualizado);
      console.log('Registro atualizado:', row.id, nomeAtualizado);
    }
  } catch (err) {
    console.error('Erro:', err.message);
  } finally {
    db.close();
  }
});
