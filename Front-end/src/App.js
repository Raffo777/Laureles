import './App.css';
import Header from './components/header.js';
import imagen from './img/laureles_header.jpg';
import './header.css';
import videoFile from './components/videos/laureles.mp4';

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
        Su compromiso con la naturaleza es profundo. Construyen con materiales naturales y gestionan de forma responsable, recursos como la electricidad (con paneles solares), el agua y los residuos de manera sostenible, compostando materia orgánica y separando/reutilizando todo lo posible.
        </p>
      </div>

      <div className='apartado_descanso'>
        <div className='caja_descanso'>
          <div className='informacion_descanso'>
            <h2 className='h2_descanaso'>MI DESCANSO EN LAURELES</h2>
            <p>Complejo con amplias cabañas en San miguel del monte, Bs. As. - Argentina</p>
            <p>Descanse en un lugar diferente a muy pocos kilómetros de Buenos Aires, donde el sonido de la naturaleza y el aire limpio se hacen presentes. Nuestro alojamiento en Laureles está compuesto por x amplias cabañas con dormitorio y baño</p>
            <div className="tripadvisor-awards">
              <img src="tripadvisor-award1.png" alt="Premio Tripadvisor 1" />
              <img src="tripadvisor-award2.png" alt="Premio Tripadvisor 2" />
              <img src="tripadvisor-award3.png" alt="Premio Tripadvisor 3" />
            </div>
          </div>
        </div>

        <div className='video_descanso'>
          <button className='play-button'>
            <video width="530" height="300" controls>
              <source src={videoFile} type="video/mp4" />
            </video>
            <i className="fa fa-play-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
