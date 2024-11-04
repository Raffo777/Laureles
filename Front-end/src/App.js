import './App.css';
import  galeria from './img/galeria_fotos1.jpg'
import  galeria_2 from './img/galeria_fotos2.jpg'
import  galeria_3 from './img/galeria_fotos3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import imagen from './img/laureles_header.jpg';
import './header.css';
import videoFile from './components/videos/laureles.mp4';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <header className="header_total">
        <Header />
      </header>

      <div className='separacion'></div>

      <div className='info_medio'>
        <p>
          ¡Descubrí la magia de Laureles Holístico en San Miguel del Monte, Buenos Aires!
          Te invito a descansar y disfrutar la naturaleza con nuestra propuesta de turismo rural sostenible,
          Laureles es un bosque situado a 100km de la ciudad de Buenos Aires, donde se preserva la flora y la fauna nativa.
          Su compromiso con la naturaleza es profundo. Construyen con materiales naturales y gestionan de forma responsable,
          recursos como la electricidad (con paneles solares), el agua y los residuos de manera sostenible, compostando materia orgánica y separando/reutilizando todo lo posible.
        </p>
      </div>

      <div className='apartado_descanso'>
        <div className='caja_descanso'>
          <div className='informacion_descanso'>
            <h2 className='h2_descanaso'>MI DESCANSO EN LAURELES</h2>
            <p>Complejo con amplias cabañas en San Miguel del Monte, Bs. As. - Argentina</p>
            <p>Descanse en un lugar diferente a muy pocos kilómetros de Buenos Aires, donde el sonido de la naturaleza y el aire limpio se hacen presentes. Nuestro alojamiento en Laureles está compuesto por amplias cabañas con dormitorio y baño.</p>
            <div className="tripadvisor-awards">
              <img src="tripadvisor-award1.png" alt="Premio Tripadvisor 1" />
              <img src="tripadvisor-award2.png" alt="Premio Tripadvisor 2" />
              <img src="tripadvisor-award3.png" alt="Premio Tripadvisor 3" />
            </div>
          </div>
        </div>

        <div className='video_descanso'>
          <video className='video' width="530" height="300" controls>
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Sección de servicios */}
      <section className="services">
        <h2 className="services-title">Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Acceso a la naturaleza</h3>
            <p>Disfruta de rutas y senderos en medio de un entorno natural impresionante.</p>
          </div>
          <div className="service-card">
            <h3>Cabañas confortables</h3>
            <p>Alojamiento en cabañas equipadas y rodeadas de naturaleza.</p>
          </div>
          <div className="service-card">
            <h3>Eventos</h3>
            <p>Comprometidos con la sostenibilidad y el uso de energías renovables.</p>
          </div>
          <div className="service-card">
            <h3>Fiestas</h3>
            <p>Fiestas para disfrutar de la fauna y flora local con tus hermanos.</p>
          </div>
          <div className="service-card">
            <h3>Desayuno casero</h3>
            <p>Comienza tu día con un delicioso desayuno hecho en casa.</p>
          </div>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section className="testimonials">
        <h2>Testimonios</h2>
        <p>"Una experiencia inolvidable en contacto con la naturaleza. Perfecto para desconectar." - Visitante 1</p>
        <p>"Las cabañas son hermosas y el ambiente es relajante." - Visitante 2</p>
      </section>

      {/* Sección de galería de imágenes */}
      <section className="gallery">
        <h2>Galería de imágenes</h2>
        <div className="image-grid">
          <img src={galeria} alt="Imagen 1" />
          <img src={galeria_2} alt="Imagen 2" />
          <img src={galeria_3} alt="Imagen 3" />
        </div>
      </section>

      {/* Sección de ubicación */}
      <section className="location">
        <h2>Ubicación</h2>
        <p>Estamos en San Miguel del Monte, Buenos Aires.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509205!2d144.95373631531557!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d89f6fd9%3A0x5045675218ce6e0!2sSan+Miguel+del+Monte%2C+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1617731368874!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Sección de preguntas frecuentes */}
      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        <h3>¿Qué servicios están incluidos?</h3>
        <p>Contamos con desayuno incluido, acceso a las instalaciones y más.</p>
        <h3>¿Se admiten mascotas?</h3>
        <p>Sí, siempre que estén supervisadas.</p>
      </section>

      {/* Llamado a la acción o formulario de contacto */}
      <section className="contact">
        <h2>¿Listo para tu aventura en Laureles?</h2>
        <button>Reserva Ahora</button>
      </section>

      {/* Sección del footer */}
      <Footer />
    </div>
  );
}

export default App;
