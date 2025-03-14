import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [activeTab, setActiveTab] = useState("tutor");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate("/admin-dashboard");
  };

  const handleTutorLogin = (e) => {
    e.preventDefault();
    const token = cpf.replace(/\D/g, ""); // Remove pontos e traço antes de enviar
    navigate(`/tutor-dashboard/${token}`);
  };

  const formatCpf = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 11); // Remove não numéricos e limita a 11 caracteres
    return cleaned
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  };

  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form">
        <div className="login-tabs">
          <button
            className={activeTab === "tutor" ? "active" : ""}
            onClick={() => setActiveTab("tutor")}
          >
            Tutor
          </button>
          <button
            className={activeTab === "admin" ? "active" : ""}
            onClick={() => setActiveTab("admin")}
          >
            Admin
          </button>
        </div>

        {activeTab === "tutor" && (
          <form onSubmit={handleTutorLogin}>
            <input
              type="text"
              name="token"
              placeholder="Digite seu CPF, por gentileza."
              value={cpf}
              onChange={handleCpfChange}
              maxLength={14} // Considerando os pontos e o traço
              required
            />
            <button type="submit">Entrar</button>
          </form>
        )}

        {activeTab === "admin" && (
          <form onSubmit={handleAdminLogin}>
            <input type="text" placeholder="Usuário" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Entrar</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
