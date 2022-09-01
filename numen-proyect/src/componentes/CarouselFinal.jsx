import Carousel from 'react-bootstrap/Carousel';
import img01 from "../imagenes/marq01.jpg";
import img02 from "../imagenes/marq02.jpg";
import img03 from "../imagenes/marq03.jpg";
import img04 from "../imagenes/marq04.jpg";
import img05 from "../imagenes/marq05.jpg";

function CarouselFinal(props) {
  return (
    <Carousel variant="dark">
      <br></br>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img01}
          alt="" />
        <Carousel.Caption>
          <h5>White Wolf</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img02}
          alt="" />
        <Carousel.Caption>
          <h5>White Wolf</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img03}
          alt="" />
        <Carousel.Caption>
          <h5>White Wolf</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img04}
          alt="" />
        <Carousel.Caption>
          <h5>White Wolf</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img05}
          alt="" />
        <Carousel.Caption>
          <h5>White Wolf</h5>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselFinal;