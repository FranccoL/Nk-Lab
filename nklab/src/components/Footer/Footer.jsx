import "./Footer.css";
import { Link } from "react-router-dom";




function Footer() {
  return (
    <div className="containerFooter d-flex jc-space-between al-center">
      {/* Logo alinhada à esquerda */}
      <div className="logoFooter">
        <img src="LOGOnk.svg" alt="Logo NK Lab" className="logoFooterI" />
      </div>

      {/* Ícones e botão alinhados à direita */}
      <div className="rightSection d-flex flex-column al-end">
        <div className="iconsRede d-flex gap-3">
          <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
            <img src="/WhatsAppNK.svg" className="iconFooter" alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/seulinkedin" target="_blank" rel="noopener noreferrer">
            <img src="/icons/LinkedInNK.svg" className="iconFooter" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer">
            <img src="/icons/Instagram.svg" className="iconFooter" alt="Instagram" />
          </a>
        </div>

        {/* Botão abaixo das imagens */}
        <Link to="/blog-interno" className="buttonFooter">Área Admin</Link>

      </div>
    </div>
  );
}

export default Footer;
