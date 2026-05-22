require('dotenv').config();
const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuario.routes');
const autenticacaoRoutes = require('./routes/autenticacao.routes');

const relatoriosRoutes = require('./routes/relatorios.routes');

const errorMiddeleware = require('./middlewares/error.middleware');

const faltasRoutes = require('./routes/faltas.router');
const emailRoutes = require('./routes/email.routes')

const app = express();

app.use(cors());
app.use(express.json());




app.use('/falta', faltasRoutes);
app.use('/usuario' , usuarioRoutes);
app.use('/autenticacao', autenticacaoRoutes)
app.use('/email', emailRoutes);
app.use('/api', relatoriosRoutes);

app.use(errorMiddeleware);

module.exports = app;
