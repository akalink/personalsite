import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";

const cardImages = [
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/1005518645109194762/IMG_3050.png", matched: false},
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/1031960420828856340/summedian_lunar_color.png", matched: false},
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/1031989148841693225/Untitled1.png", matched: false},
    { "src": "https://cdn.discordapp.com/attachments/551232775554859020/955866666720440410/IMG_2839.png", matched: false}
    
];
function Game() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5 )
        .map((card) => ({...card, id: Math.random() }))

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

            <button onClick={shuffleCards} >Shuffle</button>
            <div className="card-grid">
            {cards.map(card => (   
                <CardBox key={card.id} card={card} handleChoice={handleChoice} 
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
                />   
            ))}
            </div>
            
        </div>
    )
}
export default Game;