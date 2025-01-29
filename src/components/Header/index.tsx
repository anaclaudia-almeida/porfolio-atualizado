import React from "react";
import "../Header/styles.scss";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Sobre Mim", link: "/sobre-mim" },
  { label: "Meus Projetos", link: "#projetos" },
  { label: "Contato", link: "#contato" },
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container-header">
        <span className="welcome-text">Olá, seja bem-vindo(a) ao meu portfólio</span>
        <nav>
          <ul className="nav-header">
            {navItems.map((item, index) => (
              <li key={index} className="item-nav-header">
                <a href={item.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
