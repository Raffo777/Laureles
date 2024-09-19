import './App.css';
import Header from './components/header.js';
import imagen from './img/imagen.png';
import './header.css';

function App() {
  return (
    <div className="App">
      <header className="header_total">
        <Header />
      </header>

      <div className='separacion'></div>

      <div className='info_medio'>
        <p>
          Cabañas en Tandil – Nuestra ciudad es una excelente alternativa turística de vacaciones y mini turismo combinando la tranquilidad de las sierras con atractivos paseos y Turismo Aventura.
          Contamos con una variada oferta de Cabañas y Alojamientos. El Alojamiento en Tandil es ventajoso ya que su estratégica ubicación en la Provincia de Buenos Aires facilita el desplazamiento hacia nuestra ciudad.
          Tandil Cabañas – Alojarse en cabañas permite la continuación de nuestra habitual forma de vida en otro ámbito, encuentro con amigos y poder compartir gratos momentos, permite a nuestros niños estar en contacto con un medio natural distinto y a la vez, disfrutar del ambiente familiar. ¡LE DESEAMOS UNA FELÍZ ESTADÍA EN NUESTRA CIUDAD!
        </p>
      </div>

      <div className='apartado_descanso'>
        <div className='caja_descanso'>
          <div className='informacion_descanso'>
            <h2 className='h2_descanaso'>MI DESCANSO EN LAURELES</h2>
            <p>Complejo de 9 amplias cabañas en Tandil, Bs. As. - Argentina</p>
            <p>Descanse en un lugar diferente a muy pocos kilómetros de Buenos Aires, donde el sonido de la naturaleza y el aire de las sierras se hacen presentes. Nuestro alojamiento en Tandil está compuesto por 5 amplias cabañas de dos dormitorios y 4 cálidas cabañas de un dormitorio.</p>
            <div className="tripadvisor-awards">
              <img src="tripadvisor-award1.png" alt="Premio Tripadvisor 1" />
              <img src="tripadvisor-award2.png" alt="Premio Tripadvisor 2" />
              <img src="tripadvisor-award3.png" alt="Premio Tripadvisor 3" />
            </div>
          </div>
        </div>

        <div className='video_descanso'>
          <button className='play-button'>
            
            <i className="fa fa-play-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
