import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cluster } from "../component/cluster";
import { Context } from "../store/appContext";



export const MiPerfil = () => {
    const { store, actions } = useContext(Context);

    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
    const [showDiv5, setShowDiv5] = useState(false);

    const mostrarDatosPersonales = () => {
        setShowDiv1(!showDiv1);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
    };

    const mostrarcachesPropios = () => {
        setShowDiv1(false);
        setShowDiv2(!showDiv2);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
    };

    const mostrarcachesEncontrados = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(!showDiv3);
        setShowDiv4(false);
        setShowDiv5(false);
    };


    const mostrarCachesFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(!showDiv4);
        setShowDiv5(false);
    };

    const mostrarPostsFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(!showDiv5);
    };

    return (
        <div className="container mb-5">
            <h1 className={`${showDiv1 || showDiv2 || showDiv3 || showDiv4 || showDiv5 ? "mb-5" : "text-center mb-5"}`}>GeoCaching - My Profile</h1>
            <div className=" row">

                <div className={`${showDiv1 || showDiv2 || showDiv3 || showDiv4 || showDiv5 ? "col-4" : "col-12"} d-flex flex-column`}>


                    <button className={`${showDiv1 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarDatosPersonales}>Datos Personales </button>
                    <button className={`${showDiv2 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarcachesPropios}> Cachés Registrados </button>
                    <button className={`${showDiv3 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarcachesEncontrados}> Cachés Encontrados </button>
                    <button className={`${showDiv4 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarCachesFavoritos}> Cachés Favoritos </button>
                    <button className={`${showDiv5 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarPostsFavoritos}> Posts Favoritos </button>
                </div>

                <div className="col-8">

                    {showDiv1 ? (
                        <div>
                            <div>
                                <h2 className="text-center mb-5">Perfil</h2>
                            </div>
                            <div className="d-flex align-items-end ">
                                <img src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg" class="img-thumbnail w-25" alt="..." />
                                <div className="m-3">
                                    <p>Puede cargar un archivo JPG, GIF o PNG. El límite de tamaño de archivo es de 4 MB.</p>
                                    <button className="mb-3 bg-danger text-white ">Subir Foto </button>
                                </div>
                            </div>
                            <label for="exampleFormControlInput1" class="form-label mt-3">Nombre</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                            <label for="exampleFormControlInput1" class="form-label mt-3">Apellidos</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1 " placeholder="Apellidos" />
                            <label for="exampleFormControlInput1" class="form-label mt-3 ">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1 " placeholder="Email" />
                            <label for="exampleFormControlInput1" class="form-label mt-3 ">Fecha de Nacimiento</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Fecha de Nacimiento" />
                            <label for="exampleFormControlInput1" class="form-label mt-3">País</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="País" />
                            <label for="exampleFormControlInput1" class="form-label mt-3">Ciudad</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ciudad" />
                            <div class="d-flex justify-content-end">
                                <button className="mb-5 mt-5 bg-danger text-white">Guardar Cambios </button>
                            </div>
                        </div>
                    ) : null}
                    {showDiv2 ? (
                        <div >
                            <h2 className="text-center mb-5">Mi Cachés Registrados</h2>
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 1" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 2" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 3" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 4" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 5" image="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" />

                        </div>
                    ) : null}
                    {showDiv3 ? (
                        <div>
                            <h2 className="text-center mb-5">Mi Cachés Encontrados</h2>
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 1" image="https://www.ui1.es/sites/default/files/blog/images/tesoro_retocada.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 2" image="https://www.ui1.es/sites/default/files/blog/images/tesoro_retocada.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 3" image="https://www.ui1.es/sites/default/files/blog/images/tesoro_retocada.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 4" image="https://www.ui1.es/sites/default/files/blog/images/tesoro_retocada.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 5" image="https://www.ui1.es/sites/default/files/blog/images/tesoro_retocada.jpg" />

                        </div>
                    ) : null}
                    {showDiv4 ? (
                        <div>
                            <h2 className="text-center mb-5">Mi Cachés Favoritos</h2>
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 1" image="https://i.pinimg.com/originals/a9/8b/57/a98b57872cdcfc51ed78e1577394d667.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 2" image="https://i.pinimg.com/originals/a9/8b/57/a98b57872cdcfc51ed78e1577394d667.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 3" image="https://i.pinimg.com/originals/a9/8b/57/a98b57872cdcfc51ed78e1577394d667.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 4" image="https://i.pinimg.com/originals/a9/8b/57/a98b57872cdcfc51ed78e1577394d667.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Caché 5" image="https://i.pinimg.com/originals/a9/8b/57/a98b57872cdcfc51ed78e1577394d667.jpg" />

                        </div>
                    ) : null}
                    {showDiv5 ? (
                        <div>
                            <h2 className="text-center mb-5">Mi Posts Favoritoss</h2>
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Post 1" image="https://media.traveler.es/photos/613769fabf63e581e0100e3d/master/w_1600%2Cc_limit/150236.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Post 2" image="https://media.traveler.es/photos/613769fabf63e581e0100e3d/master/w_1600%2Cc_limit/150236.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Post 3" image="https://media.traveler.es/photos/613769fabf63e581e0100e3d/master/w_1600%2Cc_limit/150236.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Post 4" image="https://media.traveler.es/photos/613769fabf63e581e0100e3d/master/w_1600%2Cc_limit/150236.jpg" />
                            <Cluster classboton="bg-danger text-white" boton="Delete" cardBorder="card border-2 border-primary" cardTitle="Post 5" image="https://media.traveler.es/photos/613769fabf63e581e0100e3d/master/w_1600%2Cc_limit/150236.jpg" />

                        </div>
                    ) : null}

                </div>
            </div>

        </div>
    );
}

