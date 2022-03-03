import { PrismicQuery } from '../cms/query'
import RowProducts from '../components/rowProducts'
import styles from '../pagesStyles/Home.module.css'

export default function Home({ responseQuery }) {

  return (

      <div style={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/night-sky.jpg)'
      }}>

      <div className={styles.faded} >
        </div>

      <h1>index</h1>

      {
        responseQuery.map((item) => {
          return (
            <RowProducts key={item} category={item} />
          )
        })
      }

    </div>
  )
}


export async function getStaticProps() {
  const responseQuery = await PrismicQuery.getTags();

  return {
    props: { responseQuery }

  }
}