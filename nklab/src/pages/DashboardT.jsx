import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DashboardT() {
  const { token } = useParams(); // Aqui você pega o CPF (token) da URL
  const [tokenData, setTokenData] = useState(null); 
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        // Fazendo a requisição para pegar as informações do tutor e do animal
        const response = await axios.get(`/api/tokens/${token}`);
        setTokenData(response.data); // Definindo o estado com as informações recebidas
      } catch (err) {
        setError("Token inválido ou não encontrado.");
      }
    };

    fetchTokenData();
  }, [token]);

  const handleDownloadExam = (examPath) => {
    const link = document.createElement("a");
    link.href = examPath;
    link.download = "exame.pdf";
    link.click();
    setMessage("Exame baixado com sucesso!");
  };

  return (
    <div>
      <h1>Painel do Tutor</h1>
      <p><strong>Token (CPF):</strong> {token}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {tokenData && (
        <div>
          <h2>Informações do Tutor</h2>
          <p><strong>Nome:</strong> {tokenData.tutor}</p>
          <p><strong>CPF:</strong> {tokenData.token}</p>
          
          <h2>Informações do Animal</h2>
          <p><strong>Nome:</strong> {tokenData.animal}</p>
          <p><strong>Idade:</strong> {tokenData.idade} meses</p>
          <p><strong>Raça:</strong> {tokenData.raca}</p>
          <p><strong>Sexo:</strong> {tokenData.sexo}</p>
          <p><strong>Espécie:</strong> {tokenData.especie}</p>

          <h2>Exames</h2>
          {/* Verificar se existem exames */}
          {tokenData.examPath && (
            <ul>
              <li>
                <strong>Exame</strong>
                <button onClick={() => handleDownloadExam(tokenData.examPath)}>
                  Baixar Exame
                </button>
              </li>
            </ul>
          )}
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default DashboardT;
