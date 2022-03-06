import { useEffect, useState } from 'react'
import { PrismicQuery } from '../cms/query'
import styles from '../componentsStyles/Products.module.css'

export default function Products({ category }) {

    const [scrollMarginX, setScrollMarginX] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const results = await PrismicQuery.getProductsByTag(category);
            setProducts(results);
        }
        getData()
    }, [category])

    function clickArrowLeft() {
        let leftX = scrollMarginX + 320;
        if (leftX > 0) leftX = 0;
        setScrollMarginX(leftX);
    }

    const [productSize, setProductSize] = useState(100)
    const [windowSizeCurrent, setWindowSizeCurrent] = useState(400);

    function clickArrowRight() {//0 7% padding do elemento    
        if (window.innerWidth > 768) {
            setWindowSizeCurrent(window.innerWidth - window.innerWidth * 0.15)
            setProductSize(160)
        } else {
            setWindowSizeCurrent(window.innerWidth);
            setProductSize(137)
        }
        let rightX = scrollMarginX - productSize * 2; //quantidade de itens scrollados
        let rowProductsSize = products.length * productSize; // widht itens + margin = 160
        if (rowProductsSize > windowSizeCurrent) {
            if ((windowSizeCurrent - rowProductsSize) > rightX) {
                rightX = (windowSizeCurrent - rowProductsSize);
            }
            setScrollMarginX(rightX);
        }
    }

    return (
        <section className={styles.category}>
            <h1>{category}</h1>
            <div
                className={styles.row_left}
                onClick={clickArrowLeft}>
                <i className="fa-solid fa-angle-left" style={{ fontSize: 50 }}></i>
            </div>
            <div
                className={styles.row_right}
                onClick={clickArrowRight}>
                <i className="fa-solid fa-angle-right" style={{ fontSize: 50 }}></i>
            </div>
            <main className={styles.row_area}>
                <div className={styles.row}
                    style={{
                        marginLeft: scrollMarginX,
                        width: products.length * 160 //tamanho dos itens(150px) + a margin(10px) se tiverem
                    }}
                >
                    {
                        products.map((item) => {
                            return (
                                <ul key={item.productKey} className={styles.card}>
                                    <li><h3>{item.productName}</h3></li>
                                    <li><img loading='lazy' src={item.productImg} alt={item.productName} /></li>
                                    <li><span>{item.productPrice}</span></li>
                                </ul>
                            )
                        })
                    }
                </div>
            </main>
        </section>
    )
}


