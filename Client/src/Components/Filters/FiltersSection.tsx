import { useEffect, useState } from "react"
import { ListFlowers } from "../../Api/FlowersInf"
import React from "react"
import "./FilterSection.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoFilterSharp } from "react-icons/io5";

const Filters = ({filterPrice,filterNameOrSize}) => {

    const [types, setTypes] = useState<string[]>([]);
    const [size, setSize] = useState<string[]>([]);
    const [price1,setPrice1] =useState<number>(0);
    const [price2,setPrice2] = useState<number>(500)
    
    let flowers: Array<{ type_name: string, size: string }> = ListFlowers();
    
    useEffect(() => {
      if (flowers && flowers.length > 0) {
        const newTypes = Array.from(new Set(flowers.map((flower) => flower.type_name)));
        setTypes(newTypes);
    
        const newSize = Array.from(new Set(flowers.map((flower) => flower.size)));
        setSize(newSize);
      }
      const newPrice = price2 === 0 ? 500 : price2
      filterPrice(price1,newPrice)
    }, [flowers, price1,price2]);

    const clean = () => {
        setPrice1(1);
        setPrice2(500);
        filterNameOrSize("");
    }
    

    return(
        <div className="filters">
            <div className="filters__con">
                <IoFilterSharp size={'2rem'} />
                <Button variant="outlined" className="filters__cleanBtn" onClick={() => clean()}>clean</Button>
            </div>
            <hr />
            <div className="filters__container">
                <h1 className="filters__title">Price</h1>
                <Box className="filters__inputsBox"
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField 
                    id="outlined-number"
                    label="From"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={price1}
                    className="filters__input"
                    onChange={(e) => setPrice1(Number(e.target.value))} 
                    size="small"

                    />
                    <TextField 
                    id="outlined-number"
                    label="Under"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={price2}
                    className="filters__input"
                    onChange={(e) => setPrice2(Number(e.target.value))} 
                    size="small"

                    />
                </Box>
                
   
                <h1 className="filters__title">Types</h1>
                {
                    types.map((type) => {return (
                        <li key={type} onClick={() => filterNameOrSize('type_name',type)}>{type}</li>
                    )})
                } 
            
                <h1 className="filters__title">Sizes</h1>
                {
                    size.map((size) => {return(
                        <li key={size} onClick={() => filterNameOrSize('size',size)}>{size}</li>
                    )})
                } 
            </div>
        </div>
    )
}

export default Filters