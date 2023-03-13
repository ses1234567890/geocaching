import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png"
import person from "../../img/person.png"
import { Buscador } from "../component/buscador";



export const NavbarNuevo = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [showSearch, setShowSearch] = useState(false);




    const mostrarBuscador = () => {
        setShowSearch(!showSearch);

    };

    return (
        <div>
            {store.userActive ? (
                <div className=" card text-bg-white sticky-sm-top">
                    <Link to="/demo" className="">
                        <img
                            src={logo}
                            className="card-img mw-50"
                            alt="Mountain"
                            height=""
                        />
                    </Link>
                </div>) : (
                <div className="card text-bg-white">
                    <Link to="/" className="">
                        <img
                            src={logo}
                            className="card-img mw-50"
                            alt="Mountain"
                            height=""
                        />
                    </Link></div>)}


            <ul className="nav justify-content-center alert alert-primary p-1 border-0">
                {store.userActive ? (
                    <>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/demo" className="nav-link active " onClick={() => setShowSearch(false)} aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block" onClick={() => setShowSearch(false)}>
                            <Link to="/mi-Perfil" className="nav-link active" aria-current="page">
                                Faqs
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block" onClick={() => setShowSearch(false)}>
                            <Link to="/blog" className="nav-link active " aria-current="page">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item dropdown d-none d-lg-block" onClick={() => setShowSearch(false)}>
                            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                cachés
                            </Link>
                            <ul className="dropdown-menu ">
                                <li className="nav-item d-none d-lg-block " onClick={() => setShowSearch(false)}>
                                    <Link to="/tipos-de-caches" className="  nav-link active desplegable" aria-current="page">
                                        Tipos de Cachés
                                    </Link>
                                </li>
                                <li className="nav-item d-none d-lg-block de" onClick={() => setShowSearch(false)}>
                                    <Link to="/reg_cache" className="  nav-link active desplegable" aria-current="page">
                                        Registro de Cachés
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <div className="dropdown-center ">
                            <button className="btn btn-secondary dropdown-toggle d-none d-lg-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user"></i>
                            </button>
                            <ul className="dropdown-menu">

                                <Link to="/mi-Perfil" className="text-decoration-none">
                                    <button className="dropdown-item" href="#">Mi perfil</button>
                                </Link>

                                <button
                                    className="dropdown-item nav-item me-1 text-danger text-aling"
                                    onClick={async () => {
                                        if (await actions.logout()) {
                                            navigate("/");
                                        }
                                    }}>Logout</button>


                            </ul>
                        </div>
                        <li className="nav-item d-none d-lg-block ">
                            <Link to="/mi-Perfil" className="nav-link active text-danger" aria-current="page">
                                Hola {store.currentUser.name}
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <button type="button" className="btn btn-light" onClick={mostrarBuscador}><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                        </li>


                    </>
                ) : (
                    <>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Faqs
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/login" className=" altaLogin nav-link active" aria-current="page">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/register" className="altaRegister nav-link active" aria-current="page">
                                Register
                            </Link>
                        </li>

                    </>
                )}


            </ul>

            {showSearch ? (
                <Buscador />) : null}

            <div className=" Orbital position-fixed end-0 mx-5 d-md-none">
                <button type="button" className="  btn btn-secondary btn-floating d-block d-md-none " data-bs-toggle="dropdown" aria-expanded="false">
                    <i className=" fas fa-bars fa-1x"></i>
                </button>

                <ul className="dropdown-menu">
                    {store.userActive ? (
                        <>
                            <li className="nav-item">
                                <Link to="/demo" className="nav-link active text-dark" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link active text-dark" aria-current="page">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link active text-dark" aria-current="page">
                                    Faqs
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                    cachés
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item d-none d-lg-block">
                                        <Link to="/tipos-de-caches" className="nav-link active text-dark" aria-current="page">
                                            Tipos de Cachés
                                        </Link>
                                    </li>
                                    <li className="nav-item d-none d-lg-block">
                                        <Link to="/reg_cache" className="nav-link active text-dark" aria-current="page">
                                            Registro de Cachés
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                            <li><hr className="dropdown-divider" /></li>
                            <li className="nav-item">
                                <Link to="mi-Perfil" className="nav-link active text-dark" aria-current="page">
                                    Mi Perfil
                                </Link>

                            </li>
                            <li className="nav-item mx-3 text-danger"
                                onClick={async () => {
                                    if (await actions.logout()) {
                                        navigate("/");
                                    }
                                }}
                            >
                                Logout
                            </li>
                        </>)
                        : (
                            <>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active text-dark" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blog" className="nav-link active text-dark" aria-current="page">
                                        Faqs
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active text-primary" aria-current="page">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link active text-success" aria-current="page">
                                        Register
                                    </Link>
                                </li>

                            </>)}
                </ul>
            </div>


        </div>

    );

};