import React from "react";
import "./Services.css"
import { Link } from "react-router-dom";



const ServiceCard = (props) => {
    const {img, title, description,direction} = props; 

    return(
        <div className={`serviceCard ${direction}`}>
            <img src={img} alt="" className="serviceCard__img" />
            <div className="serviceCard__container">
                <h1 className="serviceCard__title">{title}</h1>
                <p className="servicesCard__description">{description}</p>
                <Link className="serviceCard__btn"  to={"/Contacts"}>Contact Us</Link>
            </div>
        </div>
    )
};


export default ServiceCard;