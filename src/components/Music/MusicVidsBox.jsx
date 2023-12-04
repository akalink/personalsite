import React from "react";
import "./Music.css";

function MusicVidsBox(props){
    return(
        <div className="vidGallery">
            <iframe width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
        </div>
    )

}

export default MusicVidsBox

