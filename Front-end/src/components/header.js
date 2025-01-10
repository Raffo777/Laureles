import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../header.css'; 
import logo from '../img/logo_header.png'; 

const Header = ({ onLoginClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isScrolled = scrollTop > 50;

            // Detectar dirección del scroll
            if (scrollTop > lastScrollTop) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            setScrolled(isScrolled);
            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar 
            bg={scrolled ? "transparent-dark" : "dark-black"} 
            variant="dark" 
            expand="lg" 
            fixed="top" 
            className={`navbar ${scrolled ? "scrolled" : ""} ${scrollDirection === "up" ? "expand" : "shrink"}`}
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
                        <Nav.Link href="#iniciarSesion" onClick={onLoginClick}>Iniciar sesión</Nav.Link> {/* Agregamos onClick */}
                        <Nav.Link href="#registrarse">Registrarse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
