import React from 'react';
import '../header.css';
import imagen from '../img/logo_header.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#"><img className='logo_foto' src={imagen} alt="foto logo"></img></a>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Cabañas disponibles</a></li>
          <li><a href="#">Ubicación</a></li>
          <li><a href="#">Iniciar sesión</a></li>
          <li><a href="#">Registrarse</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
