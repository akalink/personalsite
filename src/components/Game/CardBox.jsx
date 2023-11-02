import React from "react";
import './Game.css';
export default function CardBox({card, handleChoice, flipped, disabled}){

    const handleClick = () => {
        if(!disabled){
            handleChoice(card);
        }
        
    }
    return (
        <div className="card" key={card.key}>
            <div className={flipped? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front"/>
                <img className="back" 
                    src="https://github.com/akalink/personalsite/blob/main/raw%20stuff/diamond.png?raw=true" 
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    )
}

