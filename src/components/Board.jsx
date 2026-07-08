import { Card } from './Card.jsx';
import { useState } from 'react';
import '../css/Board.css';

export function Board() {
    const [currentScore, setCurrentScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);

    function handleClick(event) {
        if (validateClick(event)) {
            const newScore = currentScore + 1;
            setCurrentScore(newScore);
            handleMax(newScore);
        } else {
            resetScore();
        }
    }

    function resetScore() {
        const newScore = 0;
        setCurrentScore(newScore);
        handleMax(newScore);
    }

    function handleMax(score) {
        if (score > maxScore) {
            setMaxScore(score);
        }
    }

    function validateClick(event) {
        const id = event.target.id;
        console.log('Selected: card #' + id);
        if (selectedCards.includes(id)) {
            console.log('Repeated card! Restarting...')
            setSelectedCards([]);
            return false;
        } else {
            const newSelectedCards = selectedCards;
            newSelectedCards.push(id);
            console.log(newSelectedCards);
            setSelectedCards(newSelectedCards);
            return true;
        }
    }

    function CardContainer() {
        const ids = [];
        for (let i=0; i<12; i++) {
            const rand = randInt(ids, 100);
            ids.push(rand);
            ids.sort((a, b) => a - b);
        }

        return (
            <div className="card-container">
                {ids.map((id) => {
                    //const id = crypto.randomUUID();
                    return <Card key={id} id={id} onClick={handleClick} />
                })}
            </div>
        )
    }

    function ScoreCounter() {
        return (
            <div className="score">
                <p>CURRENT SCORE: {currentScore}</p>
                <p>BEST SCORE: {maxScore}</p>
                <button onClick={resetScore}>Reset</button>
            </div>
        )
    }
    
    return (
        <div className="board">
            <ScoreCounter />
            <CardContainer />
        </div>
    )
}


function randInt(values, max) {
    const rand = Math.ceil(Math.random()*max);
    if (values.includes(rand)) {
        return randInt(values, max);
    } else {
        return rand;
    }
}

