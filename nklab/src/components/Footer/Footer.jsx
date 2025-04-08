import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="containerFooter d-flex flex-column">
      
      <div className="footerTop d-flex jc-space-between al-center">
        <div className="logoFooter">
          <Link to="/">
            <img src="LOGOnk.svg" alt="Logo NK Lab" className="logoFooterI" />
          </Link>
        </div>

       
        <nav className="footerNav d-flex">
          <Link to="/">Início</Link>
          <Link to="/exames">Exames</Link>
          <Link to="/sobrenos">Sobre Nós</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        
        <div className="iconsRede d-flex">
          <a href="https://wa.me/5511977259849" target="_blank" rel="noopener noreferrer">
            <img src="/WhatsAppNK.svg" className="iconFooter" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/nklabvet" target="_blank" rel="noopener noreferrer">
            <img src="/icons/Instagram.svg" className="iconFooter" alt="Instagram" />
          </a>
        </div>
      </div>

      
      <div className="footerBottom d-flex jc-space-between al-center">
        <p>© 2025 NK Laboratório Veterinário - Todos os direitos reservados.</p>
        <p>Email: nklabvet@gmail.com | Telefone: (11) 97725-9849</p>
      </div>
    </footer>
  );
}

export default Footer;
