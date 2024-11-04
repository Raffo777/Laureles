import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../header.css'; // Asegúrate de que la ruta sea correcta
import logo from '../img/logo_header.png'; // Asegúrate de que la ruta del logo sea correcta

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; // Cambia este valor si necesitas un umbral diferente
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar 
            bg={scrolled ? "transparent-dark" :"dark-black"} // Cambia el fondo si está scrolled
            variant="dark" 
            expand="lg" 
            fixed="top" 
            className={`navbar ${scrolled ? "scrolled" : ""}`}
        >
            <div className="container">
                <Navbar.Brand href="#">
                    <img src={logo} alt="Laureles Holístico" height="40" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#cabanas">Cabañas disponibles</Nav.Link>
                        <Nav.Link href="#ubicacion">Ubicación</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#alojamientos">Alojamientos</NavDropdown.Item>
                            <NavDropdown.Item href="#atractivos">Atractivos</NavDropdown.Item>
                            <NavDropdown.Item href="#gastronomia">Gastronomía</NavDropdown.Item>
                            <NavDropdown.Item href="#guias">Guías Turísticos</NavDropdown.Item>
                            <NavDropdown.Item href="#espacios">Espacios Recreativos</NavDropdown.Item>
                            <NavDropdown.Item href="#eventos">Agenda de Eventos</NavDropdown.Item>
                            <NavDropdown.Item href="#excursiones">Excursiones</NavDropdown.Item>
                            <NavDropdown.Item href="#productores">Productores Locales</NavDropdown.Item>
                            <NavDropdown.Item href="#todos">Todos los servicios</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#iniciarSesion">Iniciar sesión</Nav.Link>
                        <Nav.Link href="#registrarse">Registrarse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
