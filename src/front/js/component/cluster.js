import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Cluster = ({ cardTitle, image, cardBorder, boton, classboton }) => {
	return (

		<div className="container mb-3 d-flex">
			<div class="col">
				<div class={cardBorder}>
					<Link to="/tipos-de-caches" class="text-decoration-none">
						<img src={image} class="card-img-top" alt="..." />
						<div class="card-body">
							<h4 class="card-title text-center">{cardTitle}</h4>
							<button className={classboton}>{boton} </button>

						</div>
					</Link>
				</div>
			</div>
		</div>
	)
};