import { motion } from "framer-motion";
import "./SectionHome.css";

function SectionHome() {
  return (
    <motion.section
      className="section-home"
      initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1 }}    
    >
      <motion.div
        className="container-home"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="video-container">
          <motion.video
            autoPlay
            loop
            muted
            className="home-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <source src="/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </motion.video>
        </div>

        
        <motion.div
          className="content"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="logo-container">
            <img src="/LOGOnk.svg" alt="Logo" className="logoHome" />
          </div>
          <h1 className="titleHome">Exames veterinários de excelência</h1>
          <p className="subtitleHome">Diagnósticos de ponta para a saúde do seu pet!</p>
          <p className="descriptionHome">
            Tecnologia de ponta e dedicação para um cuidado preciso. Descubra como podemos transformar a vida do seu melhor amigo.
          </p>

          
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open("https://wa.me/5511977259849", "_blank")}
          >
            Fale Conosco
          </motion.button>
          
        </motion.div>
      </motion.div>

      
      <motion.div
        className="whatsapp-fly"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a href="https://wa.me/5511977259849" target="_blank" rel="noopener noreferrer">
          <img src="/WhatsAppNK.svg" alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </motion.div>

    </motion.section>
  );
}

export default SectionHome;
