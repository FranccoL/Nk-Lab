import "./SectionHome.css";

function SectionHome() {
  return (
    <section className="section-home">
      <div className="container-home">
        {/* Vídeo do lado esquerdo */}
        <div className="video-container">
          <video
            className="side-video"
            src="/video.mp4" // Substitua pelo caminho do seu vídeo
            alt="Vídeo ilustrativo"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Conteúdo do lado direito */}
        <div className="content">
          <div className="logo-container">
            <img src="/LOGOnk.svg" alt="Logo" className="logo" />
          </div>
          <h1 className="title">Cuidados veterinários com excelência</h1>
          <p className="subtitle">Diagnósticos de ponta para a saúde do seu pet!</p>
          <p className="description">
            Tecnologia de ponta e dedicação para um cuidado preciso. Descubra
            como podemos transformar a vida do seu melhor amigo.
          </p>
          <button className="contact-button">Fale Conosco</button>
        </div>
      </div>

      {/* Botão do WhatsApp */}
      <a
        href="https://wa.me/seu-numero"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fly"
      >
        <img src="/WhatsAppNK.svg" alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </section>
  );
}

export default SectionHome;
