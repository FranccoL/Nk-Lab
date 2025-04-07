import './ContatoPage.css';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

function ContatoPage() {
  const form = useRef();
  const [mensagem, setMensagem] = useState('');

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5n6281f',
      'template_yp06vvb',
      form.current,
      'tld_C4ScikAphu76y'
    )
    .then(() => {
      setMensagem('Mensagem enviada com sucesso!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      setMensagem('Erro ao enviar. Tente novamente mais tarde.');
    });
  };

  return (
    <div className="contato-page">
      <div className="contatoHeader-wrapper">
        <div className="contatoHeader">
          <h2>Contato</h2>
        </div>
      </div>

      <div className="contato-container">
        <div className="contato-info">
          <h1>Entre em Contato</h1>
          <p>Fale com a gente para dúvidas ou sugestões!</p>
          <img src="imgContato.png" alt="Ilustração Contato"/>
        </div>

        <form ref={form} className="contato-form" onSubmit={enviarEmail}>
          <label>Nome</label>
          <input type="text" name="nome" placeholder="Seu nome completo" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="seuemail@email.com" required />

          <label>Mensagem</label>
          <textarea name="mensagem" rows="5" placeholder="Digite sua mensagem..." required></textarea>

          <button type="submit">Enviar</button>
          {mensagem && <p className="mensagem-envio">{mensagem}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContatoPage;
