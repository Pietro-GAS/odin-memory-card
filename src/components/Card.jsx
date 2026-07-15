import '../css/Card.css';

export function Card(props) {
    return (
        <button className="card" id={props.id} onClick={props.onClick}>
            {
            //<h3 className="card-title" id={props.id}>{'Card #' + props.id}</h3>
            }
            <img className="card-image" id={props.id} src={props.url} />
        </button>
    )
}