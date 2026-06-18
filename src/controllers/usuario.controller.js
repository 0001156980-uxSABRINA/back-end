const model = require("../models/usuario.model");

exports.listar = async (req, res, next) => {
  try {
    const usuario = await model.buscarTodos();
    res.json(usuario);
  } catch (err) {
    next(err);
  }
};

exports.buscarPorId = async (req, res, next) => {
  try {
    const usuario = await model.buscarPorId(req.params.id);
    if (!usuario)
      return res.status(404).json({ erro: "Usuário não encontrado" });
    res.json(usuario);
  } catch (err) {
    next(err);
  }
};

exports.criar = async (req, res, next) => {
  try {
    const { nome, email, telefone, senha } = req.body;
    console.log(req.body, "req.body");
    console.log({ nome, email, telefone, senha }, " Criado com sucesso.");
    const id = await model.criar({ nome, email, telefone, senha });
    res.status(201).json({ id, nome, email, telefone, senha });
  } catch (err) {
    next(err);
  }
};

exports.atualizar = async (req, res, next) => {
  try {
    const { nome, email, telefone, senha } = req.body;

    await model.atualizar(req.params.id, {
      nome,
      email,
      telefone,
      senha
    });

    res.json({ mensagem: "Usuário atualizado" });
    console.log("Usuário atualizado");
  } catch (err) {
    next(err);
  }
};

exports.deletar = async (req, res, next) => {
  try {
    await model.deletar(req.params.id);
    res.json({ mensagem: "Usuário removido" });
  } catch (err) {
    next(err);
  }
};
