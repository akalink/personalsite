import React from "react";
import './Bio.css';



function Bio(){
    function clicking(e){
        console.log("clicking");
    }
    return (
        <div id="bio">
            <div className="biopic">
                <img  src="https://cdn.discordapp.com/attachments/551232775554859020/1032732132327571516/summedian_lunar_color2.png" alt="my picture" />
            </div>
            <article>
                
                <strong>Garrett McPherson</strong> is cool
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sit in possimus cupiditate repellendus? Excepturi assumenda similique, sunt quibusdam facilis perspiciatis eum reprehenderit eveniet alias accusantium ea, dolores quaerat minima.
            </article>
           {/* <div onMouseOver={clicking}>Click me</div> */}
        </div>
    )
}
export default Bio;