import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Inicio from './pages/Inicio';
import Exames from './pages/Exames';
import SobreNos from './pages/SobreNos';
import BlogPrevia from './pages/BlogPrevia';
import BlogPostCompleto from './pages/BlogPostCompleto';
import BlogAdmin from './pages/BlogAdmin';

function App() {
  // Carrega os posts do localStorage ao iniciar
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // Salva os posts no localStorage sempre que `posts` for atualizado
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Adiciona um novo post à lista e salva no localStorage
  const addPost = (newPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts, newPost];
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/blog" element={<BlogPrevia posts={posts} />} />
        <Route path="/blog-completo/:id" element={<BlogPostCompleto posts={posts} />} />
        <Route path="/blog-interno" element={<BlogAdmin addPost={addPost} />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
