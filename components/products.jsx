import { useCallback, useEffect, useState } from 'react'
import { PrismicQuery } from '../cms/query'
import styles from '../componentsStyles/Products.module.css'
import ProductSolo from './productSolo'

export default function Products({ category }) {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const results = await PrismicQuery.getProductsByTag(category);
            setProducts(results);
        }
        getData()
    }, [category])
        
    const [scrollMarginX, setScrollMarginX] = useState(0);
    const [productSize, setProductSize] = useState(100)
    const [windowSizeCurrent, setWindowSizeCurrent] = useState(400);

    function clickArrowLeft() {
        let leftX = scrollMarginX + 320;
        if (leftX > 0) leftX = 0;
        setScrollMarginX(leftX);
    }

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
 
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [itemToMakeItbig, setItemToMakeItbig] = useState('');

    const fullScreenItem = useCallback((itemName) => {
        setIsFullScreen(true);
        setItemToMakeItbig(itemName);
    }, []);

    const closeFullScreenItem = useCallback(() => {
        setIsFullScreen(false);
    }, [])

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
                                <ul
                                    key={item.productKey}
                                    className={styles.card}
                                    onClick={() => fullScreenItem(item.productName)}
                                >
                                    <li><h3>{item.productName}</h3></li>
                                    <li><img loading='lazy' src={item.productImg} alt={item.productName} /></li>
                                    <li><span>{item.productPrice}</span></li>
                                </ul>
                            )
                        })
                    }
                </div>
            </main>
            {
                isFullScreen &&
                <div className={styles.img_container}>
                    <div className={styles.img_solo}>
                        <div className={styles.close}>
                            <i className='fas fa-times'
                                onClick={closeFullScreenItem}>
                            </i>
                        </div>
                        <ProductSolo itemName={itemToMakeItbig} />
                    </div>
                </div>
            }
        </section>
    )
}


