import './Catalog.css'
import { ListFlowers } from '../../Api/FlowersInf'
import FlowerCard from './FlowerCard'
import Filters from '../Filters/FiltersSection';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export function Catalog() {
    const flowers = ListFlowers();
    const [newFlowers, setFlowers] = useState(flowers);
    const [param, setParam] = useState(useParams)

    const filterType = (type) => {
        const filteredFlowers = flowers.filter(flower => flower.type_name === type)
        setFlowers(filteredFlowers);

    }

    const filterSize = (size) => {
        const filteredFlowers =flowers.filter(flower => flower.size === size)
        setFlowers(filteredFlowers);
    }

    useEffect(() => {
        setFlowers(flowers);
    }, [flowers]);

    return(
        <section className='flowers'>
            <div className='flowers__filter'>
                <Filters filterType={filterType} filterSize={filterSize} />
            </div>
            <div className='flowers__container'>
                {
                    newFlowers.map((flower) => 
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
}