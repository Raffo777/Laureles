import React from 'react';  
import '../footer.css';

const Footer = () => {  
  return (  
    <footer className="footer">  
      <div className="footer-container">  
        <div className="footer-info">  
          <h4>Contacto</h4>  
          <p>Email: info@laureles.com</p>  
          <p>Teléfono: +54 9 11 4558-4960</p>  
        </div>  
        <div className="footer-links">  
          <h4>Síguenos</h4>  
          <ul className="social-media">  
            <li><a href="https://www.facebook.com/laurelesholistico?locale=es_LA" target="_blank" rel="noopener noreferrer">Facebook</a></li>  
            <li><a href="https://www.instagram.com/laurelesholistico/" target="_blank" rel="noopener noreferrer">Instagram</a></li> 
            <li><a href="https://laurelesholistico.ar/?fbclid=PAZXh0bgNhZW0CMTEAAabcpC4_vJwKqe915ljIa6oePqysWa81N9TAm9rhpyp_3fUj_usu8bSJ3RA_aem_aUDv4S0XHL3tKBKRlsCMtA" target="_blank" rel="noopener noreferrer">Tienda Oficial</a></li> 

          </ul>  
        </div>  
      </div>  
      <div className="footer-bottom">  
        <p>&copy; {new Date().getFullYear()} Laureles. Todos los derechos reservados.</p>  
      </div>  
    </footer>  
  );  
}  

export default Footer;
