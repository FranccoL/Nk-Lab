import "./SectionExames.css";

function SectionExames() {
  return (
    <section className="section-exams">
        <h2 className="section-title">Confira nossos exames</h2>
        <div className="exams-grid">
          <div className="exam-card">
            <div className="exam-icon"><img src="/icons/Laboratory.svg" alt="Bioquímica" /></div>
            <p>Bioquímica</p>
          </div>
          <div className="exam-card">
            <div className="exam-icon"><img src="/icons/Heart.svg" alt="Hematologia" /></div>
            <p>Hematologia</p>
          </div>
          <div className="exam-card">
            <div className="exam-icon"><img src="/icons/ECG.svg" alt="Ecocardiograma" /></div>
            <p>Ecocardiograma</p>
          </div>
          <div className="exam-card">
            <div className="exam-icon"><img src="/icons/X-ray.svg" alt="Radiografia" /></div>
            <p>Radiografia</p>
          </div>
          <div className="exam-card">
            <div className="exam-icon"><img src="/icons/Heart with Pulse.svg" alt="Eletrocardiograma" /></div>
            <p>Eletrocardiograma</p>
          </div>
          <div className="exam-card">
            <div className="exam-icon"><img src="/icons/Ultrasound.svg" alt="Ultrassom" /></div>
            <p>Ultrassom</p>
          </div>
        </div>
      </section>
   
  );
}

export default SectionExames;
