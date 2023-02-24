import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cluster } from "../component/cluster";
import { Context } from "../store/appContext";
import CachesUbicacion from "../../img/cachesUbicacion.png"
import CachesDificultad from "../../img/cahesDificultad.png"
import CachestTamano from "../../img/cachestTamano.png"

export const TiposDeCaches = () => {


    return (

        <div>

            <div className="container">
                <h1 className="text-center mt-4 mb-3">Tipos de Cachés</h1>
                <p>Bienvenido a nuestro sitio web sobre geocaching, donde podrás vivir una experiencia única y emocionante mientras exploras el mundo en busca de tesoros escondidos. Conviértete en parte de una extensa comunidad de descubridores; todo ello combinando senderismo, emoción de un juego, tesoros ocultos y momentos inolvidables. ¡Comienza tu aventura ahora!</p>
            </div>
            <div className=" container mx-auto text-center">
                <h2 className="text-center my-4">Comienza a Explorar</h2>
                <p className="mb-4">Entra en el emocionante mundo del geocaching. Descubre tesoros ocultos y vive una experiencia única en cada rincón del planeta. ¡Comienza tu aventura hoy mismo.</p>
                <div className="container row row-cols-lg-3 g-3 mx-auto mb-4">
                    <div class=" ju card text-bg-dark border-0 ">
                        <Link to="/perfil-cache" class="text-decoration-none">
                            <img src={CachesUbicacion} class="card-img border-dark border border-1 " alt="..." />
                        </Link>
                    </div>
                    <div class=" card text-bg-dark border-0 rounded-4">
                        <Link to="/como-involucrar-a-los-mas-pequenos-en-la-busqueda-de-caches" class="text-decoration-none">
                            <img src={CachesDificultad} class="card-img border-dark border border-1 " alt="..." />
                        </Link>
                    </div>
                    <div class=" card text-bg-dark border-0 ">
                        <Link to="/como-involucrar-a-los-mas-pequenos-en-la-busqueda-de-caches" class="text-decoration-none">
                            <img src={CachestTamano} class="card-img border border-dark border border-1 " alt="..." />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <h2 className="text-center mb-3 mt-4">Accede a los Cachés más Populares entre Nuestra Comunidad</h2>
                <p>¡No te pierdas la oportunidad de descubrir los tesoros escondidos de la comunidad! Selecciona los cachés más populares y explora los lugares más interesantes alrededor de ti. ¡Te aseguramos una aventura inolvidable llena de sorpresas y descubrimientos!</p>
                <div className="container mb-5 row row-cols-lg-4  mx-auto">
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 1" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 2" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 3" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 4" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 5" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 6" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 6" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Caché 8" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                    <button type="button" class="btn btn-secondary d-block mx-auto">Descubre más Cachés</button>
                </div>

            </div>

        </div>
    );
}
