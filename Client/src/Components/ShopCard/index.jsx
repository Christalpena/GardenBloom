import "./ShopCard.css"
import FlowerCard from "../Catalog/FlowerCard";

const ShopCard = (props) => {
    return(
        <section style={{marginTop:'8rem'}} className="shopCard">
                {
                    props.items.map((flower) => 
                    <FlowerCard 
                        key={flower.id}
                        id={flower.id}
                        name={flower.name}
                        img={flower.image}
                        items={props.items}
                        setItems={props.setItems}
                    /> 
                    )
                }
        </section>
    )
};

export default ShopCard;