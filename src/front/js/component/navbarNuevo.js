import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png"
import person from "../../img/person.png"



export const NavbarNuevo = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    return (
        <div>
            {store.userActive ? (
                <div className="card text-bg-white">
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


            <ul class="nav justify-content-center alert alert-primary p-1 border-0">
                {store.userActive ? (
                    <>
                        <li class="nav-item d-none d-lg-block">
                            <Link to="/demo" className="nav-link active  " aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item d-none d-lg-block">
                            <Link to="/mi-Perfil" className="nav-link active" aria-current="page">
                                Faqs
                            </Link>
                        </li>
                        <li class="nav-item d-none d-lg-block ">
                            <Link to="/blog" className="nav-link active " aria-current="page">
                                Blog
                            </Link>
                        </li>
                        <li class="nav-item dropdown d-none d-lg-block">
                            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                cachés
                            </Link>
                            <ul class="dropdown-menu ">
                                <li class="nav-item d-none d-lg-block  ">
                                    <Link to="/demo" className="  nav-link active desplegable" aria-current="page">
                                        Tipos de Cachés
                                    </Link>
                                </li>
                                <li class="nav-item d-none d-lg-block de">
                                    <Link to="/reg_cache" className="  nav-link active desplegable" aria-current="page">
                                        Registro de Cachés
                                    </Link>
                                </li>
                                <li class="nav-item d-none d-lg-block desplegable">
                                    <Link to="/perfil-cache" className="  nav-link active desplegable" aria-current="page">
                                        Perfil de Caché
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <div class="dropdown-center ">
                            <button class="btn btn-secondary dropdown-toggle d-none d-lg-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user"></i>
                            </button>
                            <ul class="dropdown-menu">

                                <Link to="/mi-Perfil" class="text-decoration-none">
                                    <li><a class="dropdown-item" href="#">Mi perfil</a></li>
                                </Link>
                                <li class="nav-item mx-3 text-danger"
                                    onClick={async () => {
                                        if (await actions.logout()) {
                                            navigate("/");
                                        }
                                    }}
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <li class="nav-item d-none d-lg-block">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item d-none d-lg-block">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Faqs
                            </Link>
                        </li>
                        <li class="nav-item d-none d-lg-block">
                            <Link to="/login" className=" altaLogin nav-link active" aria-current="page">
                                Login
                            </Link>
                        </li>
                        <li class="nav-item d-none d-lg-block">
                            <Link to="/register" className="altaRegister nav-link active" aria-current="page">
                                Register
                            </Link>
                        </li>

                    </>
                )}


            </ul>

            <div class=" Orbital position-fixed end-0 mx-5 d-md-none">
                <button type="button" class="  btn btn-secondary btn-floating d-block d-md-none " data-bs-toggle="dropdown" aria-expanded="false">
                    <i class=" fas fa-bars fa-1x"></i>
                </button>

                <ul class="dropdown-menu">
                    {store.userActive ? (
                        <>
                            <li class="nav-item">
                                <Link to="/demo" className="nav-link active text-dark" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/blog" className="nav-link active text-dark" aria-current="page">
                                    Blog
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/blog" className="nav-link active text-dark" aria-current="page">
                                    Faqs
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                    cachés
                                </Link>
                                <ul class="dropdown-menu">
                                    <li class="nav-item d-none d-lg-block">
                                        <Link to="/demo" className="nav-link active text-dark" aria-current="page">
                                            Tipos de Cachés
                                        </Link>
                                    </li>
                                    <li class="nav-item d-none d-lg-block">
                                        <Link to="/reg_cache" className="nav-link active text-dark" aria-current="page">
                                            Registro de Cachés
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li><hr class="dropdown-divider" /></li>
                            <li class="nav-item">
                                <Link to="mi-Perfil" className="nav-link active text-dark" aria-current="page">
                                    Mi Perfil
                                </Link>

                            </li>
                            <li class="nav-item mx-3 text-danger"
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
                                <li class="nav-item">
                                    <Link to="/" className="nav-link active text-dark" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/blog" className="nav-link active text-dark" aria-current="page">
                                        Faqs
                                    </Link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li class="nav-item">
                                    <Link to="/login" className="nav-link active text-primary" aria-current="page">
                                        Login
                                    </Link>
                                </li>
                                <li class="nav-item">
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