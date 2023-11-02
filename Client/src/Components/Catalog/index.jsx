import './Catalog.css'
import { ListApi } from './ListApiFlowers'
import FlowerCard from './FlowerCard'

export function Catalog() {
    const flowers = ListApi()
    console.log(flowers)

    return(
        <div className='flowers-container'>
            {
            flowers.map((flower) => 
            <FlowerCard 
            url={flower.image}
            name={flower.name}
            price={flower.price}
            />
            )}
        </div>
    )
}