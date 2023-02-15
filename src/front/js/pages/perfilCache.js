import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cluster } from "../component/cluster";
import { Context } from "../store/appContext";



export const PerfilCache = () => {
    const [selectedDiv1, setSelectedDiv1] = useState(true);
    const [selectedDiv2, setSelectedDiv2] = useState(false);
    const [selectedDiv3, setSelectedDiv3] = useState(false);

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
                    <div class="btn-group container" aria-label="Basic checkbox toggle button group" >
                        <label class="btn btn-outline-primary mx-auto " onClick={mostrarDatosCache}>Información Caché</label>
                        <label class="btn btn-outline-primary mx-auto " onClick={mostrarComentariosCache}> Comentarios</label>
                        <label class="btn btn-outline-primary mx-auto " onClick={mostrarFotosCache}> Galerías de fotos</label>
                    </div>
                </div>



                <div >
                    {selectedDiv1 ? (
                        <div className="container-fluid row" >
                            <h2 className="text-center mt-5">Datos Caché</h2>
                            <div className="col-4" >
                                <h3 className="text-start mb-5 mt-5 text-decoration-underline align-items-start ">Ubicación</h3>
                                <img class="img-fluid rounded mx-auto d-block d-flex align-items-center" src="https://maptiles02.geocaching.com/tile/14/4544/6977.png?token=eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTGVCcm9uY2l0eSIsInBnZCI6IjFiODE5ZDgyLThjMzctNDYyYS1iZDhlLTZmNWIxN2QwOTRhYyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNDQyNzc4MzEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUHVibGljIiwiQmFzaWMiXSwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjE3YjFiYWI0LTZjNTMtNDU0Yy04ZWE5LTJhNjY0ODkxYTQzMSIsImxnZCI6IjcyYzQ2YWJhLWI5MTctNDJhMS1hNzYyLTVjYmZkYmY2ZDJiYSIsInNjb3BlIjpbIndlYiIsIm1hcHRpbGUiLCJnYXJtaW4iXSwibmJmIjoxNjc2NDU4OTczLCJleHAiOjE2NzY0NjI1NzMsImlzcyI6Imh0dHBzOi8vb2F1dGguZ2VvY2FjaGluZy5jb20vdG9rZW4iLCJhdWQiOiIxN2IxYmFiNC02YzUzLTQ1NGMtOGVhOS0yYTY2NDg5MWE0MzEifQ.R4sUfuuMM1OLNoQlhSO1xuWK-CRpsqZEsb5ti2Lxf3M" alt="..." />

                            </div>

                            <div className="col-8" >
                                <h3 className="text-start mb-5 mt-5 text-decoration-underline">Información</h3>
                                <ul class="list-group mb-5">
                                    <li class="list-group-item list-group-item-warning"><strong>Coordenadas:</strong> N 30° 06,993' / O 81° 20,705 </li>
                                    <li class="list-group-item list-group-item-warning"><strong>Country:</strong> Spain</li>
                                    <li class="list-group-item list-group-item-warning"><strong>City:</strong> Madrid</li>
                                    <li class="list-group-item list-group-item-warning"><strong>difficulty:</strong> medium </li>
                                    <li class="list-group-item list-group-item-warning"><strong>Size:</strong> small </li>
                                    <li class="list-group-item list-group-item-warning"><strong>Description:</strong> Al seguir las coordenadas GPS y las pistas que te llevarán a lo largo de una hermosa ruta rodeada de arroyos y naturaleza, finalmente llegarás a un lugar donde verás una gran roca en el centro de un claro. Si te acercas a la roca y la examinas detenidamente, notarás que hay una pequeña cueva en su base, apenas visible pero accesible.
                                        Dentro de la cueva encontrarás un pequeño contenedor de plástico o metal decorado con dibujos y símbolos relacionados con la naturaleza, como flores y hojas. Al abrirlo, encontrarás una libreta o registro donde podrás escribir tu nombre y la fecha en que encontraste la caché, así como algunos objetos pequeños como llaveros, monedas y otros recuerdos que los jugadores anteriores han dejado allí.
                                        Además de estos objetos, encontrarás un pequeño tesoro adicional. Un collar hecho a mano con un colgante de cristal tallado en forma de hoja, que simboliza la belleza de la naturaleza que te rodea. Si deseas llevarte el collar a casa, podrás hacerlo siempre y cuando dejes algo de valor similar a cambio.
                                        Este caché hipotético te permitiría disfrutar de una hermosa caminata por la naturaleza, mientras te desafía a seguir las pistas y coordinadas para encontrar el tesoro escondido. </li>
                                </ul>
                            </div>
                        </div>

                    ) : null}
                    {selectedDiv2 ? (
                        <div className="container-fluid ">
                            <h2 className="text-center mb-5 mt-5">Comentarios sobre Caché</h2>
                            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 mb-3 ">
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="Comentario 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKGfBwR_t-CJ95quTElxU4H9R1WEu1tbSGD02aTmngtylR7tGcdasCYe_i0-gse6f6E&usqp=CAU" />
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
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 1" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 2" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 3" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 4" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 5" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 6" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 6" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
                                <Cluster classboton="d-none" cardBorder="card border-2 border-primary" cardTitle="imagen 8" image="https://www.shutterstock.com/image-photo/woman-hiker-kisses-beautiful-adventurous-260nw-2043843839.jpg" />
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