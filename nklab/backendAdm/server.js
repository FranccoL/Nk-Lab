// backendAdm/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const tokenRoutes = require('./routes/tokens'); // Certifique-se de que o caminho está correto
require('dotenv').config(); // Para carregar as variáveis de ambiente

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado ao MongoDB");
})
.catch((err) => {
  console.error("Erro ao conectar ao MongoDB:", err);
});

// Usar as rotas para tokens
app.use('/api/tokens', tokenRoutes);

// Middleware de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro interno no servidor');
});

// Porta para o servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
