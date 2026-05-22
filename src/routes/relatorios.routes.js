// ==========================================
// routes/relatoriosRoutes.js
// ==========================================

const express = require('express');
const router = express.Router();

const relatoriosController = require('../controllers/relatorios.controllers');

// ==========================================
// ROTA RELATÓRIOS
// ==========================================

// SEM FILTRO
// GET /api/relatorios

// COM FILTRO
// GET /api/relatorios?dataInicio=2026-04-01&dataFim=2026-04-30

router.get('/relatorios', relatoriosController.buscarRelatorios);

module.exports = router;