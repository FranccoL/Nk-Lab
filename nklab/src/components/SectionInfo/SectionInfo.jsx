import "./SectionInfo.css";
import { useEffect } from "react";

function SectionInfo() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Mantém a animação reaplicável
          }
        });
      },
      { threshold: 0.2 } // Quando 20% da div aparece na tela
    );

    const bgLinear = document.querySelector(".backgrLinear");
    if (bgLinear) observer.observe(bgLinear);

    return () => {
      if (bgLinear) observer.unobserve(bgLinear); // Evita bugs
    };
  }, []);

  return (
    <div className="sectionInfo">
      <div className="containerInfo d-flex jc-space-between">
        <div className="backSmall"></div>
        <div className="backgrLinear d-flex jc-center flex-column">
          <img src="/diagnosttic.svg" alt="Diagnóstico" className="imgVet" />
          <h1>
            Resultados rápidos e precisos, conte com a experiência de quem realmente entende.
          </h1>
          <img src="/iconsInfo.svg" alt="Ícones" className="imgIcons" />
        </div>
      </div>
    </div>
  );
}

export default SectionInfo;
