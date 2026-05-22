const db = require('../config/db');

exports.salvarAluno = async (dados) => {
  const sql = `
    INSERT INTO alunos_faltosos
    (
      nome,
      ra,
      email,
      telefone1,
      telefone2,
      telefone_responsavel
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  // ✅ AGORA USANDO promise().query()
  const [result] = await db.promise().query(sql, [
    dados.nome,
    dados.ra,
    dados.email,
    dados.telefone1,
    dados.telefone2,
    dados.telefoneResponsavel
  ]);

  return {
    id: result.insertId, // ✅ AGORA FUNCIONA
    nome: dados.nome,
    ra: dados.ra,
    email: dados.email,
    telefone1: dados.telefone1,
    telefone2: dados.telefone2,
    telefone_responsavel: dados.telefoneResponsavel
  };
};