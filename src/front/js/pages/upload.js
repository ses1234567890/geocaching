import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const UploadView = props => {
    const { store, actions } = useContext(Context);
    const [files, setFiles] = useState(null)
    const uploadImage = (evt) => {
        evt.preventDefault();
        console.log("This are the files", files);

        let body = new FormData();
        body.append("profile_image", files[0]);

        const options = {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body,
        }

        fetch(process.env.BACKEND_URL + "/api/upload", options)
            .then(resp => resp.json())
            .then(data => console.log("Success", data))
            .catch(error => console.error("Error", error));

    };

    return (
        <div className="jumbotron">
            <form onSubmit={uploadImage}>
                <input type="file" onChange={(e) => setFiles(e.target.files)} />
                <button>Upload</button>
            </form>
        </div>
    )
};

UploadView.propTypes = {
    match: propTypes.object
}