import React from "react"
import { redirect, useNavigate } from "react-router-dom";
import "./intro.css"

function Intro(){
    let navigate = useNavigate();

    function handleClick(){
        navigate("/about")
    }
    return(
        <div className="btn-area">
            <button className="this-btn" type="button" onClick={handleClick}><strong>Enter</strong></button>
        </div>
    )
}
export default Intro