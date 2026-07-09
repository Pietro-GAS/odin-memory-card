import '../css/Card.css';

export function Card(props) {
    return (
        <button className="card" id={props.id} onClick={props.onClick}>
            <h3 className="card-title" id={props.id}>{'Card #' + props.id}</h3>
            <div className="card-image" id={props.id}>Placeholder</div>
        </button>
    )
}