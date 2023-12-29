import './Catalog.css'
import { ListFlowers } from '../../Api/FlowersInf'
import FlowerCard from './FlowerCard'
import Filters from '../Filters/FiltersSection';
import { useEffect, useState } from 'react';
import SimpleSnackbar from './Alert';
import SplitButton from '../Filters/FilterSectionResponsive';
import Button from '@mui/material/Button';
import { IoFilterSharp } from "react-icons/io5";


export function Catalog(props) {

    const flowers = ListFlowers();
    const [newFlowers, setFlowers] = useState(flowers);


    const filter = (name,data) => {        
        const filteredFlowers = flowers.filter(flower => flower[name] === data)
        data === "" ? setFlowers(flowers) : setFlowers(filteredFlowers);
    }

    const filterPrice =(price1,price2) =>{
        if(price1  !== 0){
            const filteredFlowers = flowers.filter(flower => flower.price >= price1 && flower.price <= price2);
            setFlowers(filteredFlowers)
        }else{
            setFlowers(flowers)
        }
    }

    useEffect(() => {
        setFlowers(flowers);
    }, [flowers]);
    const clean = () => {
        filter("");
    }

    return(
        <section className='flowers'>
            <div className='flowers__filter'>
                <Filters filter={filter} filterPrice={filterPrice}/>
            </div>
            <div className='flowers__filterResponsive'>
                <IoFilterSharp size={'1.5rem'} />
                <SplitButton filter={filter} filterBy = 'type_name' labelName='flower' />
                <SplitButton filter={filter} filterBy='size' labelName='size' />
                <Button variant="outlined" className="filters__btn" onClick={clean}>clean</Button>   

            </div>
            <div className='flowers__container'>
                {
                    newFlowers.map((flower) => 
                    <FlowerCard 
                        key={flower.id}
                        id={flower.id}
                        name={flower.name}
                        img={flower.image}
                        price={flower.price}
                        items={props.items}
                        discount={flower.discount}
                        addItem={props.addItem}
                        setOpen={props.setOpen}
                        open={props.open}

                    /> 
                    )
                }
            </div>
            {
                props.open ? <SimpleSnackbar setOpen={props.setOpen}/> : <></>
            }
        </section>
    )
}