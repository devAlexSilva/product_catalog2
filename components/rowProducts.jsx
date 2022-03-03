import { useEffect, useState } from 'react'
import { PrismicQuery } from '../cms/query'
import styles from '../componentsStyles/RowProducts.module.css'

export default function RowProducts({ category }) {

    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const results = await PrismicQuery.getProductsByTag(category);
        setProducts(results);
    }, [])

    return (
        <div className={styles.category} >
                <h1>{category}</h1>
            <div className={styles.card_row}>
 

                {
                    products.map((item) => {
                        return (
                            <ul key={item.productKey} className={styles.card}>
                                <li><img src={item.productImg} alt={item.productName}/></li>
                                <li><p>{item.productName}</p></li>
                                <li><p>{item.productPrice}</p></li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}