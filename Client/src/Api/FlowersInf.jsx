import { getFlowers,flowerInf } from './api'
import { useEffect, useState } from 'react'

export function ListFlowers () {
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        async function loadFlowers() {
            const res = await getFlowers();
            setFlowers(res.data);
        };
        loadFlowers();
    },[])

    return(flowers)
}

export function ListFlowerInf (id) {
    const [flower,setFlowerInf] = useState([])

    useEffect(() => {
        async function loadFlowerInf() {
            const res = await flowerInf(id);
            setFlowerInf(res.data)
        };
        loadFlowerInf();
    },[])
    return(flower)
}