import { useEffect, useState } from "react"
import { ListFlowers } from "../../Api/FlowersInf"
import { Link } from "react-router-dom"
import React from "react"
import "./FilterSection.css"

const Filters = ({filterType,filterSize}) => {

    const [types, setTypes] = useState<string[]>([]);
    const [size, setSize] = useState<string[]>([]);
    
    let flowers: Array<{ type_name: string, size: string }> = ListFlowers();
    
    useEffect(() => {
      if (flowers && flowers.length > 0) {
        const newTypes = Array.from(new Set(flowers.map((flower) => flower.type_name)));
        setTypes(newTypes);
    
        const newSize = Array.from(new Set(flowers.map((flower) => flower.size)));
        setSize(newSize);
      }
    }, [flowers]);
    

    return(
        <div className="filters">
            <div className="filters__price">
                <h1 className="filters__title">Price</h1>

            </div>
            <div className="filters__type">
                <h1 className="filters__title">Types</h1>
                {
                    types.map((type) => {return (
                    <Link style={{textDecoration:'none'}}
                        to={`/Catalog/${type}`} 
                        key={type}
                        onClick={() => filterType(type)}
                        >
                        <li>{type}</li>
                    </Link>)})
                } 
            </div>
            
            <div className="filters__size">
                <h1 className="filters__title">Sizes</h1>
                {
                    size.map((size) => {return (
                    <Link 
                        style={{textDecoration:'none'}}
                        to={`/Catalog/${size}`} 
                        key={size} 
                        onClick={() => filterSize(size)}>
                        <li>{size}</li>
                    </Link>                       
                    )})
                } 
            </div>

        </div>
    )
}

export default Filters