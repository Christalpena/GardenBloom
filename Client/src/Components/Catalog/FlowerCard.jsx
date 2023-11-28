import "./Catalog.css"
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import SimpleSnackbar from './Alert';
import { useState } from "react";

const FlowerCard = (props) => {   
    const [open, setOpen] = useState(false);
    const item = props.items.find(item => item.id === props.id);

    const setItem = () => {
        setOpen(true);

        //Checking if the item exits in the array
        if(item){
            props.setItems(prevItems => 
                prevItems.map(item => 
                    item.id === props.id ?
                    {...item,quantity: item.quantity + 1} : item
                    ));
        } else {
            props.setItems(prevData => [
                ...prevData, {
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    image: props.img,
                    quantity: 1
                }
            ]);
        }
    };
    
    const rest = () => {
        props.setItems(prevItems => 
            prevItems.map(item => 
                item.id === props.id ?
                {...item,quantity: item.quantity - 1} : item).filter(item => item.quantity !== 0)
                );
    };
    
    const url = window.location.pathname;

    return (
            <div className="card">
                <Link  to={`/Catalog/${props.name}/${props.id}`} style={{textDecoration:'none',textAlign:"center"}} replace>
                    <img className="card__img" src={props.img} alt={props.name} />
                    <div className="card__content">
                        <h4 className="card__title">{props.name}</h4>
                        <p>losaddasdasd</p>
                    </div>
                </Link>
                <div className="card__icons">

                {
                    url === '/Catalog/shopcard' ? 
                    <>
                        <FaPlus 
                        size={'1.5rem'} 
                        className="card__icon" 
                        onClick={() => setItem()} />

                        <h4>{item.quantity}</h4>

                        <TiMinus  onClick={() => rest()} size={'1.5rem'} className="card__icon" />
                    </>
                    : 
                
                    <>
                        <IoHeartOutline 
                        size={'1.5rem'} 
                        className="card__icon" />
                        
                        <BsBagHeart
                        onClick={() => setItem()} 
                        size={'1.5rem'} 
                        className="card__icon" />
                    </>
                }
                </div>
                {
                    open ? <SimpleSnackbar setOpen={setOpen} /> : <></>
                }
            </div>

    )
};

export default FlowerCard;