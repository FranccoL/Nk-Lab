import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useToken = () => {
  const { token } = useParams(); // Aqui você pega o CPF (token) da URL
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const handleGetTutorAndAnimal = async () => {
    try {
      setLoading(true);
      // Fazendo a requisição para pegar as informações do tutor e do animal
      const response = await axios.get(`/api/tokens/${token}`);
      setResponse(response.data); // Definindo o estado com as informações recebidas
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Token inválido ou não encontrado.");
    }
  };

  return {
    tutor: (response && response.tutor) || null,
    animal: (response && response.animal) || null,
    error,
    message,
    handleGetTutorAndAnimal,
    setMessage,
    token,
    loading,
  };
};
