import React from "react";
import "../HomePage/styles.scss";
import Profile from "../../assets/jpg/foto-perfil.jpg"

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="container-homepage">
        <img className="image-profile-homepage" src={Profile} alt="Imagem de Perfil" />
        <div className="aside-container-homepage">
          <h1 className="title-container-homepage">Ana Almeida.</h1>
          <p className="text-container-homepage">Minha experiência na área de Client Sucess me permite desenvolver soluções mais assertivas, de fácil manutenção e levando em consideração a visão do negócio, a jornada do consumidor e a administração da própria equipe.</p>
          <button className="button-container-homepage">Baixar Currículo</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
