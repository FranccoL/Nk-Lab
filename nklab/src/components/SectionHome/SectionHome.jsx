import "./SectionHome.css";

function SectionHome() {
  return (
    <section className="section-home">
      <div className="container">
        <div className="blue-box">
          <img
            src="/microNK.svg"
            alt="Microscópio com pata"
            className="microscope-icon"
          />
        </div>
        
        <div className="content">
          <div className="logo-container">
            <img src="/LOGOnk.svg" alt="Logo" className="logo" />
            
          </div>
          <p className="subtitle">Diagnósticos de excelência para a saúde do seu pet!</p>
          <p className="description">
            Tecnologia de ponta e dedicação para um cuidado preciso. Descubra
            como podemos transformar a vida do seu melhor amigo.
          </p>
          <button className="contact-button">Fale Conosco</button>
        </div>
        
        <a
          href="https://wa.me/seu-numero" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-fly"
        >
          <img src="/WhatsAppNK.svg" alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </div>
    </section>
  );
}

export default SectionHome;
