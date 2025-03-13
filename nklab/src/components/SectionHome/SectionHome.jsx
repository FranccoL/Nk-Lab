
import Slider from "react-slick";
import "./SectionHome.css";

function SectionHome() {
  const settings = {
    dots: true, // Mostrar pontos de navegação
    infinite: true, // Rotação infinita
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Exibir uma imagem por vez
    slidesToScroll: 1, // Mover uma imagem por vez
    autoplay: true, // Iniciar o carrossel automaticamente
    autoplaySpeed: 3000, // Definir tempo de exibição de cada imagem
  };

  return (
    <section className="section-home">
      <div className="container-home">
        {/* Carrossel no lugar do vídeo */}
        <div className="carousel-container">
          <Slider {...settings}>
            <div>
              <img
                src="/usg.svg"
                alt="Imagem 1"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="/hemo.svg"
                alt="Imagem 2"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="/analise.svg"
                alt="Imagem 3"
                className="carousel-image"
              />
            </div>
            {/* Adicione mais imagens conforme necessário */}
          </Slider>
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
