const mongoose = require('mongoose');

// Definindo o schema para os posts
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },       // Título do post
  description: { type: String, required: true }, // Descrição do post
  content: { type: String, required: true },     // Conteúdo completo do post
  image: { type: String, required: true },       // URL da imagem
});

// Criando o modelo 'Post' com base no schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;  // Exportando o modelo para ser utilizado em outras partes da aplicação
