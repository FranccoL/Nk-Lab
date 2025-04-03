import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="containerFooter d-flex flex-column">
      {/* Seção superior */}
      <div className="footerTop d-flex jc-space-between al-center">
        {/* Logo */}
        <div className="logoFooter">
          <Link to="/">
            <img src="LOGOnk.svg" alt="Logo NK Lab" className="logoFooterI" />
          </Link>
        </div>

        {/* Links importantes */}
        <nav className="footerNav d-flex">
          <Link to="/">Início</Link>
          <Link to="/exames">Exames</Link>
          <Link to="/sobrenos">Sobre Nós</Link>
          <Link to="/blog">Blog</Link>
        </nav>

        {/* Redes sociais */}
        <div className="iconsRede d-flex">
          <a href="https://wa.me/5511977259849" target="_blank" rel="noopener noreferrer">
            <img src="/WhatsAppNK.svg" className="iconFooter" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/nklabvet" target="_blank" rel="noopener noreferrer">
            <img src="/icons/Instagram.svg" className="iconFooter" alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Seção inferior com contato */}
      <div className="footerBottom d-flex jc-space-between al-center">
        <p>© 2025 NK Laboratório Veterinário - Todos os direitos reservados.</p>
        <p>Email: contato@nklab.com | Telefone: (11) 97725-9849</p>
      </div>
    </footer>
  );
}

export default Footer;
