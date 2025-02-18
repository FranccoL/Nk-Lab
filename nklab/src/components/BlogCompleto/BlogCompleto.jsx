// BlogCompleto.jsx
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCompleto = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <div>Post não encontrado!</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

// Adicionando a validação de tipo para as props
BlogCompleto.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired, // posts deve ser um array com os objetos esperados e é obrigatório
};

export default BlogCompleto;
