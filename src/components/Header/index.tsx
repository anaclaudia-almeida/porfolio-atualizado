import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header/styles.scss";

const navItems = [
  { label: "Home", link: "/home" },
  { label: "Sobre Mim", link: "/sobre-mim" },
  { label: "Meus Projetos", link: "/projetos" },
  { label: "Contato", link: "/contato" },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container-header">
        <span className="welcome-text">Olá, seja bem-vindo(a) ao meu portfólio</span>
        <nav>
          <ul className="nav-header">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className={`item-nav-header ${location.pathname === item.link ? "active" : ""}`}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
