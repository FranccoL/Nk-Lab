import "./ExamesPage.css";

const exams = [
    { name: "Bioquímica", icon: "/icons/Laboratory.svg", description:"Avaliam o funcionamento de órgãos como fígado e rins, auxiliando no diagnóstico de doenças metabólicas e sistêmicas." },
    { name: "Hematologia", icon: "/icons/Heart.svg", description:"Inclui exames como o hemograma, que analisam células do sangue e auxiliam no diagnóstico de infecções, anemias e distúrbios imunológicos." },
    { name: "Ecocardiograma", icon: "/icons/ECG.svg", description:"Exame essencial para avaliar a estrutura e o funcionamento do coração, identificando cardiopatias precocemente." },
    { name: "Radiografia", icon: "/icons/X-ray.svg", description:"Fundamental para a investigação de fraturas, problemas respiratórios e alterações em órgãos internos." },
    { name: "Eletrocardiograma", icon: "/icons/Heart with Pulse.svg", description:"Detecta arritmias e outras alterações cardíacas, auxiliando no monitoramento e tratamento de doenças cardiovasculares." },
    { name: "Ultrassom", icon: "/icons/Ultrasound.svg", description:"Permite uma análise detalhada de órgãos internos, auxiliando no diagnóstico de tumores, gestação e alterações gastrointestinais." }
];

function ExamesPage() {
  return (
    <div className="exames-page">
      
      <div className="exames-header">
        <h2>Exames</h2>
      </div>

      <div className="exames-container d-flex jc-space-between">
        <img src="/grafico.svg" alt="" className="exames-logo"/>
        <div className="exames-text d-flex jc-center flex-column">
          <h1>Exames laboratoriais de alta precisão para a saúde do seu pet!</h1>
          <p>Nosso compromisso é entregar diagnósticos confiáveis com tecnologia e os altos padrões de qualidade. Destacamos nosso hemograma de excelência, realizado conforme os critérios da American Society for Veterinary Clinical Pathology (ASVCP) e com colorações de alta qualidade, garantindo uma análise detalhada e precisa. <br />
          <br />Aqui, cada exame é conduzido com rigor técnico e dedicação, porque sabemos que um diagnóstico certeiro faz toda a diferença no tratamento do seu animal!</p>
        </div>
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
