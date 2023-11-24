import "./Catalog.css"

import { Link } from "react-router-dom";

const FlowerCard = (props) => {
    console.log(props.name)

    return (
        <Link  to={`/Catalog/${props.name}/${props.id}`} replace>
            <div className="card">
                <img className="card__img" src={props.img} alt="" />
                <div className="card__content">
                    <h4 className="card__title">{props.name}</h4>
                    <p>losaddasdasd</p>
                </div>
            </div>
        </Link>

    )
};

export default FlowerCard;