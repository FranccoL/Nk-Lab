import Slider from "react-slick";
import "./ExamesPage.css";

const exams = [
  { name: "Bioquímica", icon: "/icons/Laboratory.svg", description: "Avaliam o funcionamento de órgãos..." },
  { name: "Hematologia", icon: "/icons/Heart.svg", description: "Inclui exames como o hemograma..." },
  { name: "Ecocardiograma", icon: "/icons/ECG.svg", description: "Exame essencial para avaliar..." },
  { name: "Radiografia", icon: "/icons/X-ray.svg", description: "Fundamental para a investigação..." },
  { name: "Eletrocardiograma", icon: "/icons/Heart with Pulse.svg", description: "Detecta arritmias..." },
  { name: "Ultrassom", icon: "/icons/Ultrasound.svg", description: "Permite uma análise detalhada..." }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function ExamesPage() {
  return (
    <div className="exames-page">
      <div className="exames-header">
        <h2>Exames</h2>
      </div>

      <div className="exames-container">
        <img src="/grafico.svg" alt="" className="exames-logo" />
        <div className="exames-text">
          <h1>Exames laboratoriais de alta precisão!</h1>
          <p>Nosso compromisso é entregar diagnósticos confiáveis com tecnologia e os altos padrões de qualidade. Destacamos nosso hemograma de excelência, realizado conforme os critérios da American Society for Veterinary Clinical Pathology (ASVCP) e com colorações de alta qualidade, garantindo uma análise detalhada e precisa. <br />
          <br />Aqui, cada exame é conduzido com rigor técnico e dedicação, porque sabemos que um diagnóstico certeiro faz toda a diferença no tratamento do seu melhor amigo!</p>
        </div>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          <div><img src="/usg.svg" alt="Imagem 1" className="carousel-image" /></div>
          <div><img src="/hemo.svg" alt="Imagem 2" className="carousel-image" /></div>
          <div><img src="/analise.svg" alt="Imagem 3" className="carousel-image" /></div>
        </Slider>
      </div>
      <section className="exames-section">
        <h2 className="exames-title">Conheça nossos exames</h2>
        <div className="exames-grid">
          {exams.map((exam, index) => (
            <div key={index} className="exames-card">
              <div className="exames-icon">
                <img src={exam.icon} alt={exam.name} />
              </div>
              <h3>{exam.name}</h3>
              <p>{exam.description}</p>
              <button className="exames-button">Entre em contato</button>
            </div>
          ))}
        </div>
      </section>

  
      
    </div>
  );
}

export default ExamesPage;
