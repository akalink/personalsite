import React from "react";
import "./VR.css";

function VRBox(props){
    return (
        <div className="feature">
                <img src={props.img} />
                <div>
                    <h1>{props.title}</h1>
                    <a href={props.link} target="_blank">Link to Experince</a>
                    <p>{props.description}</p>
                </div>
                <br />
            </div>
            
    )
}
export default VRBox;