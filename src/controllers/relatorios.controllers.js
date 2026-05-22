// ==========================================
// controllers/relatoriosController.js
// ==========================================

const relatoriosModel = require('../models/relatorios.model');

// ==========================================
// BUSCAR RELATÓRIOS
// ==========================================

exports.buscarRelatorios = async (req, res) => {

    try {

        // PEGA DATAS DA URL
        const { dataInicio, dataFim } = req.query;

        // CHAMA MODEL
        const resultado = await relatoriosModel.buscarRelatorios(
            dataInicio,
            dataFim
        );

        // RETORNA DADOS
        res.status(200).json({
            sucesso: true,
            quantidade: resultado.length,
            dados: resultado
        });

    } catch (erro) {

        console.log(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar relatórios'
        });
    }
};