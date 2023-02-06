import React, { Component } from "react";

export const Footer = () => (
  <footer className="text-center text-lg-start bg-white text-muted">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Conecta con nosotros en nuestras redes sociales:</span>
      </div>
      <div>
        <a href="" className="me-4 link-secondary">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-secondary"></i>GeoCaching
            </h6>
            <p>
              Bienvenido a la comunidad de encuentra tesoros más grande del
              Planeta Tierra.
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Sobre Geocahing</h6>
            <p>
              <a href="#!" className="text-reset">
                Preguntas frecuentes
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Empleo
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Prensa
              </a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
            <p>
              <i className="fas fa-home me-3 text-secondary"></i>España
            </p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary"></i>
              info@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="text-center p-4">
      © 2022 Copyright:
      <a class="text-reset fw-bold" href="https://geocaching.com/">
        GeoCaching
      </a>
    </div>
  </footer>
);
