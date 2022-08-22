import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tarjeta from './componentes/Tarjeta';
import NavbarComp from './componentes/NavbarComp'
import Tarjetas from './componentes/Tarjetas';
import data from './data';



function App() {
  const { tarjetas } = data;
  return (
    <div className="App">
      <div className='banner-cuotas'>3 y 6 cuotas sin interés. Envíos gratis a todo el país</div>
      <div className="container">
        <NavbarComp/>
      </div>
      <div className='NuestrasOfertas'>
        {/* De manera provisoria separé el título en dos h2 para poder usar colores distintos en "Nuestras" y "Ofertas". Falta chequear si hay una forma mejor de hacerlo. */}
        <div className='titulo-contenedor'>
          {/* <h2 className='nuestras'>Nuestras</h2>
          <h2 className='ofertas'>Ofertas</h2> */}
          <h2 className='nuestras'>Nuestras <span>Ofertas</span></h2>
        </div>
        <div className='tarjetas'>
          <Tarjetas tarjetas={tarjetas}/>
          {/* <Tarjeta 
            imagen='02'
            combo='Informal'
            precio= '19.99'
            precioanterior='24.99'/>
          <Tarjeta 
            imagen='03'
            combo='Casual'
            precio= '35.99'
            precioanterior='44.99'/>
          <Tarjeta 
            imagen='04'
            combo='Verano'
            precio= '17.99'
            precioanterior='20.99'/>
          <Tarjeta 
            imagen='05'
            combo='Primavera'
            precio= '24.99'
            precioanterior='29.99'/> */}
          
        </div>
      </div>
    </div>
  );
}

export default App;