// ==========================================
// models/relatorios.model.js
// ==========================================

const db = require('../config/db');

// ==========================================
// BUSCAR RELATÓRIOS
// ==========================================

exports.buscarRelatorios = async (dataInicio, dataFim) => {

    try {

        let sql = `
            SELECT 
                id,
                nome,
                ra,
                email,
                telefone1,
                created_at
            FROM alunos_faltosos
            WHERE DATE(created_at) BETWEEN ? AND ?
            ORDER BY created_at DESC
        `;

        const [rows] = await db.promise().query(sql, [dataInicio, dataFim]);

        return rows;

    } catch (erro) {

        console.log('Erro no model:', erro);
        throw erro;
    }
};