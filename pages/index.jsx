import { PrismicQuery } from '../cms/query'
import RowProducts from '../components/rowProducts'
import HeadMeta from '../components/headMeta'
import Header from '../components/header'
import styles from '../pagesStyles/Home.module.css'

export default function Home({ responseQuery }) {

  return (
    <>
      <HeadMeta />
      <Header />
      <div style={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/jewelry-black.jpg)',
      }}>
        <div className={styles.faded} />

        <div className={styles.content}>
          <h1 className={styles.left}>
            OS MELHORES ACESSÓRIOS 💎
            VOCÊ ENCONTRA AQUI!
          </h1>
          <h1 className={styles.right}>confira nosso catálogo de produtos🥰 e faça seu pedido pelo whatsapp</h1>
        </div>

        {
          responseQuery.map((item) => {
            return (
              <RowProducts key={item} category={item} />
            )
          })
        }
<<<<<<< HEAD

      </div>
    </>)
}


export async function getStaticProps() {
  const responseQuery = await PrismicQuery.getTags();

  return {
    props: { responseQuery }

  }
=======
      </div>
    </>
  )
>>>>>>> e3bdf8f003f2dbdc5ea56d57700d881a40ed4a0e
}

export async function getStaticProps() {
  const responseQuery = await PrismicQuery.getTags();

  return {
    props: { responseQuery },
    revalidate: 60
  }
}