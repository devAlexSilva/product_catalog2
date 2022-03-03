import { useEffect, useState } from 'react'
import { PrismicQuery } from '../cms/query'
import styles from '../componentsStyles/RowProducts.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function RowProducts({ category }) {

    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const results = await PrismicQuery.getProductsByTag(category);
        setProducts(results);
    }, [])

    return (
        <div className={styles.category}>


            <h1>{category}</h1>

            <div className={styles.row_left}>
               <ArrowBackIosIcon style={{fontSize:40}} />
            </div>
            <div className={styles.row_right}>
                <ArrowForwardIosIcon style={{fontSize:40}} />
            </div>

            <div className={styles.row_area}>
                <div className={styles.row}>
                    {
                        products.map((item) => {
                            return (


                                <ul key={item.productKey} className={styles.item}>
                                    <li><img src={item.productImg} alt={item.productName} /></li>
                                    <li><h3>{item.productName}</h3></li>
                                    <li><span>{item.productPrice}</span></li>
                                </ul>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


