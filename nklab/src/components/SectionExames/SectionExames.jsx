import "./SectionExames.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SectionExames() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const examCards = document.querySelectorAll(".exam-card");
    examCards.forEach((card) => observer.observe(card));

    return () => {
      examCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="section-exams">
      <h2 className="section-title">Confira nossos exames</h2>
      <div className="exams-grid">
        <Link to="/exames#exames-section" className="exam-card left">
          <div className="exam-icon">
            <img src="/icons/Laboratory.svg" alt="Bioquímica" />
          </div>
          <p>Bioquímica</p>
        </Link>
        <Link to="/exames#exames-section" className="exam-card right">
          <div className="exam-icon">
            <img src="/icons/Heart.svg" alt="Hematologia" />
          </div>
          <p>Hematologia</p>
        </Link>
        <Link to="/exames#exames-section" className="exam-card left">
          <div className="exam-icon">
            <img src="/icons/ECG.svg" alt="Ecocardiograma" />
          </div>
          <p>Ecocardiograma</p>
        </Link>
        <Link to="/exames#exames-section" className="exam-card right">
          <div className="exam-icon">
            <img src="/icons/X-ray.svg" alt="Radiografia" />
          </div>
          <p>Radiografia</p>
        </Link>
        <Link to="/exames#exames-section" className="exam-card left">
          <div className="exam-icon">
            <img src="/icons/Heart with Pulse.svg" alt="Eletrocardiograma" />
          </div>
          <p>Eletrocardiograma</p>
        </Link>
        <Link to="/exames#exames-section" className="exam-card right">
          <div className="exam-icon">
            <img src="/icons/Ultrasound.svg" alt="Ultrassom" />
          </div>
          <p>Ultrassom</p>
        </Link>
      </div>
    </section>
  );
}

export default SectionExames;
