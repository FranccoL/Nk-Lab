import { useState } from "react";
import axios from "axios";
import './AdminDashboard.css';

function AdminDashboard() {
  const [cpf, setCpf] = useState(""); // Alteração: CPF ao invés de token
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

  // Função para gerar o token usando o CPF
  const handleGenerateToken = async (e) => {
    e.preventDefault();
    if (!cpf) {
      setMessage("Por favor, insira o CPF do tutor.");
      return;
    }
    try {
      // Envia o CPF como token
      const response = await axios.post("/api/tokens/generate-token", {
        cpf,  // Envia o CPF como o token
        tutor,
        animal,
        idade, // Envia a idade total em anos
        raca,
        sexo,
        especie,
      });
      setMessage(`Token gerado com o CPF: ${cpf}`);
    } catch (error) {
      setMessage("Erro ao gerar token.");
    }
  };

  // Função para fazer o upload do exame
  const handleUploadExam = async (e) => {
    e.preventDefault();
    if (!cpf || !examFile) {  // Verifica se o CPF e o exame foram fornecidos
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
    <div>
      <h1>Painel do Administrador</h1>

      {/* Formulário para gerar token */}
      <form onSubmit={handleGenerateToken}>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF do Tutor"
          required
        />
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

      {/* Exibir a mensagem com o CPF */}
      {cpf && (
        <div>
          <p><strong>Token gerado com CPF:</strong> {cpf}</p>
        </div>
      )}

      {/* Formulário para anexar o exame */}
      {cpf && (
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
