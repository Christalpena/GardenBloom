import "./Catalog.css"
import { AiOutlineHeart } from 'react-icons/ai'
import {LiaShoppingBagSolid} from 'react-icons/lia'


const FlowerCard = (props) => {
    return (
        <div className="card" key={props.id}>
            <img className="card__img" src={props.url} alt="" />
            <div className="card-inf__content">
                <h5 className="card-inf__content__name">{props.name}</h5>
                <p className="card-inf__content__price">{props.price}</p>
            </div>

            <div>
                <AiOutlineHeart cursor="pointer" size="2rem" />
                <LiaShoppingBagSolid cursor="pointer" size="2rem"/>
            </div>
        </div>
    )
};

export default FlowerCard;