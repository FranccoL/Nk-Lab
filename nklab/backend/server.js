const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer'); // Importando o multer
const path = require('path'); // Para manipulação de caminhos de arquivos

const postsRoutes = require('./routes/posts'); // Importando as rotas de posts

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Configuração do multer para upload de imagens
const upload = multer({
  dest: 'uploads/', // Pasta onde as imagens serão salvas
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      return cb(new Error('Tipo de arquivo não permitido'));
    }
    cb(null, true);
  }
});

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB', err));

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => res.send('API funcionando!'));

// Usando as rotas de posts no servidor
app.use('/api/posts', postsRoutes); // Prefixando as rotas com /api/posts

// Rota para upload de imagens
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'Nenhum arquivo enviado' });
  }

  // Gerando a URL da imagem
  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

// Servir arquivos estáticos da pasta 'uploads' para acesso público
app.use('/uploads', express.static('uploads'));

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
