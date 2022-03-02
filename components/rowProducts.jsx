import styles from '../componentsStyles/RowProducts.module.css'
export default function RowProducts({ category }) {


    return (
        <div className={styles.sectionCategory}>
            <h1>{category}</h1>
        </div>
    )
}

