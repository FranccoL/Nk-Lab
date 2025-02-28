import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Adicione useNavigate
import './BlogCompleto.css';

const BlogCompleto = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      // 🔹 Primeiro, verifica no localStorage
      const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const localPost = savedPosts.find((p) => p._id === id);

      if (localPost) {
        console.log("Post carregado do localStorage:", localPost);
        setPost(localPost);
        setLoading(false);
        return;
      }

      // 🔹 Se não encontrou no localStorage, busca no backend
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${id}`);

        if (!response.ok) {
          throw new Error(`Erro ao buscar post: ${response.status}`);
        }

        const data = await response.json();
        console.log("Post carregado do backend:", data);
        setPost(data);
      } catch (err) {
        console.error("Erro ao carregar o post:", err);
        setError("Erro ao carregar o post. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatContent = (content) => {
    return content.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  if (loading) return <p>Carregando post...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div className="blog-completo-container">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.description}</p>
      <div>{formatContent(post.content)}</div>

      <button 
        className="back-link" 
        onClick={() => navigate('/blog')} // Ao clicar, navega para o blog
      >
        Voltar para o Blog
      </button>
    </div>
  );
};

export default BlogCompleto;
