
import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";

export const Buscador = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [query, setQuery] = useState({ city: '', size: '', difficulty: '' });
	const [hasFilters, setHasFilters] = useState(false);

	const handleChange = (event) => {

		const value = event.target.value;
		setQuery({ ...query, [event.target.name]: value });
		const trimmedValue = value.trim();
		if (trimmedValue !== '') {
			setHasFilters(true);
		} else if (query[event.target.name].trim() !== trimmedValue) {
			setHasFilters(true);
		} else {
			setHasFilters(false);
		}

	};




	const filterCaches = () => {
		const normalizedQuery = {
			city: query.city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
			size: query.size.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
			difficulty: query.difficulty.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
		};
		const trimmedQuery = {
			city: normalizedQuery.city.trim(),
			size: normalizedQuery.size.trim(),
			difficulty: normalizedQuery.difficulty.trim()
		};

		return store.caches.filter(
			cache =>
				cache.city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(trimmedQuery.city) &&
				cache.size.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(trimmedQuery.size) &&
				cache.difficulty.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(trimmedQuery.difficulty)
		);
	};



	const cachesToShow = filterCaches();

	return (
		<div className="container mx-auto">
			<div className=" row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 m-5 alert alert-primary border border-primary ">
				<input placeholder="Country, City ..." type="text" name="city" value={query.city} onChange={handleChange} />
				<input placeholder="Size ..." type="text" name="size" value={query.size} onChange={handleChange} />
				<input placeholder="Difficulty ..." type="text" name="difficulty" value={query.difficulty} onChange={handleChange} />
			</div>
			{hasFilters && cachesToShow.length > 0 ? (
				<div>
					<div className="container mb-5 row row-cols-lg-4 mx-auto gx-3 flex-nowrap overflow-auto pb-3">
						{cachesToShow.map((cache) => {
							return (
								<div className="card" key={cache.id}>
									<img src="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{cache.city}</h5>
										<p className="card-text">{cache.name}</p>
										<Link to={"/perfil-cache/" + cache.id} className="text-decoration-none">
											<a href="#" className="btn btn-primary">Ver Detalles</a>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			) : null}
		</div>
	);
};

