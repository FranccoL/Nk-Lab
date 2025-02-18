// BlogInterno.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const BlogInterno = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, description, content, image, id: Date.now() };
    addPost(newPost); // Chama a função para adicionar o post
    setTitle('');
    setDescription('');
    setContent('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Conteúdo"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Imagem (URL)"
      />
      <button type="submit">Criar Post</button>
    </form>
  );
};

// Adicionando a validação de tipo para as props
BlogInterno.propTypes = {
  addPost: PropTypes.func.isRequired, // addPost deve ser uma função obrigatória
};

export default BlogInterno;
