import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cluster } from "../component/cluster";
import { Context } from "../store/appContext";



export const MiPerfil = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");


    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
    const [showDiv5, setShowDiv5] = useState(false);

    useEffect(() => {
        setEmail(store.currentUser.email);
        setName(store.currentUser.name);
        setCountry(store.currentUser.country);
        setCity(store.currentUser.city);
    }, [store.currentUser])






    const mostrarDatosPersonales = () => {
        setShowDiv1(true);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
    };

    const mostrarcachesPropios = () => {
        setShowDiv1(false);
        setShowDiv2(true);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(false);
    };

    const mostrarcachesEncontrados = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(true);
        setShowDiv4(false);
        setShowDiv5(false);
    };


    const mostrarCachesFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(true);
        setShowDiv5(false);
    };

    const mostrarPostsFavoritos = () => {
        setShowDiv1(false);
        setShowDiv2(false);
        setShowDiv3(false);
        setShowDiv4(false);
        setShowDiv5(true);
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
                                    <button className="mb-3 btn btn-danger btn-sm">Subir Foto </button>
                                </div>
                            </div>
                            <label for="exampleFormControlInput1" class="form-label mt-3">Nombre</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" value={name}
                                onChange={(e) => { setName(e.target.value); }} placeholder={store.currentUser.name} />
                            <label for="exampleFormControlInput1" class="form-label mt-3">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" value={email}
                                onChange={(e) => { setEmail(e.target.value); }} placeholder={store.currentUser.email} />
                            <label for="exampleFormControlInput1" class="form-label mt-3 ">Password</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" value={password}
                                onChange={(e) => { setPassword(e.target.value); }} placeholder={store.currentUser.password} />
                            <label for="exampleFormControlInput1" class="form-label mt-3 ">País</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" value={country}
                                onChange={(e) => { setCountry(e.target.value); }} placeholder={store.currentUser.country} />
                            <label for="exampleFormControlInput1" class="form-label mt-3">City</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" value={city}
                                onChange={(e) => { setCity(e.target.value); }} placeholder={store.currentUser.city} />
                            <div class="d-flex justify-content-end">
                                <button className="mb-5 mt-5 btn btn-danger btn-sm" onClick={(e) => {
                                    e.preventDefault();
                                    actions.getUpdateUser(email, name, country, city);
                                }}>Guardar Cambios </button>
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
                            <h2 className="text-center mb-5">Mi Posts Favoritoss</h2>

                        </div>
                    ) : null}

                </div>
            </div>

        </div>
    );
}

