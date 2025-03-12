import { useState } from "react";
import axios from "axios";
import './AdminDashboard.css';

function AdminDashboard() {
  const [cpf, setCpf] = useState("");
  const [tutor, setTutor] = useState("");
  const [animal, setAnimal] = useState("");
  const [idadeAno, setIdadeAno] = useState("");
  const [idadeMeses, setIdadeMeses] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");
  const [especie, setEspecie] = useState("");
  const [examFile, setExamFile] = useState(null);
  const [message, setMessage] = useState("");

  const idade = idadeAno + (idadeMeses / 12);

  const handleGenerateToken = async (e) => {
    e.preventDefault();
    if (!cpf) {
      setMessage("Por favor, insira o CPF do tutor.");
      return;
    }
    try {
      const response = await axios.post("/api/tokens/generate-token", {
        cpf,
        tutor,
        animal,
        idade,
        raca,
        sexo,
        especie,
      });
      setMessage(`Token gerado com o CPF: ${cpf}`);
    } catch (error) {
      setMessage("Erro ao gerar token.");
    }
  };

  const handleUploadExam = async (e) => {
    e.preventDefault();
    if (!cpf || !examFile) {
      setMessage("Preencha todos os campos");
      return;
    }

    const formData = new FormData();
    formData.append("exam", examFile);

    try {
      await axios.post(`/api/tokens/upload-exam/${cpf}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Exame anexado com sucesso!");
    } catch (error) {
      setMessage("Erro ao anexar exame");
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Painel do Administrador</h1>

      {/* Formulário para gerar token */}
      <form onSubmit={handleGenerateToken} className="form-container">
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF do Tutor"
          required
          className="input-field"
        />
        <input
          type="text"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
          placeholder="Tutor"
          required
          className="input-field"
        />
        <input
          type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Animal"
          required
          className="input-field"
        />
        <input
          type="number"
          value={idadeAno}
          onChange={(e) => setIdadeAno(e.target.value)}
          placeholder="Idade (anos)"
          required
          className="input-field"
        />
        <input
          type="number"
          value={idadeMeses}
          onChange={(e) => setIdadeMeses(e.target.value)}
          placeholder="Idade (meses)"
          required
          className="input-field"
        />
        <input
          type="text"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          placeholder="Raça"
          required
          className="input-field"
        />
        <input
          type="text"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          placeholder="Sexo"
          required
          className="input-field"
        />
        <input
          type="text"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
          placeholder="Espécie"
          required
          className="input-field"
        />
        <button type="submit" className="input-field">Gerar Token</button>
      </form>

      {/* Exibir o CPF e mensagens */}
      {cpf && (
        <div className="message">
          <p><strong>Token gerado com CPF:</strong> {cpf}</p>
        </div>
      )}

      {/* Formulário para anexar o exame */}
      {cpf && (
        <form onSubmit={handleUploadExam} className="form-container">
          <input
            type="file"
            onChange={(e) => setExamFile(e.target.files[0])}
            required
            className="input-field"
          />
          <button type="submit" className="input-field">Anexar Exame (PDF)</button>
        </form>
      )}

      {/* Mensagem de erro ou sucesso */}
      {message && <p className={message.includes("sucesso") ? "success" : ""}>{message}</p>}
    </div>
  );
}

export default AdminDashboard;
