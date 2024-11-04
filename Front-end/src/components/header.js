import React, { useEffect, useState } from 'react';
import '../header.css'; // Archivo CSS para estilos personalizados
import logo from '../img/logo_header.png'; // Asegúrate de poner la ruta correcta de tu logo

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Manejar el cambio de estado del dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Laureles Holístico" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cabanas">Cabañas disponibles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ubicacion">Ubicación</a>
                        </li>
                        
                        {/* Dropdown de Servicios */}
                        <li className="nav-item dropdown">
                            <a 
                                href="#"
                                className="nav-link dropdown-toggle" 
                                onClick={toggleDropdown}
                            >
                                Servicios
                            </a>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu show">
                                    <li><a className="dropdown-item" href="#alojamientos">Alojamientos</a></li>
                                    <li><a className="dropdown-item" href="#atractivos">Atractivos</a></li>
                                    <li><a className="dropdown-item" href="#gastronomia">Gastronomía</a></li>
                                    <li><a className="dropdown-item" href="#guias">Guías Turísticos</a></li>
                                    <li><a className="dropdown-item" href="#espacios">Espacios Recreativos</a></li>
                                    <li><a className="dropdown-item" href="#eventos">Agenda de Eventos</a></li>
                                    <li><a className="dropdown-item" href="#excursiones">Excursiones</a></li>
                                    <li><a className="dropdown-item" href="#productores">Productores Locales</a></li>
                                    <li><a className="dropdown-item" href="#todos">Todos los servicios</a></li>
                                </ul>
                            )}
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#iniciarSesion">Iniciar sesión</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#registrarse">Registrarse</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
