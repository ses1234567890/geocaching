import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Cluster } from "../component/cluster";
import { Context } from "../store/appContext";

import Mapa from "../../img/mapa.png"


export const PerfilCache = () => {
    const params = useParams();
    const [selectedDiv1, setSelectedDiv1] = useState(true);
    const [selectedDiv2, setSelectedDiv2] = useState(false);
    const [selectedDiv3, setSelectedDiv3] = useState(false);
    const [perfilDetails, setPerfilDetails] = useState({});

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/perfil-cache/" + params.id);
        const data = await response.json();
        setPerfilDetails(data)

    }

    const mostrarDatosCache = () => {
        setSelectedDiv1(!selectedDiv1);
        setSelectedDiv2(false);
        setSelectedDiv3(false);
    };

    const mostrarComentariosCache = () => {
        setSelectedDiv1(false);
        setSelectedDiv2(!selectedDiv2);
        setSelectedDiv3(false);
    };

    const mostrarFotosCache = () => {
        setSelectedDiv1(false);
        setSelectedDiv2(false);
        setSelectedDiv3(!selectedDiv3);
    };


    return (

        <div class="container">
            <div class="row ">
                <div >
                    <div class="btn-group container mt-5" aria-label="Basic checkbox toggle button group" >
                        <label class="btn btn-outline-primary mx-auto " onClick={mostrarDatosCache}>Información Caché</label>
                        <label class="btn btn-outline-primary mx-auto " onClick={mostrarComentariosCache}> Comentarios</label>
                        <label class="btn btn-outline-primary mx-auto " onClick={mostrarFotosCache}> Galerías de fotos</label>
                    </div>
                </div>



                <div >
                    {selectedDiv1 ? (
                        <div className="container-fluid row" >
                            <h2 className="text-center mt-5">Datos Caché {perfilDetails.name}</h2>
                            <div className="col-4" >
                                <h3 className="text-start mb-5 mt-5 text-decoration-underline align-items-start ">Ubicación</h3>
                                <img class="img-fluid rounded mx-auto d-block d-flex align-items-center" src={Mapa} alt="..." />

                            </div>

                            <div className="col-8" >
                                <h3 className="text-start mb-5 mt-5 text-decoration-underline">Información</h3>
                                <ul class="list-group mb-5">
                                    <li class="list-group-item list-group-item-warning"><strong>Nombre:</strong> {perfilDetails.name}</li>
                                    <li class="list-group-item list-group-item-warning"><strong>Coordenadas:</strong> {perfilDetails.coordinates_x }/ {perfilDetails.coordinates_y} </li>
                                    <li class="list-group-item list-group-item-warning"><strong>Country:</strong> {perfilDetails.country}</li>
                                    <li class="list-group-item list-group-item-warning"><strong>City:</strong> {perfilDetails.city}</li>
                                    <li class="list-group-item list-group-item-warning"><strong>difficulty:</strong> {perfilDetails.difficulty} </li>
                                    <li class="list-group-item list-group-item-warning"><strong>Size:</strong> {perfilDetails.size} </li>
                                    <li class="list-group-item list-group-item-warning"><strong>Description:</strong> {perfilDetails.description}</li>
                                </ul>
                            </div>
                        </div>

                    ) : null}
                    {selectedDiv2 ? (
                        <div className="container-fluid ">
                            <h2 className="text-center mb-5 mt-5">Comentarios sobre Caché</h2>
                            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 mb-3 ">
                            </div>
                            <nav aria-label="Page navigation example mt-5" >
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled" >
                                        <a class="page-link">Previous</a>
                                    </li>
                                    <li class="page-item " ><a class="page-link" href="#">1</a></li>
                                    <li class="page-item "><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    ) : null}
                    {selectedDiv3 ? (
                        <div className="container-fluid">
                            <h2 className="text-center mb-5 mt-5">Galería de Fotos de Caché</h2>
                            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 mb-3">
                            </div>
                            <nav aria-label="Page navigation example mt-5" >
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled" >
                                        <a class="page-link">Previous</a>
                                    </li>
                                    <li class="page-item " ><a class="page-link" href="#">1</a></li>
                                    <li class="page-item "><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>

    );
}