import { Card } from './Card.jsx';
import { useState } from 'react';
import { getData, randInt } from '../scripts/get-data.js';
import '../css/Board.css';

const ids = [];
for (let  i=0; i<12; i++) {
    const id = randInt (ids, 1084);
    ids.push(id);
}
//console.log(ids);

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
        //const ids = [];
        //for (let i=0; i<12; i++) {
        //    const rand = randInt(ids, 100);
        //    ids.push(rand);
        //    ids.sort((a, b) => a - b);
        //}

        const indexes = [];
        const inputs = [];
        for (let i=0; i<12; i++) {
            const index = randInt (indexes, ids.length);
            indexes.push(index);
            const id = ids[index - 1];
            const url = `https://picsum.photos/id/${id}/200/`;
            const input = [id, url];
            inputs.push(input);
        }

        return (
            <div className="card-container">
                {inputs.map(([id, url]) => {
                    //const id = crypto.randomUUID();
                    return <Card key={id} id={id} url={url} onClick={handleClick} />
                })}
            </div>
        )
    }

    function ScoreCounter() {
        return (
            <div className="score">
                <p><span>CURRENT SCORE: </span><span>{currentScore}</span></p>
                <p><span>BEST SCORE: </span><span>{maxScore}</span></p>
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