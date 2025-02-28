
import BlogInterno from '../components/BlogInterno/BlogInterno';


const BlogAdmin = ({ addPost }) => {
  console.log("addPost recebido no BlogAdmin:", addPost); // Verifica se a função está vindo corretamente

  return (
    <>
      
      <BlogInterno addPost={addPost} />
    </>
  );
};

export default BlogAdmin;
