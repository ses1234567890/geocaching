import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { MapsGoogle } from "../component/mapsGoogle";

export const Cache = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [coordinatesY, setCoordinatesY] = useState("");
    const [coordinatesX, setCoordinatesX] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [size, setSize] = useState("");
    const [qrURL, setQrURL] = useState("");
    const [error, setError] = useState("");

    const sendCacheRegitral = async () => {
        const response = await fetch(
            process.env.BACKEND_URL + "/api/reg_cache",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    country: country,
                    city: city,
                    postal_code: postalCode,
                    coordinates_y: coordinatesY,
                    coordinates_x: coordinatesX,
                    difficulty: difficulty,
                    size: size,
                    qr_url: qrURL,
                }),
            }
        );
        const data = await response.json();
        if (response.ok) {
            navigate("/");
        } else {
            setError(data.response);
        }
    };
    console.log("que pasa que tal??")
    return (
        <>
            <div className="MapGoo col-12 p-2">
                <MapsGoogle />
            </div>
            <div className="container col-6 mt-3 border rounded">
                <h2 className="text-center m-3">Register Cache</h2>
                <form>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="name">
                            Name:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="name"
                                placeholder="name"
                                value={name}
                                onChange={(e) => {
                                    setError(false);
                                    setName(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="description">
                            Descripion:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="description"
                                placeholder="description"
                                value={description}
                                onChange={(e) => {
                                    setError(false);
                                    setDescription(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="country">
                            Country:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="country"
                                placeholder="country"
                                value={country}
                                onChange={(e) => {
                                    setError(false);
                                    setCountry(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="City">
                            City:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="City"
                                placeholder="City"
                                value={city}
                                onChange={(e) => {
                                    setError(false);
                                    setCity(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="postalCode">
                            Postal code:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="postalCode"
                                placeholder="postalCode"
                                value={postalCode}
                                onChange={(e) => {
                                    setError(false);
                                    setPostalCode(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="coordinatesY">
                            Coordinates Y:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="coordinatesY"
                                placeholder="coordinatesY"
                                value={coordinatesY}
                                onChange={(e) => {
                                    setError(false);
                                    setCoordinatesY(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="coordinatesX">
                            Coordinates X:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="coordinatesX"
                                placeholder="coordinatesX"
                                value={coordinatesX}
                                onChange={(e) => {
                                    setError(false);
                                    setCoordinatesX(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="difficulty">
                            Difficulty:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="difficulty"
                                placeholder="difficulty"
                                value={difficulty}
                                onChange={(e) => {
                                    setError(false);
                                    setDifficulty(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="size">
                            Size:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="size"
                                placeholder="size"
                                value={size}
                                onChange={(e) => {
                                    setError(false);
                                    setSize(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="row my-3">
                        <label className="col-sm-2 col-form-label" htmlFor="qrURL">
                            QR URL:{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="qrURL"
                                placeholder="qrURL"
                                value={qrURL}
                                onChange={(e) => {
                                    setError(false);
                                    setQrURL(e.target.value);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="text-center mt-2 p-3 ">
                        <button
                            className="btn btn-success btn-lg"
                            onClick={() => {
                                sendCacheRegitral()
                            }}
                        >
                            Register Cache
                        </button>
                        {error ? <p className="alert alert-warning mt-2">{error}</p> : null}
                    </div>
                </form>
            </div>
        </>
    );
};