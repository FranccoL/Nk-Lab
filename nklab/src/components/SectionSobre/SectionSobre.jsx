import "./SectionSobre.css";
import { Link } from "react-router-dom";

function SectionSobre() {
  return (
    <div className="sectionSobre">
      <div className="containerSobre d-flex jc-space-between">
        <div className="backSobre"></div>

        <img src="/LOGOnk.svg" alt="Logo NK" className="logoSobre" />
        <div className="sobreText d-flex jc-center flex-column">
          <h1>Sobre Nós</h1>
          <p>
            No NK Laboratório, acreditamos que um diagnóstico preciso faz toda a
            diferença na vida dos pets e no trabalho dos Médicos Veterinários.
            <br /> <br />
            Nosso compromisso é oferecer resultados confiáveis, desde a coleta
            até a entrega do laudo, com tecnologia de ponta e dedicação.
          </p>
          <Link to="/sobrenos" className="bttSobre">
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionSobre;
