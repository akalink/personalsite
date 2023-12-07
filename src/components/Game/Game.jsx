import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";
import "./Game.css"

const cardImages = [
    { "src": "https://github.com/akalink/personalsite/blob/main/raw%20stuff/cube.png?raw=true", matched: false},
    { "src": "https://github.com/akalink/personalsite/blob/main/raw%20stuff/donut.png?raw=true", matched: false},
    { "src": "https://github.com/akalink/personalsite/blob/main/raw%20stuff/sphere.png?raw=true", matched: false},
    { "src": "https://github.com/akalink/personalsite/blob/main/raw%20stuff/triangle.png?raw=true", matched: false}
    
];
function Game() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        shuffleCards();
    }, [])

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5 )
        .map((card) => ({...card, id: Math.random() }))
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0);
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
        
    }

    useEffect(() => {
        
        if(choiceOne && choiceTwo){
            setDisabled(true)
            if(choiceOne.src === choiceTwo.src){
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src){
                            return {...card, matched: true}
                        } else {
                            return card;
                        }
                    })
                })
                //console.log(choiceOne)
                resetTurn();
                
            } else {
                setTimeout(() => resetTurn(), 1000)
                
            }
        }
    }, [choiceTwo, choiceTwo])

    console.log(cards)

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns +1)
        setDisabled(false)
    }

    return (
        <div>
            {/*<img src={cardImages[1].src} />*/}
            <div id="btn-hover">
                <button id="btn" onClick={shuffleCards} ><strong>Shuffle</strong></button>
            </div>
            <div className="card-grid">
            {cards.map(card => (   
                <CardBox key={card.id} card={card} handleChoice={handleChoice} 
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
                />   
            ))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    )
}
export default Game;