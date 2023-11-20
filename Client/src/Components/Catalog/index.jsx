import './Catalog.css'
import { ListFlower } from './FlowersInf'
import FlowerCard from './FlowerCard'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export function Catalog() {
    const [types,setTypes] = useState([]);
    const [size,setSize] = useState([]);
    const flowers = ListFlower();
    
    useEffect(() => {
        if (flowers && flowers.length > 0) {
          const newTypes = Array.from(new Set(flowers.map((flower) => flower.type_name)));
          setTypes(newTypes);
        }
      }, [flowers]);

      useEffect(() => {
        if (flowers && flowers.length > 0) {
          const newSize = Array.from(new Set(flowers.map((flower) => flower.size)));
          setSize(newSize);
        }
      }, [flowers]);

    return(
        <div className='flowers-container'>
            <div className='flowers-container__filters'>
                <h3 className='flowers-container__filters__title'>Price</h3>
                <div className='flowers-container__filters-inputs__container'>
                    <input className='flowers-container__filters-inputs__container__item' type="number" />
                    <p>From</p>
                    <input className='flowers-container__filters-inputs__container__item' type="number" />
                    <p>To</p>
                </div>
                <button className='flowers-container__filters__btn'>filter</button>
                <h3 className='flowers-container__filters__title'>Type</h3>

                <div className='flowers-container__filters-type__container'>
                    <ul>
                        {
                        types.map((types) => {return (<Link to={`/${types}`} key={types}><li>{types}</li></Link>)})
                        }
                    </ul>
                </div>

                <h3 className='flowers-container__filters__title'>Size</h3>
                    <ul>
                        {
                        size.map((size) => {return (<Link to={`/${size}`} key={size}><li>{size}</li></Link>)})
                        }
                    </ul>
            </div>
            <div className='flowers-container__content'>
                {
                flowers.map((flower) => 
                <FlowerCard
                key={flower.id} 
                url={flower.image}
                name={flower.name}
                price={flower.price}
                />
                )}
            </div>


        </div>
    )
}