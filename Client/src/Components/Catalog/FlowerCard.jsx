import "./Catalog.css"

const FlowerCard = (props) => {
    return (
        <div className="card">
            <img className="card__img" src={props.url} alt="" />
            <h4 className="card__name">{props.name}</h4>
            <p className="card__price">{props.price}</p>
        </div>
    )
};

export default FlowerCard;