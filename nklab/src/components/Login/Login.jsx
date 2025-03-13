import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [activeTab, setActiveTab] = useState("tutor");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate("/admin-dashboard");
  };

  const handleTutorLogin = (e) => {
    e.preventDefault();
    const token = e.target.elements.token.value;
    navigate(`/tutor-dashboard/${token}`); // Redireciona com o token na URL
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
                <input type="text" name="token" placeholder="Digite seu CPF, por gentileza." required />
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
