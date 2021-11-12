import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#top">Home</a>
      <a href="#about">O mnie</a>
      <a href="#specs">Specjalizacje</a>
      <a href="#clients">Zaufali nam</a>
      <a href="#contact">Kontakt</a>
    </div>
  );
};

export default Header;
