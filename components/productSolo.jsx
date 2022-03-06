import { useEffect, useRef, useState } from "react"
import { PrismicQuery } from "../cms/query"
import styles from '../componentsStyles/ProductSolo.module.css'

export default function ProductSolo({ itemId }) {

    const [product, setProduct] = useState({});
    useEffect(() => {
        const getData = async () => {
            const results = await PrismicQuery.getItemById(itemId);
            setProduct(results[0].data);
        }
        getData();
    }, [])

    return (
            <img className={styles.img_solo}
                src={product.image?.url}
                alt={product.name}
            />
    )
}