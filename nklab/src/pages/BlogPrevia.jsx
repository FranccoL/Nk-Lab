import { useEffect, useState } from 'react';
import Blog from '../components/Blog/Blog';
import Header from '../components/Header/Header';

const BlogPrevia = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')  // Corrigir para '/api/posts'
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Erro ao carregar posts:', err));
  }, []);

  return (
    <>
      <Header />
      {posts.length > 0 ? <Blog posts={posts} /> : <h2>Nenhum post encontrado</h2>}
    </>
  );
};

export default BlogPrevia;
