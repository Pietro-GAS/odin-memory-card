import '../css/Card.css';

export function Card(props) {
    return (
        <button className="card" onClick={props.onClick}>
            <h3 className="card-title">{props.title}</h3>
            <div className="card-image">Placeholder</div>
        </button>
    )
}