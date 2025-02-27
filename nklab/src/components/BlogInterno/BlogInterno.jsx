import { useState, useEffect } from 'react';
import './BlogInterno.css';

const BlogInterno = ({ addPost }) => {
  const [posts, setPosts] = useState([]); // 🔥 Estado para armazenar os posts
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(''); // URL da imagem ou caminho do arquivo
  const [error, setError] = useState('');
  const [imageFile, setImageFile] = useState(null); // Estado para armazenar o arquivo de imagem

  // ✅ Buscar posts ao carregar o componente
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      if (!response.ok) throw new Error('Erro ao buscar posts.');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
      setError('Erro ao buscar posts.');
    }
  };

  useEffect(() => {
    fetchPosts(); // Chama fetchPosts ao carregar o componente
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !content || (!image && !imageFile)) {
      setError('Todos os campos são obrigatórios!');
      return;
    }

    // Se houver um arquivo de imagem, precisamos convertê-lo para URL
    let imageUrl = image;
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile); // Agora estamos usando imageFile corretamente

      try {
        const uploadResponse = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Erro ao enviar a imagem.');
        }

        const uploadData = await uploadResponse.json();
        imageUrl = uploadData.imageUrl; // Obtendo a URL da imagem após o upload
      } catch (err) {
        setError('Erro ao enviar a imagem.');
        return;
      }
    }

    const newPost = { title, description, content, image: imageUrl };

    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o post.');
      }

      const createdPost = await response.json();
      setPosts((prevPosts) => {
        const updatedPosts = [...prevPosts, createdPost];
        // Atualiza o localStorage após o estado ser atualizado
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        return updatedPosts;
      });

      alert('Post criado com sucesso!');
      setTitle('');
      setDescription('');
      setContent('');
      setImage('');
      setImageFile(null);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Erro ao criar o post. Tente novamente.');
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este post?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o post.');
      }

      alert('Post excluído com sucesso!');

      setPosts((prevPosts) => {
        const updatedPosts = prevPosts.filter((post) => post._id !== id);
        // Atualiza o localStorage após o estado ser atualizado
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        return updatedPosts;
      });
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
      alert('Erro ao excluir o post. Tente novamente.');
    }
  };

  return (
    <div className="blog-interno">
      <h3>Criar Novo Post</h3>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label>Conteúdo Completo</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea-field"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Imagem (URL ou Upload)</label>
          <input
            type="text"
            placeholder="URL da imagem"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="input-field"
          />
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Criar Post</button>
      </form>

      <h3>Lista de Posts</h3>
      {posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={() => handleDeletePost(post._id)} className="delete-button">
              Excluir
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogInterno;
