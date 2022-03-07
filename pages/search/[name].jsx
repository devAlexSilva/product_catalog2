import Link from "next/link"
import ProductSolo from "../../components/productSolo"
import styles from '../../componentsStyles/Products.module.css'

export default function searchProduct({ name }) {

    return (
        <section>
            <div className={styles.img_container}>
                <div className={styles.img_solo}>
                    <div className={styles.close}>
                        <Link href='/'>
                            <i className='fas fa-times'></i>
                        </Link>
                    </div>
                    <ProductSolo itemName={name} />
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(ctx) {

    return {
        props: ctx.params
    }
}