import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer/Footer";

function DashboardT() {
  const { token } = useParams(); // Captura o token da URL
  const [tokenData, setTokenData] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // Adicionando mensagem de sucesso

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await axios.get(`/api/tokens/${token}`);
        setTokenData(response.data);
      } catch (err) {
        setError("Token inválido ou não encontrado.");
      }
    };

    fetchTokenData();
  }, [token]);

  const handleDownloadExam = async () => {
    try {
      const response = await axios.get(`/api/tokens/download-exam/${token}`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "exame.pdf"; // Nome do arquivo para download
      document.body.appendChild(a);
      a.click();
      setMessage("Exame baixado com sucesso!"); // Mensagem de sucesso
    } catch (err) {
      setError("Erro ao baixar o exame.");
    }
  };

  return (
    <>
      <h1>Painel do Tutor</h1>
      <p><strong>Token:</strong> {token}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>} {/* Mensagem de sucesso */}

      {tokenData ? (
        <>
          <p><strong>Tutor:</strong> {tokenData.tutor}</p>
          <p><strong>Animal:</strong> {tokenData.animal}</p>
          <p><strong>Idade:</strong> {tokenData.idade}</p>
          <p><strong>Raça:</strong> {tokenData.raca}</p>
          <p><strong>Sexo:</strong> {tokenData.sexo}</p>
          <p><strong>Espécie:</strong> {tokenData.especie}</p>

          <button onClick={handleDownloadExam}>Baixar Exame</button>
        </>
      ) : (
        <p>Carregando informações...</p>
      )}

      <Footer />
    </>
  );
}

export default DashboardT;
