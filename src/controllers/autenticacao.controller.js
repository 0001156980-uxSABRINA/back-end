const model = require("../models/autenticacao.model");



exports.login = async (req, res, next) => {
  try {
    const {email, password } = req.body;
    console.log(req.body, "req.body");
    const usuario = await  model.buscarPorEmail(email);
    if(usuario&& usuario.senha === password){
        res.json({
            success: true,
            message: `login realizado  de ${email} com sucesso `
        });
    } else{
        res.status(401).json({
            success: false,
            message: 'Email ou senha invalidos.'
        });
    }

  } catch (err) {
    next(err);
  }
};
