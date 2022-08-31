import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './componentes/NavbarComp'
import Tarjetas from './componentes/Tarjetas';
import data from './data';
import { useState } from 'react';
import Basket from './componentes/Basket';
import Banner from './componentes/Banner';


function App() {

  const { tarjetas } = data;
  const [cartItems, setCartItems] = useState([])

  const onAdd = (tarjeta) => {
    const exist = cartItems.find(x => x.id === tarjeta.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === tarjeta.id ? {...exist, qty: exist.qty +1 } :x 
        )
      );
    } else { 
      setCartItems([...cartItems, { ...tarjeta, qty: 1 }]);
    }
  }

    const onRemove = (tarjeta) => {
    const exist = cartItems.find(x => x.id === tarjeta.id);
    if(exist.qty===1) {
      setCartItems(cartItems.filter((x) => x.id !== tarjeta.id));
  } else {
    setCartItems(cartItems.map(x => x.id === tarjeta.id ? {...exist, qty: exist.qty -1 } :x 
      ))
    } }  

  return (
    <div className="App">
      <div className='banner-cuotas'>3 y 6 cuotas sin interés.</div>

        {/* NavBar */}

      <div className="container">
        <NavbarComp />
      </div >

        {/* Banner central */}

    <div className='Banner'> <Banner/> </div>

        {/* Productos y carrito */}

    <div className='NuestrasOfertas'>
      <div className='titulo-contenedor'>
        <h2 className='nuestras'>Nuestras <span>Ofertas</span></h2>
      </div>

      <div className='contenedor'>

       {/* Tarjetas */}

        <div className='tarjetas'> <Tarjetas onAdd={onAdd} tarjetas={tarjetas}/> </div>

         {/* Carrito */}

        <div className='basket'> 
          <Basket 
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}>
            </Basket>
        </div>
      </div>
    </div>
  </div>
  );
  }

export default App;
