import { useEffect, useState } from 'react'
import { PrismicQuery } from '../cms/query'
import styles from '../componentsStyles/RowProducts.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function RowProducts({ category }) {

    const [scrollMarginX, setScrollMarginX] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const results = await PrismicQuery.getProductsByTag(category);
            setProducts(results);
        }
        getData()
    }, [])

    function clickArrowLeft() {
        let leftX = scrollMarginX + 320;
        if (leftX > 0) leftX = 0;
        setScrollMarginX(leftX);
    }

    function clickArrowRight() {
        let rightX = scrollMarginX - 320;
        let rowProductsSize = products.length * 160; // widht itens + margin = 160
        if ((window.innerWidth - rowProductsSize) > rightX) {
            rightX = (window.innerWidth - rowProductsSize) - 30;
        }
        setScrollMarginX(rightX);
    }

    return (
        <div className={styles.category}>
            <h1>{category}</h1>
            <div
                className={styles.row_left}
                onClick={clickArrowLeft}>
                <ArrowBackIosIcon style={{ fontSize: 40 }} />
            </div>
            <div
                className={styles.row_right}
                onClick={clickArrowRight}>
                <ArrowForwardIosIcon style={{ fontSize: 40 }} />
            </div>
            <div className={styles.row_area}>
                <div className={styles.row}
                    style={{
                        marginLeft: scrollMarginX,
                        width: products.length * 160 //tamanho dos itens(150px) + a margin(10px) se tiverem
                    }}
                >
                    {
                        products.map((item) => {
                            return (
                                <ul key={item.productKey} className={styles.item}>
                                    <li><h3>{item.productName}</h3></li>
                                    <li><img loading='lazy' src={item.productImg} alt={item.productName} /></li>
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


