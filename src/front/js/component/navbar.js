import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0" to="#">
            <img
              src="https://www.theredlionpreston.co.uk/wp-content/uploads/Logo_Geocaching_Horiz_Emerald.png"
              height="15"
              alt="GeoCaching logo"
            />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Tienda online
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Preguntas Frecuentes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="row me-1">
          <button type="button" className="col btn btn-outline-success">
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
