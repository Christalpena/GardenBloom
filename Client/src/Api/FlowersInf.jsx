import { getFlowers,flowerInf } from './api'
import { useEffect, useState } from 'react'



/**
 * This function get all the flowers to show them in the catalog
 * @returns flowers
 */
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


/**
    * This function gets the flower information by id from the Django RestApi
    * @param {number} id - id
    * @returns {object} - A object with the flower information
*/
export function ListFlowerInf (id) {

    const [flower,setFlowerInf] = useState([])

    useEffect(() => {
        async function loadFlowerInf() {
            const res = await flowerInf(id);
            setFlowerInf(res.data)
        };
        loadFlowerInf();
    },[id])
    return(flower)
}