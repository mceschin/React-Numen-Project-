import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../stylesheets/Tarjeta.css';


function Tarjeta(props) {
    return (
        <Card className='contenedor-principal-de-tarjeta' >
            <Card.Img className='imagen-de-tarjeta' src={require(`../imagenes/${props.imagen}.jpg`)} />
                <Card.Body className='contenedor-de-tarjeta' >
                <Card.Title className='titulo-de-tarjeta'>
                  Combo {props.combo}</Card.Title>
                <Card.Text className='precios-de-tarjeta'>
                  <div className='precio-actual-de-tarjeta'>${props.precio}</div>
                  <div className='precio-anterior-de-tarjeta'>
                  ${props.precioanterior}</div>
                </Card.Text>
                <Button className='boton-de-compra'>Comprar</Button>
            </Card.Body>
        </Card>
    );
}


export default Tarjeta;      