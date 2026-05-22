const db = require('../config/db');

exports.buscarTodos = async () => {
  const [rows] = await db.promise().query('SELECT * FROM usuario');
  return rows;
};

exports.buscarPorId = async (id) => {
  const [rows] = await db.promise().query(
    'SELECT * FROM usuario WHERE id = ?',
    [id]
  );
  return rows[0];
};

exports.criar = async ({ nome, email, telefone, senha }) => {
  const [result] = await db.promise().query(
    'INSERT INTO usuario (nome, email, telefone, senha) VALUES (?, ?, ?, ?)',
    [nome, email, telefone, senha]
  );
  return result.insertId;
};

exports.atualizar = async (id, { nome, email, telefone, senha }) => {
  await db.promise().query(
    'UPDATE usuario SET nome = ?, email = ?, telefone = ?, senha = ? WHERE id = ?',
    [nome, email, telefone, senha, id]
  );
};

exports.deletar = async (id) => {
  await db.promise().query(
    'DELETE FROM usuario WHERE id = ?',
    [id]
  );
};
