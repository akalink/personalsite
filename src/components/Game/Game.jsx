import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";

const cardImages = [
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/1005518645109194762/IMG_3050.png", matched: false},
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/1032732132327571516/summedian_lunar_color2.png", matched: false},
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/1031989148841693225/Untitled1.png", matched: false},
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/955866666720440410/IMG_2839.png", matched: false},
    { "src": "https://github.com/akalink/personalsite/blob/main/raw%20stuff/diamond.png?raw=true", matched: false}
    
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

            <button id="btn" onClick={shuffleCards} ><strong>Shuffle</strong></button>
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