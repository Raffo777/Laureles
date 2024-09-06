
import './App.css';
import Header from './components/header.js';
import imagen from './img/imagen.png';

function App() {
  return (
    <div className="App">
      <body>
        <header className="header_total">
          <div >
          <Header />
          </div>
        </header>
        <div className='separacion'>
        </div>

        <div className='info_medio'>
          <p>
            Cabañas en Tandil – Nuestra ciudad es una excelente alternativa turística de vacaciones y mini turismo combinando la tranquilidad de las sierras con atractivos paseos y Turismo Aventura.
            Contamos con una variada oferta de Cabañas y Alojamientos. El Alojamiento en Tandil es ventajoso ya que su estratégica ubicación en la Provincia de Buenos Aires facilita el desplazamiento hacia nuestra ciudad.
            Tandil Cabañas – Alojarse en cabañas permite la continuación de nuestra habitual forma de vida en otro ámbito, encuentro con amigos y poder compartir gratos momentos, permite a nuestros niños estar en contacto con un medio natural distinto y a la vez, disfrutar del ambiente familiar. LE DESEAMOS UNA FELÍZ ESTADÍA EN NUESTRA CIUDAD!</p>
        </div>
        <div className='hola'>
          <h1>hoo</h1>
        </div>
      </body>
    </div>
  );
}

export default App;
