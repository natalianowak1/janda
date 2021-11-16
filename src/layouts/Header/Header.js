import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" alt="logo" src={logo}></img>
      <a href="#top">Home</a>
      <a href="#about">O mnie</a>
      <a href="#specs">Specjalizacje</a>
      <a href="#clients">Zaufali nam</a>
      <a href="#contact">Kontakt</a>
    </div>
  );
};

export default Header;
