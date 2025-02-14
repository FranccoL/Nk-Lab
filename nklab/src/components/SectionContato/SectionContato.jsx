import "./SectionContato.css";

function SectionContato() {
  return (
    <div className="sectionContato">
        <h1>Venha nos visitar ou entre em contato</h1>
        <div className="containerContato d-flex jc-space-between">
            <div className="cardMap ">
                
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9103624435143!2d-46.66991842501585!3d-23.607547478768122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b2a906b8745%3A0x5cf42419ef928b82!2sNk%20LabVet!5e0!3m2!1spt-BR!2sbr!4v1739567542095!5m2!1spt-BR!2sbr"
  width="500"
  height="460"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
/>  
<h1>Av. Pavão, 950. Moema - SP <br /> CEP: 04516-012</h1>
            </div>
            <div className="cardContato d-flex al-start flex-column">
    <h1>Entre em contato</h1>

    <div className="contact-item">
        <img src="/icons/Email.svg" alt="#" className="iconC" />
        <div>
            <h2>Email:</h2>
            <p>nk.labvet@gmail.com</p>
        </div>
    </div>

    <div className="contact-item">
        <img src="/icons/WhatsAppC.svg" alt="#" className="iconC"/>
        <div>
            <h2>WhatsApp</h2>
            <p>(11) 97725-9849</p>
        </div>
    </div>

    <div className="contact-item">
        <img src="/icons/Clock.svg" alt="#" className="iconC"/>
        <div>
            <h2>Funcionamento:</h2>
            <p>Seg a Sab: 09:00 – 19:00</p>
        </div>
    </div>
</div>

            </div>
        </div>
    
   
  );
}

export default SectionContato;
