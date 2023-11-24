import "./Catalog.css"
import { IoHeartOutline,IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";

const FlowerCard = (props) => {
    console.log(props.name)

    return (
        <Link  to={`/Catalog/${props.name}/${props.id}`} style={{textDecoration:'none'}} replace>
            <div className="card">
                <img className="card__img" src={props.img} alt={props.name} />
                <div className="card__content">
                    <h4 className="card__title">{props.name}</h4>
                    <p>losaddasdasd</p>
                </div>
                <div className="card__icons">
                    <IoHeartOutline size={'1.5rem'} className="card__icon"/>
                    <BsBagHeart size={'1.5rem'} className="card__icon" />
                </div>
            </div>
        </Link>

    )
};

export default FlowerCard;