import { getFlowers } from '../../Api/api'
import { useEffect, useState } from 'react'

export function ListApi () {
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