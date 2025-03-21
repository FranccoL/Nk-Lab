import { useEffect } from "react";
import { useToken } from "../hooks/useToken";

function DashboardT() {
  const {
    token,
    tutor,
    animal,
    error,
    message,
    handleGetTutorAndAnimal,
    setMessage,
    loading,
  } = useToken();

  useEffect(() => {
    handleGetTutorAndAnimal();
  }, [token]);

  const handleDownloadExam = (examPath) => {
    const link = document.createElement("a");
    link.href = examPath;
    link.download = "exame.pdf";
    link.click();
    setMessage("Exame baixado com sucesso!");
  };

  const shouldShowInfos = tutor && animal && !loading && !error;

  return (
    <div>
      <h1>Painel do Tutor</h1>

      <p>
        <strong>Token (CPF):</strong> {token}
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shouldShowInfos && (
        <div>
          <h2>Informações do Tutor</h2>
          <p>
            <strong>Nome:</strong> {tutor.name}
          </p>
          <p>
            <strong>CPF:</strong> {tutor.cpf}
          </p>

          <h2>Informações do Animal</h2>
          <p>
            <strong>Nome:</strong> {animal.name}
          </p>
          <p>
            <strong>Idade:</strong> {animal.idade} meses
          </p>
          <p>
            <strong>Raça:</strong> {animal.raca}
          </p>
          <p>
            <strong>Sexo:</strong> {animal.sexo}
          </p>
          <p>
            <strong>Espécie:</strong> {animal.especie}
          </p>

          <h2>Exames</h2>
          {/* Verificar se existem exames */}
          {animal.examPath && (
            <ul>
              <li>
                <strong>Exame</strong>
                <button onClick={() => handleDownloadExam(animal.examPath)}>
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
