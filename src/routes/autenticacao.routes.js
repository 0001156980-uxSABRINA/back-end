const express = require('express');
const controller = require('../controllers/autenticacao.controller');
const router  = express.Router();

// rota Post para processar o login
router.post('/login', controller.login);

module.exports = router;