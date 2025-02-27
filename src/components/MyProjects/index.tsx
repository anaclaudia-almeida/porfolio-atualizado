import React from "react";
import "../MyProjects/styles.scss";
import Projeto01 from "../../assets/png/projeto-econverse.png";
import Projeto02 from "../../assets/png/projeto-corebiz.png";
import Projeto03 from "../../assets/png/projeto-nonnas_pizza.png";
import Projeto04 from "../../assets/png/projeto-gta.png";

const Projects: React.FC = () => {
  return (
    <div className="my-projects">
      <h1 className="title-about-me">meus projetos.</h1>
      <div className="container-my-projects">
        <div className="project-item">
          <a
            href="https://github.com/anaclaudia-almeida/teste-front-end"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img
                className="image-project"
                src={Projeto01}
                alt="Imagem E-commerce Econverse"
              />
              <div className="overlay">
                <span className="title">E-commerce Econverse</span>
                <p>Tecnologias Utilizadas: React, TypeScript, SCSS, Axios.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/anaclaudia-almeida/corebiz-frontend-challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img
                className="image-project"
                src={Projeto02}
                alt="Imagem E-commerce Corebiz"
              />
              <div className="overlay">
                <span className="title">E-commerce Corebiz</span>
                <p>Tecnologias Utilizadas: React, TypeScript, SCSS, Axios.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/anaclaudia-almeida/nonnas-pizza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img
                className="image-project"
                src={Projeto03}
                alt="Imagem Nonnas Pizza"
              />
              <div className="overlay">
                <span className="title">Nonnas Pizza</span>
                <p>Tecnologias Utilizadas: React, TypeScript, SCSS, Axios.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/anaclaudia-almeida/desafio-dev-em-dobro-semana-do-zero-ao-programador"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img className="image-project" src={Projeto04} alt="Imagem GTA" />
              <div className="overlay">
                <span className="title">Projeto GTA</span>
                <p>Tecnologias Utilizadas: React, TypeScript, SCSS, Axios.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
