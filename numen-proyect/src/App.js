import logo from './logo.svg';
import './App.css';
import card from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tarjeta from './componentes/card';

function App() {
  return (
    <div className="App">
      <div className='NuestrasOfertas'>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      <Tarjeta></Tarjeta>
      </div>
    </div>
  );
}

export default App;
