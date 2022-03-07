import { useEffect, useState } from "react"
import { PrismicQuery } from "../cms/query"
import styles from '../componentsStyles/ProductSolo.module.css'

export default function ProductSolo({ itemName }) {

    const [product, setProduct] = useState({});
    useEffect(() => {
        const getData = async () => {
            const results = await PrismicQuery.getItemByName(itemName);
            setProduct(results[0]);
        }
        getData();
    }, [])

    return (
        <>
            { product &&
                <img className={styles.img_solo}
                    src={product?.productImg}
                    alt={product?.productName}
                />
            }
            {
                !product && <p style={{fontSize:50, textAlign: "center"}}>nenhum produto encontrado</p>
                
            }
        </>
    )
}