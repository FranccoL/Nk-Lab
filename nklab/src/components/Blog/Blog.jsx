// Blog.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Blog = ({ posts }) => {
  return (
    <div className="blog-container">
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Link to={`/blog-completo/${post.id}`}>Leia mais...</Link>
        </div>
      ))}
    </div>
  );
};

// Validação das props (posts)
Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Blog;
