const express = require('express');
const multer = require('multer');
const path = require('path');
const TokenModel = require('../models/Token'); // Certifique-se de que o caminho está correto
const router = express.Router();

// Configuração do Multer para armazenar o arquivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Pasta para armazenar os arquivos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo com timestamp
  },
});

// Verificar se o arquivo é um PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true); // Aceitar arquivo PDF
  } else {
    cb(new Error('Arquivo não permitido!'), false); // Rejeitar outros tipos de arquivo
  }
};

// Criar o middleware do multer
const upload = multer({ storage, fileFilter });

// Rota para gerar o token (agora será o CPF do tutor)
router.post('/generate-token', async (req, res) => {
  const { cpf, tutor, animal, idade, raca, sexo, especie } = req.body;

  // Verificar se todos os campos estão preenchidos, incluindo o CPF
  if (!cpf || !tutor || !animal || !idade || !raca || !sexo || !especie) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // Converter a idade para um número (se for uma string como "3 anos")
  let idadeConvertida = idade;

  // Se a idade for uma string com anos (ex: "3 anos"), extraímos o número
  if (idade && typeof idade === 'string' && idade.includes('anos')) {
    idadeConvertida = parseInt(idade.replace(/\D/g, ''), 10); // Remove qualquer coisa que não seja número
  }

  // Verificar se a conversão foi bem-sucedida
  if (isNaN(idadeConvertida)) {
    return res.status(400).json({ message: 'A idade fornecida é inválida.' });
  }

  try {
    const newToken = new TokenModel({
      token: cpf, // Usar o CPF como o token
      tutor,
      animal,
      idade: idadeConvertida, // Armazenar a idade como número
      raca,
      sexo,
      especie,
    });

    // Salvar o token no banco de dados
    await newToken.save();
    res.status(201).json({ token: cpf, message: 'Token gerado com sucesso!' });
  } catch (error) {
    console.error("Erro ao gerar token:", error);
    res.status(500).json({ message: 'Erro ao gerar o token.', error: error.message });
  }
});

// Rota para upload do exame
router.post('/upload-exam/:token', upload.single('exam'), async (req, res) => {
  const { token } = req.params;

  // Verificar se o arquivo foi enviado
  if (!req.file) {
    return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
  }

  try {
    const tokenData = await TokenModel.findOneAndUpdate(
      { token },
      { examPath: req.file.path },
      { new: true }
    );

    if (!tokenData) {
      return res.status(404).json({ message: 'Token não encontrado.' });
    }

    res.status(200).json({ message: 'Exame anexado com sucesso!', file: req.file });
  } catch (error) {
    console.error("Erro ao anexar exame:", error);
    res.status(500).json({ message: 'Erro ao salvar o exame.' });
  }
});

// Rota para buscar informações do token
router.get('/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const tokenData = await TokenModel.findOne({ token });

    if (!tokenData) {
      return res.status(404).json({ message: 'Token não encontrado.' });
    }

    res.json(tokenData); // Enviar as informações do token
  } catch (error) {
    console.error("Erro ao buscar token:", error);
    res.status(500).json({ message: 'Erro ao buscar informações do token.' });
  }
});

// Rota para download do exame
router.get('/download-exam/:token', async (req, res) => {
  const { token } = req.params;

  try {
    // Buscar o token no banco de dados para obter o caminho do exame
    const tokenData = await TokenModel.findOne({ token });

    if (!tokenData || !tokenData.examPath) {
      return res.status(404).json({ message: 'Exame não encontrado para esse token.' });
    }

    // Enviar o arquivo PDF
    res.download(tokenData.examPath, (err) => {
      if (err) {
        console.error('Erro ao baixar o exame:', err);
        return res.status(500).json({ message: 'Erro ao baixar o exame.' });
      }
    });
  } catch (error) {
    console.error("Erro ao buscar exame:", error);
    res.status(500).json({ message: 'Erro ao buscar exame.' });
  }
});

module.exports = router;
