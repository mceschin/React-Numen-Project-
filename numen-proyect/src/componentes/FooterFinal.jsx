import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/FooterFinal.css';
import logo_footer from "../imagenes/WW LOGO.png";


function FooterFinal(props) {
    return (
        <div class="container_footer">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
                <div class="col mb-3">
                    <center>
                        <div>
                            <img src={logo_footer} alt='' width="160px" height="120px"></img>
                            <p class="textos"><br />&copy; 2022-2025</p>
                        </div>
                    </center>
                </div>

                <div class="col mb-3">
                    <h5 className='h5_footer'>Ocasiones</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="link_footer">De ocasión</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Trabajando desde casa</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Tiempo de snacks</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Desayuno</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Vida vegana</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Cocinando</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Regalos</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Cocina fácil</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Todos los productos</a></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h5 className='h5_footer'>Todas las categorías</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Cocinando</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Desayuno</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Condimentos</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Bebidas</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Para calentar</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Soluciones rápidas</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Básicos</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Salsas</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Snacks</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Dale sabor a tu cocina</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Para golosos</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Vino y queso</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Todos los productos</a></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h5 className='h5_footer'>Regalos y paquetes</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Para golosos</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Locales</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Caja para cocinar</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Caja Sabor para la cocina</a></li>
                        <li class="nav-item mb-2"><a href="#" class="link_footer">Snacks especiales</a></li>
                    </ul>
                </div>
                <div class="col mb-3">
                    <h5 className='h5_footer'>Nuestras Marcas</h5>
                    <ul class="nav flex-column">
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default FooterFinal;

