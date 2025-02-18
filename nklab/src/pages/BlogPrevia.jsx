// BlogPrevia.jsx
import Blog from '../components/Blog/Blog';
import Header from '../components/Header/Header';

const BlogPrevia = ({ posts }) => {
  console.log('Posts recebidos no BlogPrevia:', posts); // Verifique os posts que estão sendo passados
  if (!posts || posts.length === 0) {
    return <h2>Nenhum post encontrado</h2>;
  }

  return (
    <>
      <Header />
      <Blog posts={posts} />
    </>
  );
};

export default BlogPrevia;
