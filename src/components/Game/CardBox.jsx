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
                    src="https://media.overstockart.com/optimized/cache/data/product_images/VG485-1000x1000.jpg" 
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    )
}

