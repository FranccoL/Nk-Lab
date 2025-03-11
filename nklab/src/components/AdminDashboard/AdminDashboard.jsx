import { useState } from "react";
import axios from "axios";
import './AdminDashboard.css';
function AdminDashboard() {
  const [token, setToken] = useState("");
  const [tutor, setTutor] = useState("");
  const [animal, setAnimal] = useState("");
  const [idadeAno, setIdadeAno] = useState("");
  const [idadeMeses, setIdadeMeses] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");
  const [especie, setEspecie] = useState("");
  const [examFile, setExamFile] = useState(null);
  const [message, setMessage] = useState("");

  // Calcula a idade total em anos
  const idade = idadeAno + (idadeMeses / 12);

  // Função para gerar o token
  const handleGenerateToken = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/tokens/generate-token", {
        tutor,
        animal,
        idade, // Envia a idade total em anos
        raca,
        sexo,
        especie,
      });
      setToken(response.data.token);  // Token gerado
      setMessage(`Token gerado: ${response.data.token}`);
    } catch (error) {
      setMessage("Erro ao gerar token.");
    }
  };

  // Função para fazer o upload do exame
  const handleUploadExam = async (e) => {
    e.preventDefault();
    if (!token || !examFile) {
      setMessage("Preencha todos os campos");
      return;
    }

    const formData = new FormData();
    formData.append("exam", examFile);  // Aqui está o campo correto 'exam'

    try {
      await axios.post(`/api/tokens/upload-exam/${token}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Exame anexado com sucesso!");
    } catch (error) {
      setMessage("Erro ao anexar exame");
    }
  };

  return (
    <div>
      <h1>Painel do Administrador</h1>

      {/* Formulário para gerar token */}
      <form onSubmit={handleGenerateToken}>
        <input
          type="text"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
          placeholder="Tutor"
          required
        />
        <input
          type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Animal"
          required
        />
        <input
          type="number"
          value={idadeAno}
          onChange={(e) => setIdadeAno(e.target.value)}
          placeholder="Idade (anos)"
          required
        />
        <input
          type="number"
          value={idadeMeses}
          onChange={(e) => setIdadeMeses(e.target.value)}
          placeholder="Idade (meses)"
          required
        />
        <input
          type="text"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          placeholder="Raça"
          required
        />
        <input
          type="text"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          placeholder="Sexo"
          required
        />
        <input
          type="text"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
          placeholder="Espécie"
          required
        />
        <button type="submit">Gerar Token</button>
      </form>

      {/* Exibir o token gerado */}
      {token && (
        <div>
          <p><strong>Token gerado:</strong> {token}</p>
        </div>
      )}

      {/* Formulário para anexar o exame */}
      {token && (
        <form onSubmit={handleUploadExam}>
          <input
            type="file"
            onChange={(e) => setExamFile(e.target.files[0])}
            required
          />
          <button type="submit">Anexar Exame (PDF)</button>
        </form>
      )}

      {/* Exibir mensagens */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminDashboard;
