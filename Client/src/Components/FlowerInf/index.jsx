import { useParams } from "react-router-dom";
import "./FlowerInf.css"
import { ListFlowerInf,ListFlowers } from "../../Api/FlowersInf";
import FlowerCard from "../Catalog/FlowerCard";

const FlowerInf = () => {
    const params = useParams()
    const flower = ListFlowerInf(params.id);
    const AllFlowers = ListFlowers()

    const filteredFlowers = AllFlowers.filter(flowers => flowers.type_name == `${flower.type_name}`)

    const firstFive = filteredFlowers.slice(0,4)

    return(
        <section className="flowerinf">
            <div className="flowerinf__content">
                <img className="flowerinf__img" src={flower.image} alt="" />
                <div className="flowerinf__description">
                    <h2>{flower.name}</h2>
                    <h1 className="flowerinf__price">${flower.price}</h1>
                    <p>{flower.description}</p>
                    <h4>Size: {flower.size}</h4>
                    <h4>Type: {flower.type_name}</h4>
                    <button>Add</button>
                </div>
            </div>

            <h1>This might like You!!</h1>

            <div className="flowerinf__recomendations">
                {
                    firstFive.map((flower) => 
                    <FlowerCard 
                        key={flower.id}
                        id={flower.id}
                        name={flower.name}
                        img={flower.image}
                        
                    />
                    
                    )
                }
            </div>
        </section>
    )
};

export default FlowerInf;