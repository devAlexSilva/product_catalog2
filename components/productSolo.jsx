import { useEffect } from "react"
import { PrismicQuery } from "../cms/query"

export default function ProductSolo({ itemId }){
    
    useEffect(()=>{
        const getData = async() => {
            const data = await PrismicQuery.getItemById(itemId);
            console.log(data);
        }
        getData();
        
    }, [])
    
    return(
        <>


        </>
    )
}