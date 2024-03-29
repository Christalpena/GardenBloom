import "./Catalog.css"
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";

const FlowerCard = (props) => {   
    
    return (
        <div className="card__container">
            <div className="card">
                <Link  to={`/Catalog/${props.name}/${props.id}`} style={{textDecoration:'none',textAlign:"center"}} replace>
                    <img className="card__img" src={props.img} alt={props.name} />
                    <div className="card__content">
                        <h4 className="card__title">{props.name}</h4>
                        <h5 className="card__price">${props.price}</h5>
                        {
                            props.discount === 0 ?  <></>
                            :                         
                            <p className="card__discount">-{props.discount}%</p>
                        }

                    </div>
                </Link>
            </div>
            <div className="card__icons">

    
                    <IoHeartOutline 
                    className="card__icon" />
                    
                    <BsBagHeart
                    onClick={() => {
                        props.addItem({
                            id: props.id,
                            name: props.name,
                            price: props.price,
                            image: props.img,
                            discount:props.discount,
                            quantity: 1,
                            subTotal: (props.price)
                        },
                        props.setOpen(!props.open)
                        
                        ); 
                    }} 
                    className="card__icon" />
            </div>
    </div>

    )
};

export default FlowerCard;