import "./SectionHome.css";

function SectionHome() {
  return (
    <section className="section-home">
      <div className="container-home">
        {/* Vídeo no lugar do carrossel */}
        <div className="video-container">
          <video autoPlay loop muted className="home-video">
            <source src="/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>

        {/* Conteúdo do lado direito */}
        <div className="content">
          <div className="logo-container">
            <img src="/LOGOnk.svg" alt="Logo" className="logo" />
          </div>
          <h1 className="titleHome">Exames veterinários de excelência</h1>
          <p className="subtitleHome">Diagnósticos de ponta para a saúde do seu pet!</p>
          <p className="descriptionHome">
            Tecnologia de ponta e dedicação para um cuidado preciso. Descubra
            como podemos transformar a vida do seu melhor amigo.
          </p>
          <button className="contact-button">Fale Conosco</button>
        </div>
      </div>
    </section>
  );
}

export default SectionHome;