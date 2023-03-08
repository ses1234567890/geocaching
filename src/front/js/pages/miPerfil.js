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
    const [showDiv6, setShowDiv6] = useState(false);
    const [pendingCaches, setPendingCaches] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if (store.admin) {
            getCachesPending();
        }
    }, [store.admin])

    const acceptCache = async (id) => {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/admin_accept_cache",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id: id,
                }),
            }
        );
        const responsetoJson = await response.json();
        if (response.ok) {
            getCachesPending();
        } else {
            setError(responsetoJson.response);
        }
    };

    const declineCache = async (id) => {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/admin_decline_cache",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id: id,
                }),
            }
        );
        const responsetoJson = await response.json();
        if (response.ok) {
            getCachesPending();
        } else {
            setError(responsetoJson.response);
        }
    };

    const getCachesPending = async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/admin_cache_moderation", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        const data = await response.json();
        setPendingCaches(data.results)
    }

    const mostrarDatosPersonales = () => {
        setShowDiv1(!showDiv1);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
    };

    const mostrarcachesPropios = () => {
        setShowDiv1(false);
        setShowDiv2(!showDiv2);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
    };

    const mostrarcachesEncontrados = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(!showDiv3);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(false);
    };


    const mostrarCachesFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(!showDiv4);
        setShowDiv5(false);
        setShowDiv6(false);
    };

    const mostrarPostsFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(!showDiv5);
        setShowDiv6(false);
    };

    const mostrarAdmin = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
        setShowDiv6(!showDiv6);
    };

    return (
        <div className="container mb-5">
            <h1 className={`${showDiv1 || showDiv2 || showDiv3 || showDiv4 || showDiv5 || showDiv6 ? "mb-5" : "text-center mb-5"}`}>GeoCaching - My Profile</h1>
            <div className=" row">

                <div className={`${showDiv1 || showDiv2 || showDiv3 || showDiv4 || showDiv5 || showDiv6 ? "col-4" : "col-12"} d-flex flex-column`}>


                    <button className={`${showDiv1 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarDatosPersonales}>Datos Personales </button>
                    <button className={`${showDiv2 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarcachesPropios}> Cachés Registrados </button>
                    <button className={`${showDiv3 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarcachesEncontrados}> Cachés Encontrados </button>
                    <button className={`${showDiv4 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarCachesFavoritos}> Cachés Favoritos </button>
                    <button className={`${showDiv5 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarPostsFavoritos}> Posts Favoritos </button>
                    {store.admin ? <button className={`${showDiv6 ? "w-75 mx-auto bg-primary text-white" : "w-75 mx-auto"} btn btn-outline-primary `} onClick={mostrarAdmin}> Admin panel </button> : null}
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
                                    <button className="mb-3 btn btn-danger btn-sm">Subir Foto </button>
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
                                <button className="mb-5 mt-5 btn btn-danger btn-sm">Guardar Cambios </button>
                            </div>
                        </div>
                    ) : null}
                    {showDiv2 ? (
                        <div >
                            <h2 className="text-center mb-5">Mi Cachés Registrados</h2>
                        </div>
                    ) : null}
                    {showDiv3 ? (
                        <div>
                            <h2 className="text-center mb-5">Mi Cachés Encontrados</h2>

                        </div>
                    ) : null}
                    {showDiv4 ? (
                        <div>
                            <h2 className="text-center mb-5">Mi Cachés Favoritos</h2>
                        </div>
                    ) : null}
                    {showDiv5 ? (
                        <div>
                            <h2 className="text-center mb-5">Mi Posts Favoritos</h2>

                        </div>
                    ) : null}
                    {showDiv6 ? (
                        <div>
                            <h2 className="text-center mb-5">Admin Panel</h2>
                            <div className="container mb-5 row row-cols-lg-2 mx-auto gx-3 text-center">
                                {pendingCaches.map((caches) => {
                                    return (
                                        <div className="card" key={caches.id}>
                                            <img src="https://thumbs.dreamstime.com/z/ciudad-de-mapas-con-ruta-gps-y-geo-navegaci%C3%B3n-para-entrega-en-la-calle-ubicaci%C3%B3n-app-map-road-town-park-river-cartograf%C3%ADa-229179316.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h4 className="card-text">{caches.name}</h4>
                                                <h5 className="card-title">{caches.state}, {caches.city}</h5>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={(e) => {
                                                        setError(false);
                                                        acceptCache(caches.id);
                                                    }}
                                                >Aprobar</button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) => {
                                                        setError(false);
                                                        declineCache(caches.id);
                                                    }}
                                                >Rechazar</button>
                                                <Link to={"/perfil-cache/" + caches.id} className="text-decoration-none">
                                                    <button className="btn btn-primary">Ver Detalles</button>
                                                </Link>
                                                {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    ) : null}

                </div>
            </div>

        </div >
    );
}

