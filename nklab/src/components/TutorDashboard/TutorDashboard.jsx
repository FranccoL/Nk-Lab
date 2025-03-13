import { useState } from 'react';
import axios from 'axios';

const TutorDashboard = () => {
  const [token, setToken] = useState(''); // Aqui o token será o CPF
  const [message, setMessage] = useState('');

  const handleDownloadExam = async () => {
    if (!token.trim()) {
      setMessage("Por favor, insira um token válido.");
      return;
    }

    try {
      const response = await axios.get(`/api/tokens/download-exam/${token}`, {
        responseType: "blob",
      });

      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement("a");
        a.href = url;
        a.download = `exame-${token}.pdf`;  // Nome do arquivo para download
        document.body.appendChild(a);
        a.click();
        a.remove();
        setMessage("Exame baixado com sucesso!");
      }
    } catch (error) {
      setMessage("Erro ao baixar o exame. Verifique se o token está correto.");
    }
  };

  return (
    <div>
      <h2>Painel do Tutor</h2>
      <input
        type="text"
        placeholder="Insira o token (CPF)"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={handleDownloadExam}>Baixar Exame</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TutorDashboard;
