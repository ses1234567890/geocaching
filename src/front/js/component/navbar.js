import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </ button>
        <Link className="navbar-brand" to="#">
          <img
            src="https://www.theredlionpreston.co.uk/wp-content/uploads/Logo_Geocaching_Horiz_Emerald.png"
            height="15"
            alt="GeoCaching logo"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
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
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="col btn btn-outline-success">
            Iniciar sesión
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Iniciar sesion</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Usuario:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Add the caption of your post here"></textarea>
                  </div>
                  <button class="btn border-secondary" type="button"><i class="fa-solid fa-camera"></i></button>
                  <button class="btn border-secondary" type="button"><i class="fa-solid fa-location-dot"></i></button>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-success">Publish</button>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="col btn btn-outline-danger">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};
