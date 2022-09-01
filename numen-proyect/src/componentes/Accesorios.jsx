import React from 'react';
import Card from 'react-bootstrap/Card';
import '../stylesheets/Accesorios.css';
import fondo_acc from "../imagenes/09.jpg";


function Accesorios(props) {
  return (
    <div className='container_acc'>
      <Card>
        <Card.Img src={fondo_acc} alt="" />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Text>
              <p className='titulo_acc_1'>{props.titulo1}</p>
              <p className='titulo_acc_2'>{props.titulo2}</p>
            </Card.Text>
            <Card.Text className='textos'>
              <p>{props.texto1}</p>
            </Card.Text>
            <Card.Text className='textos'>
              <p>{props.texto2}</p>
            </Card.Text>
            <Card.Text className='textos'>
              <p>{props.texto3}</p>
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card >
    </div>
  );
}

export default Accesorios;

