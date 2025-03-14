import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DashboardT() {
  const { token } = useParams(); 
  const [tokenData, setTokenData] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

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
      <p><strong>Token:</strong> {token}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {tokenData && (
        <div>
          <h2>Exames</h2>
          <ul>
            {tokenData.exams.map((exam, index) => (
              <li key={index}>
                <strong>{exam.title}</strong> - {exam.date}
                <button onClick={() => handleDownloadExam(exam.examPath)}>
                  Baixar Exame
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default DashboardT;
