import React from "react";
import "../Contact/styles.scss";
import Profile from "../../assets/jpg/foto-perfil.jpg";
import Email from "../../assets/png/e-mail.png";
import Linkedin from "../../assets/png/linkedin.png";
import Github from "../../assets/png/github.png";

const Contact: React.FC = () => {
  return (
    <div className="contact-me">
      <h1 className="title-container-contact">contato.</h1>
      <img
        className="image-profile-contact"
        src={Profile}
        alt="Imagem de Perfil"
      />
      <div className="container-contact">
        <ul>
          <li>
            <a href="mailto:anaclaudia.rejei@hotmail.com">
              <img className="icon-contact" src={Email} alt="Ícone E-mail" />{" "}
            </a>
            anaclaudia.rejei@hotmail.com
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ana-claudia-rejei-de-almeida/" target="blank">
              <img className="icon-contact" src={Linkedin} alt="Ícone Linkedin" />{" "}
            </a>
            https://www.linkedin.com/in/ana-claudia-rejei-de-almeida/
          </li>
          <li>
            <a href="https://github.com/anaclaudia-almeida" target="blank">
              <img className="icon-contact" src={Github} alt="Ícone Github" />
            </a>
            https://github.com/anaclaudia-almeida
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
