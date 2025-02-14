import "./SectionSobre.css";

function SectionSobre() {
  return (
    <div className="sectionSobre">
        <div className="containerSobre d-flex jc-space-between">
            <div className="backSobre"></div>
            
            
            <img src="/LOGOnk.svg" alt="" className="logoSobre"/>
            <div className="sobreText d-flex jc-center flex-column">
            <h1>Sobre Nos</h1>
            <p>No NK Laboratório, acreditamos que um diagnóstico preciso faz toda a diferença na vida dos pets e no trabalho dos Médicos Veterinários. Nosso compromisso é oferecer resultados confiáveis, desde a coleta até a entrega do laudo, com tecnologia de ponta e dedicação.</p>
            <button className="bttSobre" type="button">Saiba Mais</button>
            </div>
            </div>
        </div>
    
   
  );
}

export default SectionSobre;
