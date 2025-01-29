import React from "react";
import "../AboutMe/styles.scss";
import Image01 from "../../assets/jpg/image-about-me-01.jpg";
import Image02 from "../../assets/jpg/image-about-me-02.jpg";
import Image03 from "../../assets/jpg/image-about-me-03.jpg";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <div className="container-images-about-me">
        <img src={Image01} alt="Imagem Abstrata em 3D" />
        <img src={Image02} alt="Imagem Tecla Esc" />
        <img src={Image03} alt="Imagem Computador Escurecido" />
      </div>
      <div className="container-skills-about-me">
        <h1 className="title-about-me">Sobre Mim.</h1>
        <ul className="soft-skills-about-me">
          <li className="item-soft-skills">Organização</li>
          <li className="item-soft-skills">Trabalho em equipe</li>
          <li className="item-soft-skills">Proatividade</li>
          <li className="item-soft-skills">Capacidade de aprendizagem</li>
        </ul>
        <ul className="hard-skills-about-me">
          <li className="item-hard-skills">HTML5</li>
          <li className="item-hard-skills">CSS3</li>
          <li className="item-hard-skills">React</li>
          <li className="item-hard-skills">Typescript</li>
          <li className="item-hard-skills">Tailwind</li>
          <li className="item-hard-skills">VTEX (CMS e IO)</li>
          <li className="item-hard-skills">Deco</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
