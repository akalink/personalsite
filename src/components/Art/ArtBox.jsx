import React from "react";
import './Art.css' 

function ArtBox(props) {
    return (
        <div className="imageGallery">
            <img src={props.img} alt={props.alt} />
            <p><i>{props.comment}</i></p>
        </div>
    )
}

export default ArtBox