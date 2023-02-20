import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cluster } from "../component/cluster";
import { Mapa } from "../component/mapa";



export const Demo = () => {
	const { store, actions } = useContext(Context);
	console.log("@@@@@@@@")
	return (

		<div>
			<div class="card text-bg-dark">
				<img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Wetterstein_mountains_banner.jpg" class="card-img" alt="..." />
				<div class="card-img-overlay align-items-center d-flex">
					<form class="w-50 m-auto p-0" role="search">
						<div class="d-flex justify-content-center">
							<input class="form-control" type="search" placeholder="Search" aria-label="Search" />
						</div>
					</form>
				</div>
			</div>
			<div className="container">
				<h1 className="text-center mt-4 mb-3">Geocaching: Descubre tesoros alrededor del Mundo</h1>
				<p>Bienvenido a nuestro sitio web sobre geocaching, donde podrás vivir una experiencia única y emocionante mientras exploras el mundo en busca de tesoros escondidos. Conviértete en parte de una extensa comunidad de descubridores; todo ello combinando senderismo, emoción de un juego, tesoros ocultos y momentos inolvidables. ¡Comienza tu aventura ahora!</p>
			</div>
			<div className="container">
				<h2 className="text-center mb-3 mt-4">Comienza a Explorar</h2>
				<p>Entra en el emocionante mundo del geocaching. Descubre tesoros ocultos y vive una experiencia única en cada rincón del planeta. ¡Comienza tu aventura hoy mismo.</p>
				<div className="container mb-5 row row-cols-lg-3">
					<Cluster classboton="d-none" cardBorder="card border-2 border-dark" cardTitle="Cachés" image="https://media.traveler.es/photos/613769fabf63e581e0100e3d/master/w_1600%2Cc_limit/150236.jpg" />
					<Cluster classboton="d-none" cardBorder="card border-2 border-dark" cardTitle="Blog" image="https://i.blogs.es/199e7b/simon-english-672450-unsplash/840_560.jpeg" />
					<Cluster classboton="d-none" cardBorder="card border-2 border-dark" cardTitle="Ranking" image="https://unomasunoteam.com/wp-content/uploads/2020/03/en-busca-del-tesoro-team-buildng-main-min.jpg" />
				</div>
			</div>
			<div className="container ">
				<h2 className="text-center mb-3 mt-4">Accede a los Cachés más Populares entre Nuestra Comunidad</h2>
				<p>¡No te pierdas la oportunidad de descubrir los tesoros escondidos de la comunidad! Selecciona los cachés más populares y explora los lugares más interesantes alrededor de ti. ¡Te aseguramos una aventura inolvidable llena de sorpresas y descubrimientos!</p>
				<div className="container mb-5 row row-cols-lg-4">
					<div>
						<div>
							<Mapa />
							<div className="card">
								<div class="card-body">
									<h5 className="card-title">Dehesa de la Villa</h5>
									<h6 className="card-subtitle mb-2 text-muted">Popularidad TOP</h6>
									<p className="card-text">Este caché es conocido por la ruta preciosa que se hace en pleno Madrid</p>
									<button href="#" class="card-link">Descubre más</button>
								</div>
							</div>
						</div>
					</div>
					<div>
						<Mapa />
					</div>
					<div>
						<Mapa />
					</div>
					<div>
						<Mapa />
					</div>


					<button type="button" class="btn btn-secondary d-block mx-auto mt-2">Descubre más Cachés</button>
				</div>

			</div>

		</div>
	);
};
