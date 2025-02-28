const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post');

const router = express.Router();

// ✅ Rota para listar todos os posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error('Erro ao buscar os posts:', err);
    res.status(500).json({ message: 'Erro ao buscar posts', error: err.message });
  }
});

// ✅ Rota para criar um post
router.post('/', async (req, res) => {
  try {
    const { title, description, content, image } = req.body;
    const newPost = new Post({ title, description, content, image });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error('Erro ao criar o post:', err);
    res.status(400).json({ message: 'Erro ao criar o post', error: err.message });
  }
});

// ✅ Rota para buscar um post pelo ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // 🔹 Verifica se o ID é um ObjectId válido antes de buscar no MongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }

    res.json(post);
  } catch (err) {
    console.error('Erro ao buscar o post:', err);
    res.status(500).json({ message: 'Erro ao buscar o post', error: err.message });
  }
});


// ✅ Rota para deletar um post pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // 🔹 Verifica se o ID é um ObjectId válido antes de buscar no MongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post não encontrado' });
    }

    res.json({ message: 'Post excluído com sucesso' });
  } catch (err) {
    console.error('Erro ao excluir o post:', err);
    res.status(500).json({ message: 'Erro ao excluir o post', error: err.message });
  }
});


module.exports = router;
