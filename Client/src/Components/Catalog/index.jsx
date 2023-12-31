import './Catalog.css'
import { ListFlowers } from '../../Api/FlowersInf'
import FlowerCard from './FlowerCard'
import Filters from '../Filters/FiltersSection';
import { useEffect, useState } from 'react';
import SimpleSnackbar from './Alert';
import SplitButton from '../Filters/FilterSectionResponsive';
import Button from '@mui/material/Button';
import { IoFilterSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';


export function Catalog(props) {

    const flowers = ListFlowers();
    const [newFlowers, setFlowers] = useState(flowers);
    const {state} = useLocation();
    const [msg,setMsg] = useState();
    console.log(newFlowers)

    /**
     * This function is to filter the flowers by name or size, this function needs two params: the first one is the name of the filter type (name or size) and the second one is what the user clicks on so that it is filtered by that.
     * @param {*} name 
     * @param {*} data 
     */
    const filterNameOrSize = (name,data) => {
        setMsg("")        
        const filteredFlowers = flowers.filter(flower => flower[name] === data);
        data === "" ? setFlowers(flowers) : setFlowers(filteredFlowers);
    };

    /**
     *This function is to filter the flower whose price is greater than or equal to the given price and less than or equal to the given price.
     * @param {*} price1 
     * @param {*} price2 
     */

    const filterPrice =(price1,price2) =>{
        setMsg("")        
        if(price1  !== 0){

            const filteredFlowers = flowers.filter(flower => flower.price >= price1 && flower.price <= price2);
            setFlowers(filteredFlowers)
        }else{
            setFlowers(flowers);
        };
    };

    useEffect(() => {
        //Checking if there are data in the useLocation
        if(state){
            state.data.length > 0 ? setFlowers(state.data) : setMsg('Flower Not Found')
            console.log(msg)
        } else {
            setFlowers(flowers)
        }
        
    }, [flowers,state]);

    const clean = () => {
        filterNameOrSize("");
    };

    return(
        <section className='flowers'>
            <div className='flowers__filter'>
                <Filters filterNameOrSize={filterNameOrSize} filterPrice={filterPrice}/>
            </div>
            <div className='flowers__filterResponsive'>
                <IoFilterSharp size={'1.5rem'} />
                <SplitButton filterNameOrSize={filterNameOrSize} filterBy = 'type_name' labelName='flower' />
                <SplitButton filterNameOrSize={filterNameOrSize} filterBy='size' labelName='size' />
                <Button variant="outlined" className="filters__btn" onClick={clean}>clean</Button>   

            </div>
            {
                msg ? 
                <div className='flowers__notFoundMsg'>
                    <h1 > {msg} </h1>
                    <img src="./img/logo.png" alt="" />
                </div>:
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
            }
            {
                props.open ? <SimpleSnackbar setOpen={props.setOpen}/> : <></>
            }
        </section>
    )
}