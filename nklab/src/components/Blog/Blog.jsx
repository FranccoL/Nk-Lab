import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]); // Estado para armazenar os posts
  const [loading, setLoading] = useState(true); // Estado para saber se está carregando
  const [error, setError] = useState(null); // Estado para erro

  // Exemplo de posts com dados fixos que você pode editar (caso não haja resposta da API)
  const customPosts = [
    {
      _id: '1',
      title: 'Principais Cuidados para uma "Saúde de Ferro" no seu Pet',
      description:
        'Garantir uma vida saudável e longa para os nossos amigos de quatro patas requer atenção a vários aspectos do seu bem-estar físico e emocional.',
      image: '/dogBlog.svg', 
    },
    {
      _id: '2',
      title: 'Como Escolher a Alimentação Ideal para seu Animal',
      description:
        'Uma alimentação balanceada é essencial para a saúde do seu pet. Entenda os melhores tipos de ração para cada fase da vida.',
      image: '/dogBlog.svg'
    }
  ];

  // UseEffect para carregar posts do localStorage e fazer a requisição da API
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
      setLoading(false); // Dados já carregados do localStorage
    } else {
      fetchPosts(); // Se não houver dados, busca na API
    }
  }, []);

  // Fetch posts da API com validação
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');

      if (!response.ok) {
        throw new Error(`Erro ao carregar os posts: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Resposta da API não é um array válido.');
      }

      setPosts(data);
      localStorage.setItem('posts', JSON.stringify(data)); // Armazena no localStorage
    } catch (err) {
      console.error('Erro ao carregar os posts:', err); 
      setError('Erro ao conectar com a API');
    } finally {
      setLoading(false);
    }
  };

  // Renderização condicional com posts carregados
  if (loading) return <div>Carregando posts...</div>;
  if (error) return <div>{error}</div>;

  const postsToRender = posts.length > 0 ? posts : customPosts;

  return (
    <div className="blog-container">
      <div className="exames-header">
        <h2>Sobre Nós</h2>
      </div>
      {postsToRender.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        postsToRender.map((post, index) => {
          return (
            <div key={post._id || index} className="blog-post">
              <img 
                src={post.image && post.image !== "URL_da_imagem.jpg" ? post.image : '/dogBlog.svg'} 
                alt={post.title || 'Imagem do post'} 
              />
              <h2>{post.title || 'Sem Título'}</h2> 
              <p>{post.description || 'Sem descrição disponível'}</p> 
              <Link to={post._id ? `/blog-completo/${post._id}` : '#'}>
                Leia mais...
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blog;
