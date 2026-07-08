import { Card } from './Card.jsx';
import { useState } from 'react';
import '../css/Board.css';

export function Board() {
    const [currentScore, setCurrentScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);

    function handleClick() {
        const newScore = currentScore + 1;
        setCurrentScore(newScore);
        handleMax(newScore);
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

    function CardContainer() {
        const titles = [
            'Card 1', 'Card 2', 'Card 3', 'Card 4', 
            'Card 5', 'Card 6', 'Card 7', 'Card 8', 
            'Card 9', 'Card 10', 'Card 11', 'Card 12'
        ];

        return (
            <div className="card-container">
                {titles.map((title) => {
                    const id = crypto.randomUUID();
                    return <Card key={id} title={title} onClick={handleClick} />
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




