import React from "react";
import "./Music.css"
import MusicVidsBox from "./MusicVidsBox";
const vids = [
    {link: "https://www.youtube.com/embed/3sQfFREBeuk?si=9jnyYXF4VXto3OaS"},
    {link: "https://www.youtube.com/embed/sR_y_-GmNh8?si=G5HMwytnqNvWDMXo"},
    {link: "https://www.youtube.com/embed/N_ECsPwUb48?si=DH_tVviQgkp3r4jkS"},
    

]

function Music(){
    
    return (
        <div className="music-area">
            {vids.map((vids) => {
                return <MusicVidsBox link={vids.link}/>})
            }
            
        </div>
    )
}

export default Music