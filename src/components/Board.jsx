import { Card } from './Card.jsx'

export function Board() {
    return (
        <div className="board">
            <div className="score">
                <p>Current score: X</p>
                <p>Best Score: Y</p>
            </div>
            <CardContainer />
        </div>
    )
}


function CardContainer() {
    const titles = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

    return (
        <div className="card-container">
            {titles.map((title) => {
                const id = crypto.randomUUID();
                return <Card key={id} title={title} />
            })}
        </div>
    )
}