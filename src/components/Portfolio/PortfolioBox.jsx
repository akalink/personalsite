import React from "react";
import "./Portfolio.css";

function PortfolioBox(port){
    return(
        <div className="project">
            <h3>{port.title}</h3>
            <a href={port.link} target="_blank">Link to Repository</a>
            <p>{port.description}</p>
            <img src={port.pic} alt={port.picAlt}></img>
            <br></br>
        </div>
    )
}

export default PortfolioBox