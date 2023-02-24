import React, { useRef, useState } from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
    width: "auto",
    height: '400px'
};


export const MapsGoogle = () => {
    const inputRef = useRef()
    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523
    })
    const handlePlace = () => {
        const [place] = inputRef.current.getPlaces()
        setCenter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        })
        console.log(inputRef.current.getPlaces())
    }

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCEDRwEjbupXfWxpRrIvaclyagiFo554sw"
            libraries={["places"]}
        >
            <StandaloneSearchBox onLoad={ref => inputRef.current = ref} onPlacesChanged={handlePlace}>
                <input type="text" />
            </StandaloneSearchBox>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}   