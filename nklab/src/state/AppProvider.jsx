import { createContext, useState, useEffect } from "react";

const initialState = {
  posts: [],
  addPost: () => {},
  token: null,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  // Carrega os posts do localStorage ao iniciar
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // Salva os posts no localStorage sempre que `posts` for atualizado
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // Adiciona um novo post à lista e salva no localStorage
  const addPost = (newPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts, newPost];
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

  return (
    <AppContext.Provider value={{ posts, setPosts, addPost }}>
      {children}
    </AppContext.Provider>
  );
};
