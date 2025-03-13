import "./SobreNosPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




const avaliacoes = [
    { nome: "Ileana / Mamãe do Pedrinho", texto: "Sem palavras para descrever! Viramos clientes por causa do plano de saúde, mas agora somos fiéis para sempre! Desde o atendimento na recepção, até antes da coleta, durante e depois. Falo que Pedrinho ama fazer exame, mas com vocês ama mais ainda (...) entra feliz e sai ainda mais feliz depois de ser mimado com os petiscos!", foto: "/avaliacao-pedro.svg" },
    { nome: "Larissa/ Mamãe do Léo", texto: "Queria agradecer vocês por todo o cuidado com o nosso Léo! Começando desde a coleta até a liberação dos laudos, por toda atenção e carinho! Recomendo muuito! Nosso guerreirinho está ótimo! Um grande abraço!!", foto: "/avaliacao-leo.svg" },
    { nome: "Dr. Leonardo / Nosso Vet Parceiro", texto: "Rápido retorno dos exames, sem contar o atendimento impecável!", foto: "/avaliacao-drleo.svg" },
    { nome: "Dra. Letícia / Nossa Vet Parceira", texto: "Profissional ímpar, desde o contato, atendimento e compromisso com o Veterinário. Exames de qualidade, dra Camila sempre disponível para auxiliar nas nossas dúvidas. Super Recomendo!", foto: "/draLeticia.svg" },
    { nome: "Camila Melo", texto: "A veterinária Camila foi perfeita pra tirar sangue da minha gatinha de 15 anos. Geralmente é muito difícil conseguir examiná-la, são necessárias algumas picadas/tentativas. Com a Camila, ela percebeu como ela se sentiria mais a vontade, deixou ela bem tranquila e confortável, foi uma picada rápida, exame rápido e minha gatinha ainda pediu carinho pra ela depois. Foi perfeito!", foto: "/reviewWoman.svg" },
  ];

function SobreNosPage() {
  return (
    <div className="containerSobre2"> 
      <div className="sobreHeader">
        <h2>Sobre Nós</h2>
      </div>
      <div className="sobrenos">
        <div className="imgSobre d-flex al-center jc-flex-center">
          <img src="/imgSobre.svg" alt="Imagem Sobre Nós" className="imgSobre" />

          <div className="cardText d-flex flex-column">
            <img src="/LOGOnk.svg" alt="Logo NK Laboratório" className="logoSobre2" />

            <div className="conteudoSobre d-flex">
              <img src="/maquina.svg" alt="Imagem sobre nós" className="imagemLateral" />
              <div className="textoSobre">
                <h2>
                  No NK Laboratório, acreditamos que um diagnóstico preciso faz toda a diferença na vida dos pets e no trabalho dos Médicos Veterinários. Nosso compromisso é oferecer resultados confiáveis, desde a coleta até a entrega do laudo, com tecnologia de ponta e dedicação.
                  <br /><br />
                  Nosso nome carrega um propósito: inspirado no Linfócito NK, célula essencial do sistema imune, traduzimos essa força em análises clínicas de excelência para a rotina Veterinária.
                </h2>
              </div>
            </div>

            <div className="conteudoSobre d-flex">
              <div className="texto2Sobre">
                <h2>
                  💙 Missão: Garantir diagnósticos precisos e confiáveis, proporcionando suporte aos veterinários e segurança aos tutores.
                  <br />🚀 Visão: Tornar-se referência em análises clínicas veterinárias, elevando o padrão da Medicina Veterinária.
                  <br />🔬 Valores: Competência, eficiência, agilidade e inovação, sempre com amor e compromisso com nossos amigos peludos.
                </h2>
              </div>
              <img src="/diagnostic2.svg" alt="Imagem sobre nós" className="imagemLateral2" />
            </div>

            <h3>NK Laboratório – Excelência que transforma a saúde do seu pet!</h3>
          </div>
        </div>
      </div>

      <div className="carrossel-wrapper">
        <h2>O que nossos clientes dizem</h2>
        <div className="carrossel-container">
        <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={1}  // No mobile, apenas 1 card por vez
  navigation
  pagination={{ clickable: true }}
  loop={false}
  breakpoints={{
    1024: {
      slidesPerView: 3, // Em telas maiores, mostra 3 cards por vez
    },
    768: {
      slidesPerView: 1, // No mobile (abaixo de 768px), mostra 1 card por vez
    },
    480: {
      slidesPerView: 1, // Em telas muito pequenas (abaixo de 480px), ainda será 1 card por vez
    },
  }}
>
  {avaliacoes.map((avaliacao, index) => (
    <SwiperSlide key={index} className="avaliacao-card">
      <img src={avaliacao.foto} alt={avaliacao.nome} className="foto-avaliador" />
      <p>{`"${avaliacao.texto}"`}</p>
      <h4>- {avaliacao.nome}</h4>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
    </div>
  );
}

export default SobreNosPage;
