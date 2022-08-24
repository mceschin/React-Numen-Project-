import React from 'react';
import Button from 'react-bootstrap/Button';
import '../stylesheets/Banner.css';

function Banner () {
    return (
        <div className='banner'>
            {/* <img className='imagen-de-banner' src={require('../imagenes/01.jpg')}/> */}
            <h2>Conocé nuestra historia</h2>
            <h3>Productos 100% naturales</h3>
            <Button className='boton-de-banner
boton-de-banner' >Nosotros</Button>
        </div>
    )
}


export default Banner;   