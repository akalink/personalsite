import React from "react";
import './Bio.css';



function Bio(){
    function clicking(e){
        console.log("clicking");
    }
    return (
        <div id="bio">
            <article>
                <strong>Garrett McPherson</strong> is cool
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sit in possimus cupiditate repellendus? Excepturi assumenda similique, sunt quibusdam facilis perspiciatis eum reprehenderit eveniet alias accusantium ea, dolores quaerat minima.
            </article>
            <div onMouseOver={clicking}>Click me</div>
        </div>
    )
}
export default Bio;