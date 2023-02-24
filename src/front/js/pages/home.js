import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCaches();
  }, [])

  return (
    <div>
      <div className="card text-bg-dark">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Wetterstein_mountains_banner.jpg"
          className="card-img mw-50"
          alt="Mountain"
          height=""
        />

      </div>
      <div className="card-group">
        <div className="card">
          <img
            src="https://www.geocaching.com/play/Content/images/lohp/illustrations/signal.svg"
            className="card-img-top w-25"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">1. Crea una cuenta </h5>
            <p className="card-text">
              Crea una cuenta en línea o a través de la aplicación oficial de
              Geocaching® para ver un mapa de los geocachés cercanos.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.geocaching.com/play/Content/images/lohp/illustrations/phoneandpin.svg"
            className="card-img-top w-25"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">2. Encuentra un geocaché</h5>
            <p className="card-text">
              Usa la app para navegar a un geocaché cercano. ¡No olvides el
              móvil!
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.geocaching.com/play/Content/images/lohp/illustrations/notebookpencil.svg"
            className="card-img-top w-25"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">3. Comparte tu experiencia</h5>
            <p className="card-text">
              Cuando encuentres el geocaché, abre el código QR y registra en la
              app el caché. Vuelve a esconder el geocaché donde lo encontraste y
              registra tu experiencia online.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
