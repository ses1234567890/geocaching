import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Cluster = ({ cardTitle, image, link, cardBorder, boton, classboton }) => {
	return (

		<div className="container mb-3 d-flex">
			<div className="col">
				<div className={cardBorder}>
					<Link to={link} className="text-decoration-none">
						<img src={image} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title text-center">{cardTitle}</h4>
							<button className={classboton}>{boton} </button>

						</div>
					</Link>
				</div>
			</div>
		</div>
	)
};