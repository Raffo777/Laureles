import React, { useState } from 'react';
import '../header.css';
import imagen from '../img/logo_header.png';

const Header = () => {
  // Estado para controlar si el menú desplegable está abierto o cerrado
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a className='logo_a' href="#"><img className='logo_foto' src={imagen} alt="foto logo" /></a>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Cabañas disponibles</a></li>
          <li><a href="#">Ubicación</a></li>

          {/* Menú desplegable de Servicios */}
          <li className="dropdown">
            <a href="#" className="dropbtn" onClick={toggleDropdown}>
              Servicios ▼
              </a>
              {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#">Alojamientos</a>
                <a href="#">Atractivos</a>
                <a href="#">Gastronomía</a>
                <a href="#">Guías Turísticos</a>
                <a href="#">Espacios Recreativos</a>
                <a href="#">Agenda de Eventos</a>
                <a href="#">Excursiones</a>
                <a href="#">Productores Locales</a>
                <a href="#">Todos los servicios</a>
              </div>
            )}
          </li>

          <li><a href="#">Iniciar sesión</a></li>
          <li><a href="#">Registrarse</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
